module Engine.Math.Utils where

import Math.Vector3 as Vector3
import Math.Matrix4 as Matrix4

import Engine.Camera.Camera (Camera)
import Engine.Object.Object (Object)

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

getSideVector : Camera -> Vector3.Vec3
getSideVector camera =
  let yaw   = Vector3.getX camera.rotation
      pitch = Vector3.getY camera.rotation
      roll  = Vector3.getZ camera.rotation
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

getUpVector : Camera -> Vector3.Vec3
getUpVector camera =
  let yaw   = Vector3.getX camera.rotation
      pitch = Vector3.getY camera.rotation
      roll  = Vector3.getZ camera.rotation
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

getForwardVector : Camera -> Vector3.Vec3
getForwardVector camera =
  let yaw   = Vector3.getX camera.rotation
      pitch = Vector3.getY camera.rotation
      roll  = Vector3.getZ camera.rotation
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

getTargetPosition : Camera -> Vector3.Vec3
getTargetPosition camera =
  camera.position `Vector3.add` (getForwardVector camera)



-- Model View Projection Matrices

modelMatrix : Object a -> Matrix4.Mat4
modelMatrix object =
  let translationMatrix = Matrix4.makeTranslate object.position
      rotationMatrix    = safeMakeRotate object.rotation
      scaleMatrix       = Matrix4.makeScale object.scale
  in translationMatrix `Matrix4.mul` (rotationMatrix `Matrix4.mul` scaleMatrix)

viewMatrix : Camera -> Matrix4.Mat4
viewMatrix camera =
  Matrix4.makeLookAt camera.position (getTargetPosition camera) (getUpVector camera)

projectionMatrix : Camera -> Matrix4.Mat4
projectionMatrix camera =
  Matrix4.makePerspective camera.fieldOfView
                          camera.aspectRatio
                          camera.nearClipping
                          camera.farClipping
