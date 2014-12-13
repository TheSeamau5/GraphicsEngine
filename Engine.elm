module Engine where

import Engine.Scene.Scene           as Scene
import Engine.Camera.Camera         as Camera
import Engine.Light.Light           as Light
import Engine.Material.Material     as Material
import Engine.Mesh.Mesh             as Mesh
import Engine.Mesh.Triangle         as Triangle
import Engine.Mesh.Rectangle        as Rectangle
import Engine.Mesh.Cube             as Cube
import Engine.Mesh.Pyramid          as Pyramid
import Engine.Object.Object         as Object
import Engine.Object.DefaultObject  as DefaultObject
import Engine.Shader.Attribute      as Attribute
import Engine.Shader.Uniform        as Uniform
import Engine.Render.Render         as Render

-- Re-export Engine.Scene.Scene
type alias Scene = Scene.Scene
scene = Scene.scene

-- Re-export Engine.Camera.Camera
type alias Camera = Camera.Camera
camera = Camera.camera

-- Re-export Engine.Light.Light
type alias Light = Light.Light
light = Light.light

-- Re-export Engine.Material.Material
type alias Material = Material.Material
material = Material.material

-- Re-export Engine.Mesh.Mesh
type alias Mesh = Mesh.Mesh

-- Re-export Engine.Mesh.Triangle
triangle = Triangle.triangle
triangleMesh = Triangle.triangleMesh

-- Re-export Engine.Mesh.Rectangle
rectangle = Rectangle.rectangle
rectangleMesh = Rectangle.rectangleMesh

-- Re-export Engine.Mesh.Cube
cube = Cube.cube
cubeMesh = Cube.cubeMesh

-- Re-export Engine.Mesh.Pyramid
pyramid = Pyramid.pyramid
pyramidMesh = Pyramid.pyramidMesh

-- Re-export Engine.Object.Object and Engine.Object.DefaultObject
type alias Object a = Object.Object a
object = DefaultObject.object

-- Re-export Engine.Shader.Attribute
type alias Attribute = Attribute.Attribute

-- Re-export Engine.Shader.Uniform
type alias Uniform = Uniform.Uniform

-- Re-export Engine.Render.Render
render = Render.render
