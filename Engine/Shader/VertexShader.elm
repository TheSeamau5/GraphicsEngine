module Engine.Shader.VertexShader where

{-| This module contains the definition of the default vertex shader.

# Default Vertex Shader
@docs vertexShader

-}



{-| Default Vertex Shader.

Currently, the vertex shader just applied the model view projection
transformation onto the vertex position and passes the new position
as a varying to the fragment shader.

-}
vertexShader : String
vertexShader = """
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main (){
  vec4 outputPosition = modelViewProjectionMatrix * vec4(position, 1.0);
  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = outputPosition;
  vPosition = outputPosition.xyz;
  vNormal = normalize(mat3(normalMatrix) * position);
  vViewPosition = -modelViewPosition.xyz;
}

"""
