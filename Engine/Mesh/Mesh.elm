module Engine.Mesh.Mesh exposing (Mesh)

{-| This module contains the definition of the mesh type

# Mesh Type
@docs Mesh

-}

import WebGL exposing (Triangle)
import Engine.Shader.Attribute exposing (Attribute)

{-| Mesh type. A mesh is simply a list of triangles where each vertex
has some property (in this case, just the position property). This type is
used to construct arbitrary geometry that can be sent to the GPU to be
rendered to the screen.

For reference, Triangle just a 3-tuple:

    type alias Triangle a = (a, a, a)

and Attribute is just a record type with a position field:

    type alias Attribute = {
      position : Vec3
    }

-}
type alias Mesh = List (Triangle Attribute)
