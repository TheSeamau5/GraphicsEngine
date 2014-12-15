module Engine.Shader.FragmentShader where

{-| This module contains the definition of the default fragment shader.

# Default Fragment Shader
@docs fragmentShader

-}


{-| Default fragment shader

Currently, the fragment shader just sets the fragment color to red.

-}
fragmentShader : String
fragmentShader = """

void main(){
  gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}

"""
