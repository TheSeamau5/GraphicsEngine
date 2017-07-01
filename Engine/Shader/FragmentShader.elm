module Engine.Shader.FragmentShader exposing (fragmentShader)

{-| This module contains the definition of the default fragment shader.

# Default Fragment Shader
@docs fragmentShader

-}


{-| Default fragment shader

Currently, the fragment shader just sets the fragment color to red.

-}
fragmentShader : String
fragmentShader = """
varying vec3 vPosition;

void main(){
  vec3 outputColor = normalize(vPosition) * sqrt(3.0);
  gl_FragColor = vec4(outputColor,1.0);
}

"""
