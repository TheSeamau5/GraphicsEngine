module Engine.Viewport.Viewport where

type alias Viewport = {
  dimensions : {
      width  : Float,
      height : Float
  }
}

viewport : Viewport
viewport = {
  dimensions = {
    width  = 400,
    height = 400 } }
