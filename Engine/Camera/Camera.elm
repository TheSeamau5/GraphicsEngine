module Engine.Camera.Camera exposing (Camera, camera)

{-| This module defines the Camera type and the default camera object.
A Camera is a record type made to be the viewing point of a scene and thus
enable the drawing of a scene to the screen. A Camera represents
a perspective camera.

# Definition
@docs Camera

# Default Camera
@docs camera

-}

import Math.Vector3 exposing (vec3)
import Engine.Transform.Transform exposing (Transform, transform)

{-| Represent a perspective camera. As a transform, a camera has a
position, a rotation, and a scale. A camera also has an aspect ratio,
a field of view, a near clipping plane, and a far clipping plane. In essence,
a camera describes a viewing frustrum.

Note : By convention, aspectRatio is a ratio (so a 4 : 3 aspect ratio
can be achieved by setting aspectRatio to 4 / 3 or 1.3), fieldOfView is
set in degrees (45 being usually a good safe bet), nearClipping and
farClipping are set in world coordinates.

Example 1 : (A typical 4 : 3 camera)

    fourThirdsCamera = {
      position      = vec3 0 0 0,
      rotation      = vec3 0 0 0,
      scale         = vec3 1 1 1,
      aspectRatio   = 4 / 3,
      fieldOfView   = 45,
      nearClipping  = 1,
      farClipping   = 80000 }

Example 2 : (A 16 : 9 camera that cannot see far and warped field of view)

    weirdSixteenNinthsCamera = {
      fourThirdsCamera | aspectRatio <- 16 / 9,
                         fieldOfView <- 125,
                         farClipping <- 10 }

-}
type alias Camera = Transform {
  aspectRatio   : Float,
  fieldOfView   : Float,
  nearClipping  : Float,
  farClipping   : Float
}


{-| Default camera on a scene. Defines a camera at position x = 0, y = 0,
z = -10, with a square aspect ratio (aspectRatio == 1), a field of view of
45 degrees (fieldOfView == 45), a near clipping plane at 1 and a far
clipping plane at 80000.

Example : Constructing a standard widescreen cinema camera

    widescreenCamera = { camera | aspectRatio <- 2.39 }

-}
camera : Camera
camera =
  { position     = (vec3 0 0 -10)
  , rotation     = transform.rotation
  , scale        = transform.scale
  , aspectRatio  = 1
  , fieldOfView  = 45
  , nearClipping = 1
  , farClipping  = 80000 }
