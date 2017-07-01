module Engine exposing
    ( Scene, scene
    , Camera, camera
    , Light, light
    , MaterialProperty, Material, material
    , Mesh, triangleMesh, rectangleMesh, pyramidMesh, cubeMesh, sphereMesh
    , Renderable, renderable, triangle, rectangle, pyramid, cube, sphere
    , render
    , Transform, transform
    , Viewport, viewport
    , Attribute, Uniform
    )

{-| The Graphics Engine Library contains several functions and types to
make constructing 3D Scenes more fun and easy to use.

The simplest possible program to construct a scene is:

    main = render scene

This program renders a default Scene that simply displays a red cube.

`scene` is just shorthand for the following record:

    scene = {
      camera   = camera,
      light    = light,
      objects  = fromList [cube],
      viewport = viewport
    }

As you can see, a scene contains a camera, a light, a list of objects, and
a viewport.

Lets modify the scene to display a pyramid instead

    main = render { scene | objects <- fromList [pyramid]}

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
              objects <- fromList [myCube, myPyramid] }

    main = render myScene

As you can see, the record syntax allows to change only what needs to be
changed and removes any unnecessary boilerplate.

# Scene
@docs Scene, scene

# Camera
@docs Camera, camera

# Light
@docs Light, light

# Material
@docs MaterialProperty, Material, material

# Mesh
@docs Mesh, triangleMesh, rectangleMesh, pyramidMesh, cubeMesh, sphereMesh

# Renderable
@docs Renderable, renderable, triangle, rectangle, pyramid, cube, sphere

# Render Function
@docs render

# Transform
@docs Transform, transform

# Viewport
@docs Viewport, viewport

# Shading
@docs Attribute, Uniform

-}

-------------- IMPORTED MODULES JUST FOR TYPE ANNOTATIONS -------------------

import Math.Vector3 exposing (Vec3)
import Graphics.Element exposing (Element)

----------------- IMPORTED MODULES TO BE RE-EXPORTED ------------------------

import Engine.Scene.Scene               as Scene
import Engine.Camera.Camera             as Camera
import Engine.Light.Light               as Light
import Engine.Material.Material         as Material
import Engine.Mesh.Mesh                 as Mesh
import Engine.Mesh.Triangle             as Triangle
import Engine.Mesh.Rectangle            as Rectangle
import Engine.Mesh.Cube                 as Cube
import Engine.Mesh.Pyramid              as Pyramid
import Engine.Mesh.Sphere               as Sphere
import Engine.Shader.Attribute          as Attribute
import Engine.Shader.Uniform            as Uniform
import Engine.Render.Render             as Render
import Engine.Render.Renderable         as Renderable
import Engine.Render.DefaultRenderable  as DefaultRenderable
import Engine.Transform.Transform       as Transform
import Engine.Viewport.Viewport         as Viewport

----------------- Re-export Engine.Scene.Scene ------------------------------
{-| Represents a scene. A scene contains a list of objects such that
calling `render` on a scene will render all the objects in a webgl context.

A scene contains a camera to define the viewer's viewing point, a light to
illuminate the scene, and a viewport to describe the context on which the
scene will be drawn.

-}
type alias Scene = Scene.Scene

{-| Default scene object. Draws a red cube in the middle of the default context.
-}
scene : Scene
scene = Scene.scene

-----------------------------------------------------------------------------


----------------- Re-export Engine.Camera.Camera ----------------------------
{-| Represent a perspective camera. As a transform, a camera has a
position, a rotation, and a scale. A camera also has an aspect ratio,
a field of view, a near clipping plane, and a far clipping plane. In essence,
a camera describes a viewing frustrum.

Note : By convention, aspectRatio is a ratio (so a 4 : 3 aspect ratio
can be achieved by setting aspectRatio to 4 / 3 or 1.3), fieldOfView is
set in degrees (45 being usually a good safe bet), nearClipping and
farClipping are set in world coordinates.

Example 1 : (A typical 4 : 3 camera)

    fourThirdsCamera = {
      position      = vec3 0 0 0,
      rotation      = vec3 0 0 0,
      scale         = vec3 1 1 1,
      aspectRatio   = 4 / 3,
      fieldOfView   = 45,
      nearClipping  = 1,
      farClipping   = 80000 }

Example 2 : (A 16 : 9 camera that cannot see far and warped field of view)

    weirdSixteenNinthsCamera = {
      fourThirdsCamera | aspectRatio <- 16 / 9,
      fieldOfView <- 125,
      farClipping <- 10 }

-}
type alias Camera = Camera.Camera


{-| Default camera on a scene. Defines a camera at position x = 0, y = 0,
z = -10, with a square aspect ratio (aspectRatio == 1), a field of view of
45 degrees (fieldOfView == 45), a near clipping plane at 1 and a far
clipping plane at 80000.

Example : Constructing a standard widescreen cinema camera

    widescreenCamera = { camera | aspectRatio <- 2.39 }

-}
camera : Camera
camera = Camera.camera

----------------------------------------------------------------------------


----------------- Re-export Engine.Light.Light -----------------------------

{-| Represent a light in a scene. As a transform, a light has a position,
a rotation, and a scale. A light also has an intensity property
to control the strength of the influence of the light source in the scene,
a color property, and a visibility property to act as a flag to toggle
a light on and off.

Note: By convention, full intensity is set a 1 and no intensity is 0,
color values are values between 0 and 1 (not 0 - 255).

Example 1 : (A red light at full intensity)

    redLight = {
      position   = vec3 0 0 0,
      rotation   = vec3 0 0 0,
      scale      = vec3 1 1 1,
      intensity  = 1,
      color      = vec3 1 0 0,
      visibility = True }

Example 2 : (A white light at half intensity)

    whiteLight =
      { redLight | color     <- vec3 1 1 1,
                   intensity <- 0.5}

-}
type alias Light = Light.Light


{-| Default light on a scene. Defines a white light at full intensity
at position x = 1, y = 1 , z = 3.

This is ideal for constructing custom lights just by updating the properties
you wish to update.

Example : Constructing a green light

    greenLight = { light | color <- vec3 0 1 0 }
-}
light : Light
light = Light.light

----------------------------------------------------------------------------

----------------- Re-export Engine.Material.Material -----------------------

{-| Represent a property of a material. Contains a color and a strength.
By convention, full strength is set at 1 an no strength is 0,
color values are between 0 and 1 (not 0 - 255).

Example (creating a white specular property at full strength):

    specularProperty = MaterialProperty (vec3 1 1 1) 1

From the above, the specularProperty variable is given a white color and
full strength. If this property is used to represent specular highlights,
then this means that these highlights will appear white and very visible.

-}
--type alias MaterialProperty = Material.MaterialProperty


{-| Represent a material. A Material has properties to help it define
and adapt how it reacts to light.

Emissive usually models light that seems to emanate from the object itself.

Ambient usually represents some ambient term so that objects may be somewhat
visible in the dark. (to compensate for not using a ray tracer)

Diffuse usually models the scatter of light on a surface. Rough objects
tend to have a high diffuse strength as the light's reflection does not
seem to focus on a small area but rather "diffuses" or spreads on the entire
surface.

Specular usually models specular highlights, or shinyness. Metallic objects
tend to have a high specular strength as they seem to almost act as a
mirror and a light's reflection seems to focus on a small area.

Note: Diffuse and Specular are completely independent, they seem
to be opposites but you can perfectly have a material with both high diffuse
and specular strengths and you can also perfectly have a material with both
low diffuse and specular strengths.

A Material also has a vertex shader and a fragment shader. A Shader is a
program that is sent to the GPU (Graphics Processing Unit).

The vertex shader controls where a point is displayed on the screen. Usually,
it suffices to just have a vertex shader that converts a position from world
coordinates to screen coodinates.

The fragment shader controls what color a given fragment (just think pixel) has.
Fragment shaders can often get very involved as they often calculate
the contributions due to all the light sources in a scene and somehow mix
this with the position, normal, and material properties of an object to
finally get a pixel color.

Note: Both the vertex and fragment shaders are written in the GLSL
programming language. To use your own shaders simply make sure to pass them
to a material as a String.
-}
type alias Material = Material.Material


{-| Default material. Defines a material with a weak white ambient and no
emissive, diffuse, or specular terms. (i.e. a simple flat material)

The current default shaders are a standard vertex shader that converts from
world to screen coordinates and a fragment shader that just returns a red pixel.

This is ideal for creating your own materials and to just use a simple
default material.
-}
material : Material
material = Material.material

----------------------------------------------------------------------------

----------------- Re-export Engine.Mesh.Mesh -------------------------------

{-| Mesh type. A mesh is simply a list of triangles where each vertex
has some property (in this case, just the position property). This type is
used to construct arbitrary geometry that can be sent to the GPU to be
rendered to the screen.

For reference, Triangle just a 3-tuple:

    type alias Triangle a = (a, a, a)

and Attribute is just a record type with a position field:

    type alias Attribute = {
      position : Vec3
    }

-}
type alias Mesh = Mesh.Mesh

----------------------------------------------------------------------------

----------------- Re-export Engine.Mesh.Triangle ---------------------------

{-| Default triangle renderable object
-}
triangle : Renderable
triangle = Triangle.triangle

{-| Function to construct a triangle mesh from three points.
-}
triangleMesh : Vec3 -> Vec3 -> Vec3 -> Mesh
triangleMesh = Triangle.triangleMesh

----------------------------------------------------------------------------

----------------- Re-export Engine.Mesh.Rectangle --------------------------

{-| Default rectangle renderable object
-}
rectangle : Renderable
rectangle = Rectangle.rectangle


{-| Function that takes 4 points and construct a rectangle mesh.

Note: Actually, this function constructs two triangles. This means that
it does not explicitly check if all 4 points are co-planar.

Furthermore, the function does not enforce a rectangle's property that
opposite sides be of equal length and that adjacent sides be perpendicular.
-}
rectangleMesh : Vec3 -> Vec3 -> Vec3 -> Vec3 -> Mesh
rectangleMesh = Rectangle.rectangleMesh

----------------------------------------------------------------------------

----------------- Re-export Engine.Mesh.Cube -------------------------------

{-| Default cube renderable object
-}
cube : Renderable
cube = Cube.cube


{-| Function that takes a center point/vector and a size and returns a
cube mesh.

    cube center size
-}
cubeMesh : Vec3 -> Float -> Mesh
cubeMesh = Cube.cubeMesh

----------------------------------------------------------------------------

----------------- Re-export Engine.Mesh.Pyramid ----------------------------

{-| Default pyramid renderable object
-}
pyramid : Renderable
pyramid = Pyramid.pyramid

{-| Function that takes a center point/vector, a height and a width and
returns a pyramid mesh.

    pyramidMesh center height width
-}
pyramidMesh : Vec3 -> Float -> Float -> Mesh
pyramidMesh = Pyramid.pyramidMesh

----------------------------------------------------------------------------

----------------- Re-export Engine.Mesh.Sphere -----------------------------

{-| Default sphere renderable object. Located at the origin with radius of 0.5.
-}

sphere : Renderable
sphere = Sphere.sphere

{-| Function that takes a center point/vector, the radius, the number of
segments around the sphere radially (like longitude), the number of segments up
and down (like latitude), and returns a mesh that approximates a sphere.

    sphereMesh center radius segmentsR segmentsY
-}
sphereMesh : Vec3 -> Float -> Float -> Float -> Mesh
sphereMesh = Sphere.sphereMesh

----------------------------------------------------------------------------

----------------- Re-export Engine.Shader.Attribute ------------------------

{-| Attribute type. This type, from its fields, captures all of the
attributes that are passed to the vertex shader.

Currenly only contains a position field.
-}
type alias Attribute = Attribute.Attribute

----------------------------------------------------------------------------

----------------- Re-export Engine.Shader.Uniform --------------------------

{-| Container type to hold all of the properties that are passed to GLSL
as uniforms.
-}
type alias Uniform = Uniform.Uniform

----------------------------------------------------------------------------

----------------- Re-export Engine.Render.Render ---------------------------

{-| Function to render a scene to a WebGL canvas context. This function takes
in a Scene and returns the WebGL canvas context.

Note: The function renders only the objects in the objects list of the scene.
-}
render : Scene -> Element
render = Render.render

----------------------------------------------------------------------------

----------------- Re-export Engine.Render.Renderable -----------------------

{-| Represent a renderable object. A renderable object is an Object with a
Transform properties (position, rotation, and scale) in order to locate it
physically in world space. A renderable object also comes with a Material
and a Mesh.

A renderable uses its position, rotation, and scale to set its position,
rotation and scale in world space respectively. The material describes how
the renderable object responds to light and draws itself. The mesh describes
the geometry of the renderable object (if it is a cube, a pyramid, etc...).

-}
type alias Renderable = Renderable.Renderable


{-| Default renderable object. Alias for the default cube object.
-}
renderable : Renderable
renderable = DefaultRenderable.renderable

----------------------------------------------------------------------------

----------------- Re-export Engine.Transform.Transform ---------------------

{-| A transform is an object with a position, a rotation, and a scale.
This is mean to be able to represent linear transformations in space. As
such, one can model where an object is (position), what is its orientation
(rotation), and how large is it (scale).
-}
type alias Transform a = Transform.Transform a


{-| Default transform.

Defined as follows:

    transform = {
      position = vec3 0 0 0,
      rotation = vec3 0 0 0,
      scale    = vec3 1 1 1 }

-}
transform : Transform {}
transform = Transform.transform

----------------------------------------------------------------------------

----------------- Re-export Engine.Viewport.Viewport -----------------------

{-| A Viewport is an object that is supposed to describe the target "screen"
or "context" on to which a scene is rendered.

A Viewport has dimensions consisting of a width and a height.
-}
type alias Viewport = Viewport.Viewport


{-| Default Viewport. Sets dimensions.width = 400 and dimensions.height = 400.
(In essence, with the default viewport object your scene will appear in
a 400 by 400 canvas or webgl context).
-}
viewport : Viewport
viewport = Viewport.viewport
