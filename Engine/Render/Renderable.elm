module Engine.Render.Renderable where

import Engine.Transform.Transform (Transform)
import Engine.Material.Material (Material)
import Engine.Mesh.Mesh (Mesh)
import Engine.Object.Object (Object)

type alias Renderable = Object (Transform {
  material : Material,
  mesh     : Mesh
})
