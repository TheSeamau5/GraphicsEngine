module Engine.Scene.Scene where

import Engine.Camera.Camera (Camera, camera)
import Engine.Render.Renderable (Renderable)
import Engine.Light.Light (Light, light)
import Engine.Render.DefaultRenderable (renderable)
import Engine.Viewport.Viewport (Viewport, viewport)

-- TODO: Find a strategy to deal with multiple lights

-- TODO: Consider a strategy for dealing with multiple cameras
--       -- Perhaps by using multiple webgl contexts??

-- TODO: Find a strategy to deal with multiple materials

type alias Scene = {
  camera    : Camera,
  objects   : List Renderable,
  light     : Light,
  viewport  : Viewport
}

scene : Scene
scene = {
  camera   = camera,
  objects  = [renderable],
  light    = light,
  viewport = viewport }
