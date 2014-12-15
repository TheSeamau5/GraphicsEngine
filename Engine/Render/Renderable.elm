module Engine.Render.Renderable where

{-| This module contains the definition of the Renderable type. This is
separated from the definition of the default renderable object in order to
avoid circular dependencies.

# Definition
@docs Renderable

-}

import Engine.Transform.Transform (Transform)
import Engine.Material.Material (Material)
import Engine.Mesh.Mesh (Mesh)

{-| Represent a renderable object. A renderable object is an Object with a
Transform properties (position, rotation, and scale) in order to locate it
physically in world space. A renderable object also comes with a Material
and a Mesh.

A renderable uses its position, rotation, and scale to set its position,
rotation and scale in world space respectively. The material describes how
the renderable object responds to light and draws itself. The mesh describes
the geometry of the renderable object (if it is a cube, a pyramid, etc...).

-}
type alias Renderable = Transform {
  material : Material,
  mesh     : Mesh
}
