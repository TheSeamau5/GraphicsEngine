module Engine.Mesh.Pyramid exposing (pyramidMesh, pyramid)

{-| This module contains the definition of a pyramid mesh and of a pyramid
renderable object.

# Pyramid Mesh
@docs pyramidMesh

# Pyramid (Renderable)
@docs pyramid

-}

import WebGL exposing (Mesh)
import Math.Vector3 exposing (Vec3, add, vec3)
import Engine.Mesh.Rectangle exposing (rectangleMesh)
import Engine.Mesh.Triangle exposing  (triangle, triangleMesh)
import Engine.Render.Renderable exposing (Renderable)


{-| Function that takes a center point/vector, a height and a width and
returns a pyramid mesh.

      pyramidMesh center height width
-}
pyramidMesh : Vec3 -> Float -> Float -> Mesh
pyramidMesh center height width =
  let halfHeight = height / 2
      halfWidth = width / 2
      top = add center (vec3 0 halfHeight 0)
      bfl = add center (vec3 -halfWidth -halfHeight -halfWidth)
      bfr = add center (vec3 halfWidth -halfHeight -halfWidth)
      bbl = add center (vec3 -halfWidth -halfHeight halfWidth)
      bbr = add center (vec3 halfWidth -halfHeight halfWidth)
  in (rectangleMesh bbr bbl bfl bfr) ++
     (triangleMesh bfl bfr top) ++
     (triangleMesh bfr bbr top) ++
     (triangleMesh bbr bbl top) ++
     (triangleMesh bbl bfl top)


{-| Default pyramid renderable object
-}
pyramid : Renderable
pyramid = {
  triangle | mesh <- pyramidMesh (vec3 0 0 0) 1 1 }
