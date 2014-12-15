##Introduction##
Graphics Engine is a 3D Graphics Library backed by [elm-webgl](https://github.com/johnpmayer/elm-webgl) made for the simple construction of 3D scenes.

Example:


```elm
import Engine (render, cube, pyramid, scene)
import Math.Vector3 (vec3)

myCube = {
  cube | position <- vec3 0 0 0,
         rotation <- vec3 45 0 45,
         scale    <- vec3 1.5 1.5 1.5 }

myPyramid = {
  pyramid | position <- vec3 2 0 0,
            scale <- vec3 0.5 1 0.5 }

myScene = {
  scene | objects <- [myCube, myPyramid] }

main = render myScene

```

![Image of Cube and Pyramid]
(/PyramidCube.png)

As you can see, we just created a cube and a pyramid. We modified the properties of each one. We then added these objects to a scene. And then render the scene.

--------------------------------
##How It Works##

The simplest code to render a scene is the following:

```elm
import Engine (render, scene)

main = render scene
```

## Scene ##
`scene` is an object of type `Scene`
```elm
type alias Scene = {
  camera   : Camera,
  objects  : List Renderable,
  light    : Light,
  viewport : Viewport
}
```

A Scene contains a Camera, a list of renderable objects, a light, and a viewport.

*Note : In future releases, support will be added for multiple lights. Currently, only one light per scene is possible.*

The default scene is defined as follows :

```elm
scene : Scene
scene = {
  camera = camera,
  objects = [cube],
  light = light,
  viewport = viewport }
```
---------------------------------
##Camera##
The default camera is `camera` which is an object of type `Camera`

```elm
type alias Camera = Transform {
  aspectRatio  : Float,
  fieldOfView  : Float,
  nearClipping : Float,
  farClipping  : Float
}
```

A `Camera` is a `Transform` with an aspect ratio, a field of view, a near clipping plane, and a far clipping plane. In essence, a `Camera` describes a [viewing frustrum](http://en.wikipedia.org/wiki/Viewing_frustum).

The default camera is defined as follows:
```elm
camera : Camera
camera = {
  position = vec3 0 0 -10,
  rotation = vec3 0 0 0,
  scale    = vec3 1 1 1,
  aspectRatio  = 1,
  fieldOfView  = 45,
  nearClipping = 1,
  farClipping  = 80000 }

```

------------------------------------
##Light##
The default light is `light` which is a transform of type `Light`

```elm
type alias Light = Transform {
  color       : Vec3,
  intensity   : Float,
  visibility  : Bool
}
```

A `Light` is a `Transform` with a color, an intensity, and a visibility (i.e. a flag to turn the light on or off). A `Light` is a transform because it is a light source and must have a physical location in world coordinates in order to affect the world appropriately.


The default light is defined as follows :
```elm
light : Light
light = {
  position  = vec3 1 1 3,
  rotation   = vec3 0 0 0,
  scale      = vec3 1 1 1,
  intensity  = 1,
  color      = vec3 1 1 1,
  visibility = True }

```

----------------------------
##Transform##
The type `Transform` is used to store position, rotation, and scale.

```elm
type alias Transform = {
  position : Vec3,
  rotation : Vec3,
  scale    : Vec3
}
```

---------------------------------
##Renderable##

The type `Renderable` is used to specify that an object may be rendered onto a screen.

```elm
type alias Renderable = Transform {
  mesh     : Mesh
  material : Material
}
```

In order for an object to be rendered it must have a physical location in world space (the Transform part), it must have a shape (the mesh property), and it must define how it reacts to light (the material property)

--------------------------------

##Mesh##
A `Mesh` is simply a `List(Triangle Attribute)`

```elm
type alias Mesh = List (Triangle Attribute)
```

where `Attribute` is the type of the objects that are sent to the GPU as attributes

Currently, the only attribute sent to the GPU as attribute is `position`

```elm
type alias Attribute = {
  position : Vec3
}
```

Typically, one would send a color and a normal attribute to the GPU. But, the choice made by the library is that normals can be calculated by passing in a normal matrix and color can be set on the `Material`

The library offers currently 4 basic meshes to construct your objects:

 * `cubeMesh`
 * `pyramidMesh`
 * `rectangleMesh`
 * `triangleMesh`

-----------------------------------
##Material##
A `Material` is an object that defines how an object reacts to light and draws itself.

```elm
type alias MaterialProperty = {
  color    : Vec3,
  strength : Float
}

type alias Material = {
  emissive : MaterialProperty,
  ambient  : MaterialProperty,
  diffuse  : MaterialProperty,
  specular : MaterialProperty,
  vertexShader   : String,
  fragmentShader : String
}
```

A material has emissive, ambient, diffuse, and specular components in order to address the vast majority of possible use cases. These are standard properties to have to represent illumination models such as the [Phong Illumination Model](http://en.wikipedia.org/wiki/Phong_reflection_model).

A material also has a vertex shader and a fragment shader. Default shaders are provided by the library, but you can easily write your own and pass it to the material.

The default Material `material` is defined as follows:

```elm
material : Material
material = {
  emissive = MaterialProperty (vec3 0 0 0) 0,
  ambient  = MaterialProperty (vec3 0 0 0) 0,
  diffuse  = MaterialProperty (vec3 0 0 0) 0,
  specular = MaterialProperty (vec3 0 0 0) 0,
  vertexShader   = vertexShader,
  fragmentShader = fragmentShader }
```

-----------------------
##Shaders##

Shaders are simply passed as strings. While this may lead to some unsafe behavior that might go unnoticed by the Elm compiler, this design choice leads to two important benefits.

  1. You can write your own shaders (or even import them from .glsl files) and easily create custom materials with custom behavior.
  2. The shaders you write have access to all sorts of default values and GLSL can be easily extended with a simple base library. Therefore, you do not need to manually pass or declare any attributes or uniforms as they are all given.

Currently, the default vertex shader, `vertexShader` just simply applies the model-view-projection to the vertex's position.

*Vertex Shader:*
```glsl
varying vec3 vPosition;

void main (){
  vec4 outputPosition = modelViewProjectionMatrix * vec4(position, 1.0);
  gl_Position = outputPosition;
  vPosition = outputPosition.xyz;
}
```

Currently, the default fragment shader, `fragmentShader` just simply returns a red color.

*Fragment Shader:*
```glsl
void main(){
  gl_FragColor = vec4(1.0,0.0,0.0,1.0);
}
```

*Note: In future releases, more default fragment shaders will be provided including a standard [Gouraud shader](http://en.wikipedia.org/wiki/Gouraud_shading), a standard [Phong shader](http://en.wikipedia.org/wiki/Phong_shading) and a simple [Toon shader](http://en.wikipedia.org/wiki/Cel_shading).*

----------------------------
##Writing your own shaders##

If you want to write your own materials, you have to know that the libraries in its design has made certain tradeoffs (which are constantly being reviewed) and that these tradeoffs have influenced how to write and structure GLSL code.

First of all, you **cannot pass** attributes and uniforms yourself.

Currently, the available attributes are :

```glsl
attribute vec3 position;
```

The available uniforms are :
```glsl
uniform mat4  modelMatrix;
uniform mat4  viewMatrix;
uniform mat4  projectionMatrix;
uniform vec3  lightPosition;
uniform vec3  lightRotation;
uniform vec3  lightColor;
uniform float lightIntensity;
uniform vec3  materialEmissiveColor;
uniform float materialEmissiveStrength;
uniform vec3  materialAmbientColor;
uniform float materialAmbientStrength;
uniform vec3  materialDiffuseColor;
uniform float materialDiffuseStrength;
uniform vec3  materialSpecularColor;
uniform float materialSpecularStrength;
```

In order to more easily work with materials and lights and also to allow for future improvements to the library, a few structs are made available:

```glsl
struct MaterialProperty {
  vec3 color;
  float strength;
};

struct Material {
  MaterialProperty emissive;
  MaterialProperty ambient;
  MaterialProperty diffuse;
  MaterialProperty specular;
};

struct Light {
  vec3 position;
  vec3 rotation;
  vec3 color;
  float intensity;
};
```

As you may notice, these structs somewhat match their Elm equivalents.
*Note: currently, the visibility property for Light struct is not supported but will be in future releases*

Furthermore, Graphics Engine comes packaged with a small GLSL library with common functions not provided by GLSL (or at least, not by WebGL's version of GLSL)

The functions are :

* `float trace(mat2)`
* `float trace(mat3)`
* `float trace(mat4)`
* `float determinant(mat2)`
* `float determinant(mat3)`
* `float determinant(mat4)`
* `mat2 transpose(mat2)`
* `mat3 transpose(mat3)`
* `mat4 transpose(mat4)`
* `mat2 inverse(mat2)`
* `mat3 inverse(mat3)`
* `mat4 inverse(mat4)`


Additionally, a set of helpful variables are provided (mostly as a convenience):

* `Light light;` *The light in the scene*
* `Material material;` *The object's material*
* `mat4 modelViewProjectionMatrix;`
* `mat4 modelViewMatrix;`
* `mat4 normalMatrix;`

-----------------------
##How the render function works:##

You might have noticed from above that the simplest example is just

```elm
import Engine(render,scene)

main = render scene
```

This code is so simple that it may make the `render` function seem almost magical. But this function is actually very simple and not magical at all.

`render` is defined as follows:

```elm
render : Scene -> Element
render scene =
  webgl (floor scene.viewport.dimensions.width,
         floor scene.viewport.dimensions.height) <|
    map (renderObject scene) scene.objects
```

Basically, render just calls `webgl` from [the elm-webgl library](https://github.com/johnpmayer/elm-webgl), sets up the size of the canvas from the viewport dimensions of the scene (*this is exposed so you can easily implement fullscreen or make arbitrarily sized scenes*).

The `render` function then constructs the list of Entities that `webgl` wants by calling `renderObject` on all the objects in the scene.

`renderObject` is not directly exposed by the `Engine` module as it is not intended to be used by the users of the Library.

`renderObject` is defined as follows:

```elm
renderObject : Scene -> Renderable -> Entity
renderObject scene object =
  entity (constructVertexShader   object.material.vertexShader)
         (constructFragmentShader object.material.fragmentShader)
         object.mesh
         (constructUniform scene object)
```

As, you can see, `renderObject` does nothing fancy. All it does is construct the vertex shader from the object's vertex shader, construct the fragment shader from the object's fragment shader, construct the necessary uniforms and then pass the vertex shader, fragment shader, the object's mesh, and the uniforms to `entity`.

Please refer to [the elm-webgl library](https://github.com/johnpmayer/elm-webgl) for more details on how the `entity` and `webgl` functions work.

So, basically, the real magic behind the `render` function is in the data. You just set up the scene as if you were writing a .json file and you pass that data onto `render`. That's it!

-----------------------

##Note on Dependencies##

Graphics Engine depends heavily on two libraries:
 * [elm-webgl](https://github.com/johnpmayer/elm-webgl)
 * [elm-linear-algebra](https://github.com/johnpmayer/elm-linear-algebra)

The dependency on [elm-webgl](https://github.com/johnpmayer/elm-webgl) is such that Graphics Engine does not actually require you to import [elm-webgl](https://github.com/johnpmayer/elm-webgl) in order to use Graphics Engine to its fullest.

On the other hand, importing [elm-linear-algebra](https://github.com/johnpmayer/elm-linear-algebra) is a must to do almost anything interesting because all the vectors and matrices are stored as `Vec3` and `Mat4` types.

Therefore, it is highly recommended to also download [elm-linear-algebra](https://github.com/johnpmayer/elm-linear-algebra) when using Graphics Library.
