module Engine.Object.Object where

import Engine.Mesh.Mesh (Mesh)
import Engine.Material.Material (Material)
import Math.Vector3 (Vec3)

type alias Object a = { a |
  mesh : Mesh,
  material : Material,
  position : Vec3,
  rotation : Vec3,
  scale : Vec3
}
