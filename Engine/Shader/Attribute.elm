module Engine.Shader.Attribute where

{-| This module contains the definition of the Attribute type.
A vertex shader takes a set of attributes as input for each vertex.
The Attibute type is made to capture all of these attributes.

Currently, we only pass the position to the vertex shader as an attibute.

Typically, a color and a normal is also passed as an attribute but for
simplicity it is highly encouraged to set the color at the material level
and to retrieve the normal from the normal matrix (which is automatically
passed as a uniform).

# Definition
@docs Attribute

-}

import Math.Vector3 (Vec3)

-- TODO: Reconsider the properties of the Attribute type
--      -- The only mandatory property here is position
--      -- One could pass a color : Vec3 in order not to require Materials
--      -- Normals can be calculated by the vertex shader
--      -- from the model and view matrices

{-| Attribute type. This type, from its fields, captures all of the
attributes that are passed to the vertex shader.

Currenly only contains a position field.
-}
type alias Attribute = {
  position : Vec3
}
