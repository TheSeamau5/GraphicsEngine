module Engine.Light.Light where

import Math.Vector3 (Vec3, vec3)
import Engine.Object.Object (Object)
import Engine.Object.DefaultObject (object)

-- Note : Visibility is not yet used as a property
--        -- Toggling visibility will yield no result

type alias Light = Object {
  intensity  : Float,
  color      : Vec3,
  visibility : Bool
}

light : Light
light =
  Object object.mesh
         object.material
         (vec3 1 1 3)
         object.rotation
         object.scale
         { intensity  = 1,
           color      = vec3 1 1 1,
           visibility = True }
