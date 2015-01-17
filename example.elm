import Engine (..)
import Engine.Material.Material (MaterialProperty)
import Math.Vector3 (vec3, Vec3)
import Engine.Shader.GouraudShader (gouraudShader)



white = vec3 1 1 1
blue  = vec3 0 0 1
green = vec3 0 1 0
red   = vec3 1 0 0
purple = vec3 (155 / 255) (89 / 255) (182 / 255)

gouraudMaterial : Vec3 -> Material
gouraudMaterial color = {
  material | fragmentShader <- gouraudShader,
             emissive <- MaterialProperty color 1.0,
             ambient  <- MaterialProperty white 0.4,
             diffuse  <- MaterialProperty white 0.4,
             specular <- MaterialProperty white 0.5 }

floor = {
  cube | scale <- vec3 10 0.2 10,
         material <- gouraudMaterial blue }

redBall = {
  sphere | position <- vec3 0 2 0,
           scale <- vec3 2 2 2,
           material <- gouraudMaterial red  }


greenBox = {
  cube | position <- vec3 -2 2 -2,
         material <- gouraudMaterial green }

purplePyramid = {
  pyramid | position <- vec3 3 2 -4,
            scale <- vec3 2.5 2.5 2.5,
            material <- gouraudMaterial purple }

myCamera = {camera | position <- vec3 2 5 -12,
                     rotation <- vec3 0.3 -0.15 0,
                     fieldOfView <- 40,
                     aspectRatio <- 16 / 9 }


myLight = { light | position <- vec3 0 20 -50}

myViewport =
  let myDimensions = {width = 800, height = 450}
  in {viewport | dimensions <- myDimensions}

myScene = {
  scene | objects <- [floor, redBall, greenBox, purplePyramid],
          camera  <- myCamera,
          light   <- myLight,
          viewport <- myViewport}

main = render myScene
