module Engine.Transform.Transform exposing (Transform, transform)

{-| This module contains the definition for the Transform type and
the default transform object.

# Definition
@docs Transform

# Default Transform
@docs transform

-}

import Math.Vector3 exposing (Vec3, vec3)

{-| A transform is an object with a position, a rotation, and a scale.
This is mean to be able to represent linear transformations in space. As
such, one can model where an object is (position), what is its orientation
(rotation), and how large is it (scale).
-}
type alias Transform a = { a |
  position : Vec3,
  rotation : Vec3,
  scale    : Vec3
}


{-| Default transform.

Defined as follows:

    transform = {
      position = vec3 0 0 0,
      rotation = vec3 0 0 0,
      scale    = vec3 1 1 1 }

-}
transform : Transform {}
transform = {
  position = vec3 0 0 0,
  rotation = vec3 0 0 0,
  scale    = vec3 1 1 1 }
