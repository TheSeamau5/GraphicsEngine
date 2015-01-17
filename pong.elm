import Engine (..)
import Engine.Material.Material (MaterialProperty)
import Math.Vector3 (vec3, Vec3)
import Engine.Shader.GouraudShader (gouraudShader)

import Time (..)
import Signal (..)
import Keyboard
import Window

import Graphics.Element (Element)

-- INPUT

type alias Input = {
  space : Bool,
  paddle1 : Int,
  paddle2 : Int,
  delta : Time
}


delta : Signal Time
delta = inSeconds <~ fps 35

input : Signal Input
input = sampleOn delta <| Input <~ Keyboard.space
                                 ~ map .y Keyboard.wasd
                                 ~ map .y Keyboard.arrows
                                 ~ delta



-- MODEL

(gameWidth, gameHeight) = (600, 400)
(halfWidth, halfHeight) = (300, 200)


type alias Object a = { a |
  x : Float,
  y : Float,
  vx : Float,
  vy : Float
}

type alias Ball = Object {}

type alias Player = Object { score : Int }

type State = Play | Pause

type alias Game = {
  state : State,
  ball : Ball,
  player1 : Player,
  player2 : Player
}

player : Float -> Player
player x = { x = x, y = 0, vx = 0, vy = 0, score = 0 }

defaultGame : Game
defaultGame = {
  state = Pause,
  ball = { x = 0, y = 0, vx = 200, vy = 200 },
  player1 = player (20 - halfWidth),
  player2 = player (halfWidth - 20) }


-- UPDATE

near : Float -> Float -> Float -> Bool
near n c m = m >= n - c && m <= n + c

within : Ball -> Player -> Bool
within ball player =
  (ball.x |> near player.x 8) && (ball.y |> near player.y 20)


stepV : Float -> Bool -> Bool -> Float
stepV v lowerCollision upperCollision =
  if | lowerCollision -> abs v
     | upperCollision -> 0 - abs v
     | otherwise      -> v


stepObj : Time -> Object a -> Object a
stepObj t ({x,y,vx,vy} as obj) =
  { obj | x <- x + vx * t,
          y <- y + vy * t }

stepBall : Time -> Ball -> Player -> Player -> Ball
stepBall t ({x,y,vx,vy} as ball) player1 player2 =
  if not (ball.x |> near 0 halfWidth)
  then { ball | x <- 0, y <- 0}
  else
    let vx' = stepV vx (ball `within` player1) (ball `within` player2)
        vy' = stepV vy (y < 7 - halfHeight) (y > halfHeight - 7)
    in
      stepObj t { ball | vx <- vx', vy <- vy' }

stepPlyr : Time -> Int -> Int -> Player -> Player
stepPlyr t dir points player =
  let player' = stepObj t { player | vy <- toFloat dir * 200 }
      y' = clamp (22 - halfHeight) (halfHeight - 22) player'.y
      score' = player.score + points
  in
    { player' | y <- y', score <- score' }

stepGame : Input -> Game -> Game
stepGame {space, paddle1, paddle2, delta}
         ({state, ball, player1, player2} as game) =
  let score1 = if ball.x > halfWidth then 1 else 0
      score2 = if ball.x < -halfWidth then 1 else 0

      state' = if | space            -> Play
                  | score1 /= score2 -> Pause
                  | otherwise        -> state

      ball' = if state == Pause then ball
              else stepBall delta ball player1 player2

      player1' = stepPlyr delta paddle1 score1 player1
      player2' = stepPlyr delta paddle2 score2 player2

  in
    { game | state   <- state',
             ball    <- ball',
             player1 <- player1,
             player2 <- player2'}


gameState : Signal Game
gameState = foldp stepGame defaultGame input


-- VIEW
pongGreen = vec3 (60 / 255) (100 / 255) (60 / 255)
white = vec3 1 1 1
blue  = vec3 0 0 1
red   = vec3 1 0 0

gouraudMaterial : Vec3 -> Material
gouraudMaterial color = {
  material | fragmentShader <- gouraudShader,
             emissive <- MaterialProperty color 1.0,
             ambient  <- MaterialProperty white 0.4,
             diffuse  <- MaterialProperty white 0.4,
             specular <- MaterialProperty white 0.5 }



displayObj : Object a -> Renderable -> Renderable
displayObj object renderable =
  {renderable | position <- vec3 object.x object.y 0,
                material <- gouraudMaterial blue }

ballShape : Float -> Renderable
ballShape radius =
  { sphere | scale <- vec3 radius radius radius,
             material <- gouraudMaterial red }

background : Vec3 -> Float -> Float -> Renderable
background color width height =
  { cube | position <- vec3 0 0 1,
           scale <- vec3 width height 0.5,
           material <- gouraudMaterial color }

paddleShape : Float -> Float -> Renderable
paddleShape width height =
  { cube | scale <- vec3 width height 1 }

display : (Int, Int) -> Game -> Element
display (w,h) {state, ball, player1, player2} =
  let gameCamera = { camera |
        position <- vec3 0 0 -550,
        aspectRatio <- gameWidth / gameHeight }

      gameLight = { light |
        position <- vec3 -3 5 -4 }

      gameDimensions = { width = gameWidth, height = gameHeight }

      gameViewport = { viewport |
        dimensions <- gameDimensions }

      gameScene = { scene |
        objects <- [
          background pongGreen gameWidth gameHeight,
          displayObj ball (ballShape 15),
          displayObj player1 (paddleShape 10 40),
          displayObj player2 (paddleShape 10 40)
        ],
        camera <- gameCamera,
        light  <- gameLight,
        viewport <- gameViewport }
  in render gameScene

main = map2 display Window.dimensions gameState
