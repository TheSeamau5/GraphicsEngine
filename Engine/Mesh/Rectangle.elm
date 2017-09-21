module Engine.Mesh.Rectangle exposing (rectangleMesh, rectangleAttributes, rectangle)

{-| This module contains the definition of a rectangle mesh and of a rectangle
renderable object.

# Rectangle Mesh
@docs rectangleMesh, rectangleAttributes 

# Rectangle (Renderable)
@docs rectangle
-}

import WebGL exposing (Mesh, triangles)
import Math.Vector3 exposing (Vec3, vec3)
import Engine.Mesh.Triangle exposing (triangle, triangleAttribute)
import Engine.Render.Renderable exposing (Renderable)
import Engine.Shader.Attribute exposing (Attribute)

{-| Function that takes 4 points and construct a rectangle mesh.

Note: Actually, this function constructs two triangles. This means that
it does not explicitly check if all 4 points are co-planar.

Furthermore, the function does not enforce a rectangle's property that
opposite sides be of equal length and that adjacent sides be perpendicular.
-}
rectangleMesh : Vec3 -> Vec3 -> Vec3 -> Vec3 -> Mesh Attribute
rectangleMesh p q r s = triangles (rectangleAttributes p q r s)

{-| Default rectangle renderable object
-}
rectangleAttributes : Vec3 -> Vec3 -> Vec3 -> Vec3 -> List (Attribute, Attribute, Attribute)
rectangleAttributes p q r s = (triangleAttribute p q r) ++ (triangleAttribute r s p)


{-| Default rectangle renderable object
-}
rectangle : Renderable
rectangle = { triangle | mesh = rectangleMesh (vec3 -0.5 -0.5 0) (vec3 0.5 -0.5 0) (vec3 0.5 0.5 0) (vec3 -0.5 0.5 0) }
