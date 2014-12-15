module Engine.Mesh.Triangle where

{-| This module contains the definition of a triangle mesh and of a triangle
renderable object. The triangle is the main building block of all geometry in
modern computer graphics. Use these functions if you want to create your own
custom geometry.

# Triangle Mesh
@docs triangleMesh

# Triangle (Renderable)
@docs triangle

-}

import WebGL (Triangle, map)
import Math.Vector3 (Vec3, vec3, add, normalize, cross, sub)
import Engine.Mesh.Mesh (Mesh)
import Engine.Shader.Attribute (Attribute)
import Engine.Material.Material (material)
import Engine.Render.Renderable (Renderable)


{-| Function to construct a triangle mesh from three points.
-}
triangleMesh : Vec3 -> Vec3 -> Vec3 -> Mesh
triangleMesh p q r = [map Attribute (p,q,r)]


{-| Default triangle renderable object
-}
triangle : Renderable
triangle = {
  material = material,
  mesh     = triangleMesh (vec3 -0.5 -0.5 0) (vec3 0.5 -0.5 0) (vec3 0 0.5 0),
  position = vec3 0 0 0,
  rotation = vec3 0 0 0,
  scale    = vec3 1 1 1}
