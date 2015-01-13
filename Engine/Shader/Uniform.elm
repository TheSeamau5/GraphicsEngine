module Engine.Shader.Uniform where

{-| This module contains the definition of the Uniform type and
a function to construct a uniform from a scene and a renderable object

# Definition
@docs Uniform

# Construct a Uniform
@docs constructUniform

-}

import Math.Vector3 (Vec3)
import Math.Matrix4 (Mat4)
import Engine.Render.Renderable (Renderable)
import Engine.Scene.Scene (Scene)
import Engine.Math.Utils (
  modelMatrix,
  viewMatrix,
  projectionMatrix,
  modelViewMatrix,
  modelViewProjectionMatrix,
  normalMatrix)


-- TODO: Find a different strategy for dealing with Uniforms
--       -- Note, only the first three are truly necessary
--       -- Consider joining the model and view matrices into a modelViewMatrix
{-| Container type to hold all of the properties that are passed to GLSL
as uniforms.
-}
type alias Uniform = {
  modelMatrix               : Mat4,
  viewMatrix                : Mat4,
  projectionMatrix          : Mat4,
  modelViewMatrix           : Mat4,
  modelViewProjectionMatrix : Mat4,
  normalMatrix              : Mat4,
  lightPosition             : Vec3,
  lightRotation             : Vec3,
  lightColor                : Vec3,
  lightIntensity            : Float,
  materialEmissiveColor     : Vec3,
  materialEmissiveStrength  : Float,
  materialAmbientColor      : Vec3,
  materialAmbientStrength   : Float,
  materialDiffuseColor      : Vec3,
  materialDiffuseStrength   : Float,
  materialSpecularColor     : Vec3,
  materialSpecularStrength  : Float
}


{-| Constructs a record of type Uniform from a scene and a renderable object
to be sent to GLSL as uniforms.
-}
constructUniform : Scene -> Renderable -> Uniform
constructUniform scene object = {
  modelMatrix               = modelMatrix object,
  viewMatrix                = viewMatrix scene.camera,
  projectionMatrix          = projectionMatrix scene.camera,
  modelViewMatrix           = modelViewMatrix object scene.camera,
  modelViewProjectionMatrix = modelViewProjectionMatrix object scene.camera,
  normalMatrix              = normalMatrix object scene.camera,
  lightPosition             = scene.light.position,
  lightRotation             = scene.light.rotation,
  lightColor                = scene.light.color,
  lightIntensity            = scene.light.intensity,
  materialEmissiveColor     = object.material.emissive.color,
  materialEmissiveStrength  = object.material.emissive.strength,
  materialAmbientColor      = object.material.ambient.color,
  materialAmbientStrength   = object.material.ambient.strength,
  materialDiffuseColor      = object.material.diffuse.color,
  materialDiffuseStrength   = object.material.diffuse.strength,
  materialSpecularColor     = object.material.specular.color,
  materialSpecularStrength  = object.material.specular.strength }
