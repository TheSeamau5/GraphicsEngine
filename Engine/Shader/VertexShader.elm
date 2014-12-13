module Engine.Shader.VertexShader where

vertexShader : String
vertexShader = """

void main (){
  vec4 outputPosition = modelViewProjectionMatrix * vec4(position, 1.0);
  gl_Position = outputPosition;
}

"""
