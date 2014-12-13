module Engine.Material.Material where

import Math.Vector3 (Vec3, vec3)

import Engine.Shader.VertexShader (vertexShader)
import Engine.Shader.FragmentShader (fragmentShader)

type alias MaterialProperty = {
  color : Vec3,
  strength : Float
}

type alias Material = {
  emissive : MaterialProperty,
  ambient  : MaterialProperty,
  diffuse  : MaterialProperty,
  specular : MaterialProperty,
  vertexShader    : String,
  fragmentShader  : String
}

material : Material
material = {
  emissive = MaterialProperty (vec3 0 0 0) 0,
  ambient  = MaterialProperty (vec3 0 0 0) 0,
  diffuse  = MaterialProperty (vec3 0 0 0) 0,
  specular = MaterialProperty (vec3 0 0 0) 0,
  vertexShader = vertexShader,
  fragmentShader = fragmentShader }
