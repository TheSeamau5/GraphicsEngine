module Engine.Shader.Shader where

{-| This module constains functions to construct shaders as well as
functions to return shaders as strings (mostly for debugging purposes)

# Construct Shaders
@docs constructVertexShader, constructFragmentShader

# Construct Shader Strings
@docs showVertexShader, showFragmentShader
-}

import WebGL (Shader, unsafeShader)
import Engine.Shader.Boilerplate (vertexShaderBoilerplate, fragmentShaderBoilerplate)
import Engine.Shader.Utils (newLine)
import Engine.Shader.Attribute (Attribute)
import Engine.Shader.Uniform (Uniform)

{-| Function to construct a vertex shader as a String. Useful for debugging
purposes.
-}
showVertexShader : String -> String
showVertexShader shaderString =
  vertexShaderBoilerplate ++ newLine ++ shaderString


{-| Function to construct a fragment shader as a String. Useful for debugging
purposes.
-}
showFragmentShader : String -> String
showFragmentShader shaderString =
  fragmentShaderBoilerplate ++ newLine ++ shaderString


{-| Construct a Vertex Shader from a String.
The input string contains a GLSL program. This function enables to automatically
add a whole bunch of boilerplate code, like setting the float precision, or
declaring the uniforms and attributes.
-}
constructVertexShader : String -> Shader Attribute Uniform varying
constructVertexShader = unsafeShader << showVertexShader


{-| Construct a Fragment Shader from a String.
The input string contains a GLSL program. This function enables to automatically
add a whole bunch of boilerplate code, like setting the float precision, or
declaring the structs and uniforms.
-}
constructFragmentShader : String -> Shader {} Uniform varying
constructFragmentShader = unsafeShader << showFragmentShader
