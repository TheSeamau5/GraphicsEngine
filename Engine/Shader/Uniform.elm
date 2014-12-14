module Engine.Shader.Uniform where

import Math.Vector3 (Vec3)
import Math.Matrix4 (Mat4)

import Engine.Render.Renderable (Renderable)
import Engine.Scene.Scene (Scene)
import Engine.Math.Utils (modelMatrix, viewMatrix, projectionMatrix)

-- TODO: Find a different strategy for dealing with Uniforms
--       -- Note, only the first three are truly necessary
--       -- Consider joining the model and view matrices into a modelViewMatrix
type alias Uniform = {
  modelMatrix      : Mat4,
  viewMatrix       : Mat4,
  projectionMatrix : Mat4,
  lightPosition    : Vec3,
  lightRotation    : Vec3,
  lightColor       : Vec3,
  lightIntensity   : Float,
  materialEmissiveColor     : Vec3,
  materialEmissiveStrength  : Float,
  materialAmbientColor      : Vec3,
  materialAmbientStrength   : Float,
  materialDiffuseColor      : Vec3,
  materialDiffuseStrength   : Float,
  materialSpecularColor     : Vec3,
  materialSpecularStrength  : Float
}

constructUniforms : Scene -> Renderable -> Uniform
constructUniforms scene object = {
  modelMatrix       = modelMatrix object,
  viewMatrix        = viewMatrix scene.camera,
  projectionMatrix  = projectionMatrix scene.camera,
  lightPosition     = scene.light.position,
  lightRotation     = scene.light.rotation,
  lightColor        = scene.light.color,
  lightIntensity    = scene.light.intensity,
  materialEmissiveColor     = object.material.emissive.color,
  materialEmissiveStrength  = object.material.emissive.strength,
  materialAmbientColor      = object.material.ambient.color,
  materialAmbientStrength   = object.material.ambient.strength,
  materialDiffuseColor      = object.material.diffuse.color,
  materialDiffuseStrength   = object.material.diffuse.strength,
  materialSpecularColor     = object.material.specular.color,
  materialSpecularStrength  = object.material.specular.strength }
