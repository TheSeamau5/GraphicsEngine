module Engine.Mesh.Triangle where

import WebGL (Triangle, map)
import Math.Vector3 (Vec3, vec3, add, normalize, cross, sub)

import Engine.Mesh.Mesh (Mesh)
import Engine.Shader.Attribute (Attribute)
import Engine.Material.Material (material)

import Engine.Object.Object (Object)

triangleMesh : Vec3 -> Vec3 -> Vec3 -> Mesh
triangleMesh p q r = [map Attribute (p,q,r)]

triangle : Object {}
triangle = {
  position = vec3 0 0 0,
  rotation = vec3 0 0 0,
  scale    = vec3 1 1 1,
  material = material,
  mesh     = triangleMesh (vec3 -0.5 -0.5 0) (vec3 0.5 -0.5 0) (vec3 0 0.5 0) }
