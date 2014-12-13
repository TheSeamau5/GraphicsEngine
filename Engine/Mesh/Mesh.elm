module Engine.Mesh.Mesh where

import WebGL (Triangle)
import Engine.Shader.Attribute (Attribute)

type alias Mesh = List (Triangle Attribute)
