module Engine.Mesh.Sphere exposing (sphereMesh, sphere)

{-| This module contains the definition of a sphere mesh and of a sphere
renderable object.

# Sphere Mesh
@docs sphereMesh

# Sphere (Renderable)
@docs sphere

-}

import List

import WebGL exposing (Mesh)
import Math.Vector3 exposing (Vec3, add, vec3)
import Engine.Mesh.Rectangle exposing (rectangleMesh)
import Engine.Mesh.Triangle exposing (triangleMesh, triangle)
import Engine.Render.Renderable exposing (Renderable)


{-| Function that takes a center point/vector, the radius, the number of
segments around the sphere radially (like longitude), the number of segments up
and down (like latitude), and returns a mesh that approximates a sphere.

      sphere center segmentsR segmentsY
-}
sphereMesh : Vec3 -> Float -> Int -> Int -> Mesh
sphereMesh center radius segmentsR segmentsY =
  let dt = 2 * pi / (toFloat segmentsR)
      dy = 1 / (toFloat segmentsY)
      halfRadius = radius / 2
      getRadius y = sqrt (max 0 (halfRadius - y*y))
  in (List.range 0 (segmentsR-1)) |> List.map toFloat |> List.concatMap (\i ->
    let theta = i * dt
        x0 = cos theta
        x1 = cos (theta + dt)
        z0 = sin theta
        z1 = sin (theta + dt)
    in (List.range 0 (segmentsY-1)) |> List.map toFloat |> List.concatMap (\j ->
      let y0 = j*dy - radius
          y1 = y0+dy
          r0 = getRadius y0
          r1 = getRadius y1
          bl = add center (vec3 (x0*r0) y0 (z0*r0))
          br = add center (vec3 (x1*r0) y0 (z1*r0))
          tl = add center (vec3 (x0*r1) y1 (z0*r1))
          tr = add center (vec3 (x1*r1) y1 (z1*r1))
      in triangleMesh bl br tr ++ triangleMesh bl tr tl))


{-| Default sphere renderable object. Located at the origin with radius of 0.5.
-}
sphere : Renderable
sphere = {
  triangle | mesh = sphereMesh (vec3 0 0 0) 0.5 20 20 }
