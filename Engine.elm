module Engine where

{-| The Graphics Engine Library contains several functions and types to
make constructing 3D Scenes more fun and easy to use.

The simplest possible program to construct a scene is:

    main = render scene

This program renders a default Scene that simply displays a red cube.

`scene` is just shorthand for the following record:

    scene = {
      camera   = camera,
      light    = light,
      objects  = [cube],
      viewport = viewport
    }

As you can see, a scene contains a camera, a light, a list of objects, and
a viewport.

Lets modify the scene to display a pyramid instead

    main = render { scene | objects <- [pyramid]}

As you can see, all it took was changing the value of the objects property.

This logic is applicable almost everywhere in the library. So, you could
construct arbitrary scenes like.

    myCube = {
      cube | position <- vec3 1 1 0,
             rotation <- vec3 45 45 0,
             scale    <- vec3 0.5 0.5 0.5 }

    myPyramid = {
      pyramid | scale <- vec3 0.3 2.0 1.0 }

    myCamera = {
      camera | fieldOfView <- 125 }

    myScene = {
      scene | camera  <- myCamera,
              objects <- [myCube, myPyramid] }

    main = render myScene

As you can see, the record syntax allows to change only what needs to be
changed and removes any unnecessary boilerplate. 
-}

import Engine.Scene.Scene               as Scene
import Engine.Camera.Camera             as Camera
import Engine.Light.Light               as Light
import Engine.Material.Material         as Material
import Engine.Mesh.Mesh                 as Mesh
import Engine.Mesh.Triangle             as Triangle
import Engine.Mesh.Rectangle            as Rectangle
import Engine.Mesh.Cube                 as Cube
import Engine.Mesh.Pyramid              as Pyramid
import Engine.Shader.Attribute          as Attribute
import Engine.Shader.Uniform            as Uniform
import Engine.Render.Render             as Render
import Engine.Render.Renderable         as Renderable
import Engine.Render.DefaultRenderable  as DefaultRenderable
import Engine.Transform.Transform       as Transform
import Engine.Viewport.Viewport         as Viewport

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


-- Re-export Engine.Shader.Attribute
type alias Attribute = Attribute.Attribute

-- Re-export Engine.Shader.Uniform
type alias Uniform = Uniform.Uniform

-- Re-export Engine.Render.Render
render = Render.render

-- Re-export Engine.Render.Renderable
type alias Renderable = Renderable.Renderable
renderable = DefaultRenderable.renderable

-- Re-export Engine.Transform.Transform
type alias Transform a = Transform.Transform a
transform = Transform.transform

-- Re-export Engine.Viewport.Viewport
type alias Viewport = Viewport.Viewport
viewport = Viewport.viewport
