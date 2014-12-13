module Engine.Shader.Shader where

import WebGL (Shader, unsafeShader)

import Engine.Shader.Boilerplate (vertexShaderBoilerplate, fragmentShaderBoilerplate)
import Engine.Shader.Utils (newLine)

import Engine.Shader.Attribute (Attribute)
import Engine.Shader.Uniform (Uniform)

showVertexShader shaderString =
  vertexShaderBoilerplate ++ newLine ++ shaderString

showFragmentShader shaderString =
  fragmentShaderBoilerplate ++ newLine ++ shaderString

constructVertexShader : String -> Shader Attribute Uniform varying
constructVertexShader shaderString =
  unsafeShader <| vertexShaderBoilerplate ++ newLine ++ shaderString

constructFragmentShader : String -> Shader {} Uniform varying
constructFragmentShader shaderString =
  unsafeShader <| fragmentShaderBoilerplate ++ newLine ++ shaderString
