module Engine.Mesh.Pyramid where

import Math.Vector3 (Vec3, add, vec3)

import Engine.Mesh.Mesh (Mesh)
import Engine.Mesh.Rectangle (rectangleMesh)
import Engine.Mesh.Triangle  (triangle, triangleMesh)

import Engine.Object.Object (Object)

pyramidMesh : Vec3 -> Float -> Float -> Mesh
pyramidMesh center height width =
  let halfHeight = height / 2
      halfWidth = width / 2
      top = center `add` (vec3 0 halfHeight 0)
      bfl = center `add` (vec3 -halfWidth -halfHeight -halfWidth)
      bfr = center `add` (vec3 halfWidth -halfHeight -halfWidth)
      bbl = center `add` (vec3 -halfWidth -halfHeight halfWidth)
      bbr = center `add` (vec3 halfWidth -halfHeight halfWidth)
  in (rectangleMesh bbr bbl bfl bfr) ++
     (triangleMesh bfl bfr top) ++
     (triangleMesh bfr bbr top) ++
     (triangleMesh bbr bbl top) ++
     (triangleMesh bbl bfl top)

pyramid : Object {}
pyramid = {
  triangle | mesh <- pyramidMesh (vec3 0 0 0) 1 1 }
