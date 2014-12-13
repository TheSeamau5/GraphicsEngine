module Engine.Shader.VertexShader where

vertexShader : String
vertexShader = """
varying vec3 vPosition;

void main (){
  vec4 outputPosition = modelViewProjectionMatrix * vec4(position, 1.0);
  gl_Position = outputPosition;
  vPosition = outputPosition.xyz;
}

"""
