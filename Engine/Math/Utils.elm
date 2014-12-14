module Engine.Math.Utils where

import Math.Vector3 as Vector3
import Math.Matrix4 as Matrix4

import Engine.Transform.Transform (Transform)
import Engine.Render.Renderable (Renderable)
import Engine.Camera.Camera (Camera)

-- Generic Math functions

safeNormalize : Vector3.Vec3 -> Vector3.Vec3
safeNormalize vector =
  if (Vector3.lengthSquared vector == 0)
  then vector
  else Vector3.normalize vector

safeMakeRotate : Vector3.Vec3 -> Matrix4.Mat4
safeMakeRotate vector =
  if (Vector3.lengthSquared vector == 0)
  then Matrix4.identity
  else Matrix4.makeRotate (sqrt <| Vector3.lengthSquared vector) (Vector3.normalize vector)

matrixIdentity : Matrix4.Mat4
matrixIdentity = Matrix4.identity

-- Camera Helpers

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

getTargetPosition : Transform a -> Vector3.Vec3
getTargetPosition transform =
  transform.position `Vector3.add` (getForwardVector transform)



-- Model View Projection Matrices

modelMatrix : Transform a -> Matrix4.Mat4
modelMatrix transform =
  let translationMatrix = Matrix4.makeTranslate transform.position
      rotationMatrix    = safeMakeRotate transform.rotation
      scaleMatrix       = Matrix4.makeScale transform.scale
  in translationMatrix `Matrix4.mul` (rotationMatrix `Matrix4.mul` scaleMatrix)

viewMatrix : Transform a -> Matrix4.Mat4
viewMatrix transform =
  Matrix4.makeLookAt transform.position
                     (getTargetPosition transform)
                     (getUpVector transform)

projectionMatrix : Camera -> Matrix4.Mat4
projectionMatrix camera =
  Matrix4.makePerspective camera.fieldOfView
                          camera.aspectRatio
                          camera.nearClipping
                          camera.farClipping
