module Engine.Mesh.Triangle exposing (..)

{-| This module contains the definition of a triangle mesh and of a triangle
renderable object. The triangle is the main building block of all geometry in
modern computer graphics. Use these functions if you want to create your own
custom geometry.

# Triangle Mesh
@docs triangleMesh

# Triangle (Renderable)
@docs triangle

-}

import WebGL exposing (Mesh, triangles)
import Math.Vector3 exposing (Vec3, vec3, add, normalize, cross, sub)
import Engine.Shader.Attribute exposing (Attribute)
import Engine.Material.Material exposing (material)
import Engine.Render.Renderable exposing (Renderable)


{-| Function to construct a triangle mesh from three points.
-}
triangleMesh : Vec3 -> Vec3 -> Vec3 -> Mesh
triangleMesh p q r = [map Attribute (p,q,r)]


{-| Default triangle renderable object
-}
triangle : Renderable
triangle =
  { material = material
  , mesh     = triangleMesh (vec3 -0.5 -0.5 0) (vec3 0.5 -0.5 0) (vec3 0 0.5 0)
  , position = vec3 0 0 0
  , rotation = vec3 0 0 0
  , scale    = vec3 1 1 1
  }
