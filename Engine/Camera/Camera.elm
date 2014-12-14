module Engine.Camera.Camera where

import Math.Vector3 (vec3)

import Engine.Transform.Transform (Transform, transform)


type alias Camera = Transform {
  aspectRatio   : Float,
  fieldOfView   : Float,
  nearClipping  : Float,
  farClipping   : Float
}

camera : Camera
camera =
  Transform (vec3 0 0 -10)
            transform.rotation
            transform.scale
            { aspectRatio  = 1,
              fieldOfView  = 45,
              nearClipping = 1,
              farClipping  = 80000 }
