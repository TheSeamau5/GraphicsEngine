module Engine.Scene.Scene where

{-| This module defines the Scene type and the default Scene object.
A Scene contains a camera (the viewer's window to the scene), a list of
Renderable objects (the stuff that gets drawn to the scene), a light
(something to illuminate the scene), and a Viewport (a description of
the context the scene gets drawn to).

Note: Currently, Graphics Engine only supports having one light. In future
releases, this will most certainly change in order to support having multiple
lights in a scene.

Note: Currently, Graphics Engine onlu supports having one camera. While this
may be all you need in most cases, it may be valuable to allow for multiple
cameras. Currently, the only way to have multiple cameras is to have
multiple scenes. It is still an open question on which approach is better.


# Definition
@docs Scene

# Default Scene
@docs scene
-}

import Engine.Camera.Camera (Camera, camera)
import Engine.Render.Renderable (Renderable)
import Engine.Light.Light (Light, light)
import Engine.Render.DefaultRenderable (renderable)
import Engine.Viewport.Viewport (Viewport, viewport)

-- TODO: Find a strategy to deal with multiple lights

-- TODO: Consider a strategy for dealing with multiple cameras
--       -- Perhaps by using multiple webgl contexts??

-- TODO: Find a strategy to deal with multiple materials

{-| Represents a scene. A scene contains a list of objects such that
calling `render` on a scene will render all the objects in a webgl context.

A scene contains a camera to define the viewer's viewing point, a light to
illuminate the scene, and a viewport to describe the context on which the
scene will be drawn.

-}
type alias Scene = {
  camera    : Camera,
  objects   : List Renderable,
  light     : Light,
  viewport  : Viewport
}

{-| Default scene object. Draws a red cube in the middle of the default context.
-}
scene : Scene
scene = {
  camera   = camera,
  objects  = [renderable],
  light    = light,
  viewport = viewport }
