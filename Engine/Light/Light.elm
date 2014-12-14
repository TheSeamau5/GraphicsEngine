module Engine.Light.Light where

{-| This module defines the Light type and the default light object.
A Light is a record type made to illuminate scenes and objects in these
scenes.

# Definition
@docs Light

# Default Light
@docs light

-}

import Math.Vector3 (Vec3, vec3)
import Engine.Transform.Transform (Transform, transform)

-- Note : Visibility is not yet used as a property
--        -- Toggling visibility will yield no result

type alias Light = Transform {
  intensity  : Float,
  color      : Vec3,
  visibility : Bool
}


light : Light
light =
  Transform (vec3 1 1 3)
            (transform.rotation)
            (transform.scale)
            { intensity  = 1,
              color      = vec3 1 1 1,
              visibility = True }
