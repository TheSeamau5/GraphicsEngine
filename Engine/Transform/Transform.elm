module Engine.Transform.Transform where

import Math.Vector3 (Vec3, vec3)


type alias Transform a = { a |
  position : Vec3,
  rotation : Vec3,
  scale    : Vec3
}

transform : Transform {}
transform = {
  position = vec3 0 0 0,
  rotation = vec3 0 0 0,
  scale    = vec3 1 1 1 }
