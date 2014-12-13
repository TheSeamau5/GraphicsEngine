module Engine.Shader.Attribute where

import Math.Vector3 (Vec3)

-- TODO: Reconsider the properties of the Attribute type
--      -- The only mandatory property here is position
--      -- One could pass a color : Vec3 in order not to require Materials
--      -- Normals can be calculated by the vertex shader
--      -- from the model and view matrices

type alias Attribute = {
  position : Vec3
}
