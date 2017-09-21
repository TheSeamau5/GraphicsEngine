module Engine.Mesh.Cube exposing (cubeMesh, cube)

{-| This module contains the definition of a cube mesh and of a cube
renderable object.

# Cube Mesh
@docs cubeMesh

# Cube (Renderable)
@docs cube

-}

import WebGL exposing (Mesh, triangles)
import Math.Vector3 exposing (Vec3, add, vec3)
import Engine.Mesh.Rectangle exposing (rectangle, rectangleAttributes)
import Engine.Render.Renderable exposing (Renderable)
import Engine.Shader.Attribute exposing (Attribute)


{-| Function that takes a center point/vector and a size and returns a
cube mesh.

    cube center size
-}
cubeMesh : Vec3 -> Float -> Mesh Attribute
cubeMesh center size =
  let hs = size / 2
      ftl = add center (vec3 -hs hs -hs)
      ftr = add center (vec3 hs hs -hs)
      fbr = add center (vec3 hs -hs -hs)
      fbl = add center (vec3 -hs -hs -hs)
      btl = add center (vec3 -hs hs hs)
      btr = add center (vec3 hs hs hs)
      bbr = add center (vec3 hs -hs hs)
      bbl = add center (vec3 -hs -hs hs)
  in triangles ((rectangleAttributes ftl ftr btr btl) ++
     (rectangleAttributes ftl fbl fbr ftr) ++
     (rectangleAttributes fbl fbr bbr bbl) ++
     (rectangleAttributes btr bbr bbl btl) ++
     (rectangleAttributes ftl fbl bbl btl) ++
     (rectangleAttributes ftr fbr bbr btr))

{-| Default cube renderable object
-}
cube : Renderable
cube = {
  rectangle | mesh = cubeMesh (vec3 0 0 0) 1 }
