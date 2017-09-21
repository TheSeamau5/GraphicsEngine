module Engine.Mesh.Cube exposing (cubeMesh, cube)

{-| This module contains the definition of a cube mesh and of a cube
renderable object.

# Cube Mesh
@docs cubeMesh

# Cube (Renderable)
@docs cube

-}

import WebGL exposing (Mesh)
import Math.Vector3 exposing (Vec3, add, vec3)
import Engine.Mesh.Rectangle exposing (rectangle, rectangleMesh)
import Engine.Render.Renderable exposing (Renderable)


{-| Function that takes a center point/vector and a size and returns a
cube mesh.

    cube center size
-}
cubeMesh : Vec3 -> Float -> Mesh
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
  in (rectangleMesh ftl ftr btr btl) ++
     (rectangleMesh ftl fbl fbr ftr) ++
     (rectangleMesh fbl fbr bbr bbl) ++
     (rectangleMesh btr bbr bbl btl) ++
     (rectangleMesh ftl fbl bbl btl) ++
     (rectangleMesh ftr fbr bbr btr)

{-| Default cube renderable object
-}
cube : Renderable
cube = {
  rectangle | mesh = cubeMesh (vec3 0 0 0) 1 }
