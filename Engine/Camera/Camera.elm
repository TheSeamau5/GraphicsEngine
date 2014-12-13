module Engine.Camera.Camera where

import Math.Vector3 (vec3)

import Engine.Object.Object (Object)
import Engine.Object.DefaultObject (object)


type alias Camera = Object {
  aspectRatio   : Float,
  fieldOfView   : Float,
  nearClipping  : Float,
  farClipping   : Float
}

camera : Camera
camera =
  Object object.mesh
         object.material
         (vec3 0 0 -10)
         object.rotation
         object.scale
         { aspectRatio  = 1,
           fieldOfView  = 45,
           nearClipping = 1,
           farClipping  = 80000 }
