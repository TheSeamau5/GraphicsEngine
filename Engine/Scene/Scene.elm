module Engine.Scene.Scene where

import Engine.Camera.Camera (Camera, camera)
import Engine.Object.Object (Object)
import Engine.Light.Light (Light, light)
import Engine.Object.DefaultObject (object)

-- TODO: Find a strategy to deal with multiple lights

-- TODO: Consider a strategy for dealing with multiple cameras
--       -- Perhaps by using multiple webgl contexts??

-- TODO: Find a strategy to deal with multiple materials

type alias Scene = {
  camera    : Camera,
  objects   : List (Object {}),
  light     : Light,
  viewport  : {
    dimensions  : {
      width   : Float,
      height  : Float
    }
  }
}

scene = {
  camera = camera,
  objects = [object],
  light = light,
  viewport = {
    dimensions = {
      width  = 400,
      height = 400 } } }
