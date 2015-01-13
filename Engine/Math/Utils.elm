module Engine.Math.Utils where

{-| This module is just a simple collection of mathematical operations
used repeatedly in several areas in the Graphics Engine codebase.

# "Safe" versions of Linear Algbera operations
@docs safeNormalize, safeMakeRotate

# Common Camera operations
@docs getSideVector, getUpVector, getForwardVector, getTargetPosition

# Model View Projection
@docs modelMatrix, viewMatrix, projectionMatrix

# Renaming Functions to avoid Namespace clashes
@docs matrixIdentity

-}

import Math.Vector3 as Vector3
import Math.Matrix4 as Matrix4
import Engine.Transform.Transform (Transform)
import Engine.Render.Renderable (Renderable)
import Engine.Camera.Camera (Camera)

-- Generic Math functions

{-| Version of Vector3.normalize which simply returns the vector to be
normalized untouched in the case its length is equal to zero

In essence,

    safeNormalize (vec3 0 0 0) == vec3 0 0 0

-}
safeNormalize : Vector3.Vec3 -> Vector3.Vec3
safeNormalize vector =
  if (Vector3.lengthSquared vector == 0)
  then vector
  else Vector3.normalize vector

{-| Version of Matrix4.makeRotate which simply returns the identity
matrix if the input rotation vector is the zero vector

In essence,

    safeMakeRotate (vec3 0 0 0) == Matrix4.identity

-}
safeMakeRotate : Vector3.Vec3 -> Matrix4.Mat4
safeMakeRotate vector =
  if (Vector3.lengthSquared vector == 0)
  then Matrix4.identity
  else Matrix4.makeRotate (sqrt <| Vector3.lengthSquared vector) (Vector3.normalize vector)

{-| Renaming of the identity matrix because it clashes with the identity
function in Basics which defines the function that just returns its input

-}
matrixIdentity : Matrix4.Mat4
matrixIdentity = Matrix4.identity

-- Camera Helpers

{-| Calculate the right-handed side vector of a transform. This is mainly
used by cameras to help orient themselves.

-}
getSideVector : Transform a -> Vector3.Vec3
getSideVector transform =
  let yaw   = Vector3.getX transform.rotation
      pitch = Vector3.getY transform.rotation
      roll  = Vector3.getZ transform.rotation
      sx = sin yaw
      cx = cos yaw
      sy = sin pitch
      cy = cos pitch
      sz = sin roll
      cz = cos roll
      vx = cy * cz - sy * sx * sz
      vy = cy * sz + sy * sx * cz
      vz = -sy * cx
  in Vector3.vec3 vx vy vz


{-| Calculate the right-handed up vector of a transform. This is mainly
used by cameras to help orient themselves and create the view matrix.

-}
getUpVector : Transform a -> Vector3.Vec3
getUpVector transform =
  let yaw   = Vector3.getX transform.rotation
      pitch = Vector3.getY transform.rotation
      roll  = Vector3.getZ transform.rotation
      sx = sin yaw
      cx = cos yaw
      sy = sin pitch
      cy = cos pitch
      sz = sin roll
      cz = cos roll
      vx = -cx * sz
      vy = cx * cz
      vz = sx
  in Vector3.vec3 vx vy vz

{-| Calculate the vector pointing outward of a transform given a position
and rotation. This is mainly used by cameras to help orient themselves
and create the view matrix.

-}
getForwardVector : Transform a -> Vector3.Vec3
getForwardVector transform =
  let yaw   = Vector3.getX transform.rotation
      pitch = Vector3.getY transform.rotation
      roll  = Vector3.getZ transform.rotation
      sx = sin yaw
      cx = cos yaw
      sy = sin pitch
      cy = cos pitch
      sz = sin roll
      cz = cos roll
      vx = sy * cz + cy * sx * sz
      vy = sy * sz - cy * sx * cz
      vz = cy * cx
  in Vector3.vec3 vx vy vz

{-| Calculate the target position of a transform (i.e. where the transform
points at). This is mainly used to figure out what a camera points at.

-}
getTargetPosition : Transform a -> Vector3.Vec3
getTargetPosition transform =
  transform.position `Vector3.add` (getForwardVector transform)



-- Model View Projection Matrices

{-| The model matrix. Encodes the transformation of a transform as a matrix.
This allows to efficiently apply such a transformation to a point to move it
in world space with a given position, rotation, and scale.
-}
modelMatrix : Transform a -> Matrix4.Mat4
modelMatrix transform =
  let translationMatrix = Matrix4.makeTranslate transform.position
      rotationMatrix    = safeMakeRotate transform.rotation
      scaleMatrix       = Matrix4.makeScale transform.scale
  in translationMatrix `Matrix4.mul` (rotationMatrix `Matrix4.mul` scaleMatrix)

{-| The view matrix. Encodes the Look At matrix of a transform.
This allows to calculate the Look At matrix of a camera to then multiply
a position by the view matrix in order to convert it from world space to
camera space.
-}
viewMatrix : Transform a -> Matrix4.Mat4
viewMatrix transform =
  Matrix4.makeLookAt transform.position
                     (getTargetPosition transform)
                     (getUpVector transform)

{-| The projection matrix. Encodes the perspective matrix of a camera.
This allows to map a position from camera space to screen space.
-}
projectionMatrix : Camera -> Matrix4.Mat4
projectionMatrix camera =
  Matrix4.makePerspective camera.fieldOfView
                          camera.aspectRatio
                          camera.nearClipping
                          camera.farClipping

{-| Shorthand for modelViewMatrix. Faster to calculate once in CPU.
-}
modelViewMatrix : Transform a -> Transform b -> Matrix4.Mat4
modelViewMatrix object camera =
  (viewMatrix camera) `Matrix4.mul` (modelMatrix object)


modelViewProjectionMatrix : Transform a -> Camera -> Matrix4.Mat4
modelViewProjectionMatrix object camera =
  (projectionMatrix camera) `Matrix4.mul` (modelViewMatrix object camera)

normalMatrix : Transform a -> Transform b -> Matrix4.Mat4
normalMatrix object camera =
  Matrix4.inverseOrthonormal (Matrix4.transpose (modelViewMatrix object camera))
