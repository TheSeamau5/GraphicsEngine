module Engine.Shader.VertexShader where

vertexShader : String
vertexShader = """
void main (){
  gl_Position = vec4(position, 1.0);
}

"""
