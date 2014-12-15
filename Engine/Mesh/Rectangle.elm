module Engine.Mesh.Rectangle where

{-| This module contains the definition of a rectangle mesh and of a rectangle
renderable object.

# Rectangle Mesh
@docs rectangleMesh

# Rectangle (Renderable)
@docs rectangle
-}

import Math.Vector3 (Vec3, vec3)
import Engine.Mesh.Mesh (Mesh)
import Engine.Mesh.Triangle (triangle, triangleMesh)
import Engine.Render.Renderable (Renderable)

{-| Function that takes 4 points and construct a rectangle mesh.

Note: Actually, this function constructs two triangles. This means that
it does not explicitly check if all 4 points are co-planar.

Furthermore, the function does not enforce a rectangle's property that
opposite sides be of equal length and that adjacent sides be perpendicular.
-}
rectangleMesh : Vec3 -> Vec3 -> Vec3 -> Vec3 -> Mesh
rectangleMesh p q r s =
  (triangleMesh p q r) ++ (triangleMesh r s p)


{-| Default rectangle renderable object
-}
rectangle : Renderable
rectangle = {
  triangle | mesh <- rectangleMesh (vec3 -0.5 -0.5 0) (vec3 0.5 -0.5 0) (vec3 0.5 0.5 0) (vec3 -0.5 0.5 0) }
