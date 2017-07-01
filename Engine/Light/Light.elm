module Engine.Light.Light exposing (Light, light)

{-| This module defines the Light type and the default light object.
A Light is a record type made to illuminate scenes and objects in these
scenes.

# Definition
@docs Light

# Default Light
@docs light

-}

import Math.Vector3 exposing (Vec3, vec3)
import Engine.Transform.Transform exposing (Transform, transform)

-- TODO: FIX VISIBILITY TOGGLE
{-| Represent a light in a scene. As a transform, a light has a position,
a rotation, and a scale. A light also has an intensity property
to control the strength of the influence of the light source in the scene,
a color property, and a visibility property to act as a flag to toggle
a light on and off.

Note: By convention, full intensity is set a 1 and no intensity is 0,
color values are values between 0 and 1 (not 0 - 255).

Example 1 : (A red light at full intensity)

    redLight = {
      position   = vec3 0 0 0,
      rotation   = vec3 0 0 0,
      scale      = vec3 1 1 1,
      intensity  = 1,
      color      = vec3 1 0 0,
      visibility = True }

Example 2 : (A white light at half intensity)

    whiteLight =
      { redLight | color     <- vec3 1 1 1,
                   intensity <- 0.5}

-}
type alias Light = Transform {
  intensity  : Float,
  color      : Vec3,
  visibility : Bool
}



{-| Default light on a scene. Defines a white light at full intensity
at position x = 1, y = 1 , z = 3.

This is ideal for constructing custom lights just by updating the properties
you wish to update.

Example : Constructing a green light

    greenLight = { light | color <- vec3 0 1 0 }
-}
light : Light
light =
  Transform (vec3 1 1 3)
            (transform.rotation)
            (transform.scale)
            { intensity  = 1,
              color      = vec3 1 1 1,
              visibility = True }
