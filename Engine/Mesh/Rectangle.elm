module Engine.Mesh.Rectangle where

import Math.Vector3 (Vec3, vec3)

import Engine.Mesh.Mesh (Mesh)
import Engine.Mesh.Triangle (triangle, triangleMesh)

import Engine.Render.Renderable (Renderable)


rectangleMesh : Vec3 -> Vec3 -> Vec3 -> Vec3 -> Mesh
rectangleMesh p q r s =
  (triangleMesh p q r) ++ (triangleMesh r s p)

rectangle : Renderable
rectangle = {
  triangle | mesh <- rectangleMesh (vec3 -0.5 -0.5 0) (vec3 0.5 -0.5 0) (vec3 0.5 0.5 0) (vec3 -0.5 0.5 0) }
