##Introduction##
Graphics Engine is a 3D Graphics Library backed by [elm-webgl](https://github.com/johnpmayer/elm-webgl) made for the simple construction of 3D scenes.

Example:


```elm
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
main = render scene
```
--------------------------------
## Scene ##
`scene` is an object of type `Scene`
```elm
type alias Scene = {
  camera   : Camera,
  objects  : List (Object {}),
  light    : Light,
  viewport : {
    dimensions : {
      width  : Float,
      height : Float
    }
  }
}
```

A Scene contains a Camera, a list of objects, a light, and a viewport.

*Note : In future releases, support will be added for multiple lights. Currently, only one light per scene is possible.*

The default scene is defined as follows :

```elm
scene : Scene
scene = {
  camera = camera,
  objects = [cube],
  light = light,
  viewport = {
    dimensions = {
      width = 400,
      height = 400 } } }
```
---------------------------------
##Camera##
The default camera is `camera` which is an object of type `Camera`

```elm
type alias Camera = Object {
  aspectRatio  : Float,
  fieldOfView  : Float,
  nearClipping : Float,
  farClipping  : Float
}
```

A `Camera` is an `Object` with an aspect ratio, a field of view, a near clipping plane, and a far clipping plane. In essence, a `Camera` describes a [viewing frustrum](http://en.wikipedia.org/wiki/Viewing_frustum).

The default camera is defined as follows:
```elm
camera : Camera
camera = {
  object | position     <- vec3 0 0 -10,
           aspectRatio  =  1,
           fieldOfView  =  45,
           nearClipping =  1,
           farClipping  =  80000
}
```
*Note: The above is not legal Elm code. It is just used for clarity. Please see [the source file for Camera](https://github.com/TheSeamau5/GraphicsEngine/blob/master/Engine/Camera/Camera.elm) for more details.*

------------------------------------
##Light##
The default light is `light` which is an object of type `Light`

```elm
type alias Light = Object {
  color       : Vec3,
  intensity   : Float,
  visibility  : Bool
}
```

A `Light` is an `Object` with a color, an intensity, and a visibility (i.e. a flag to turn the light on or off).


The default light is defined as follows :
```elm
light : Light
light = {
  object | position   <- vec3 1 1 3,
           color      =  vec3 1 1 1,
           intensity  =  1,
           visibility =  True
}
```
*Note: The above is not legal Elm code. It is just used for clarity. Please see [the source file for Light](https://github.com/TheSeamau5/GraphicsEngine/blob/master/Engine/Light/Light.elm) for more details.*

----------------------------
##Object##

The type `Object` is the basis for several types in the library.

```elm
type alias Object a = { a |
  material : Material,
  mesh     : Mesh,
  position : Vec3,
  rotation : Vec3,
  scale    : Vec3
}
```

An object contains a material, a mesh, a position, a rotation, and a scale.

---

**Note on the future of Object:**

**The following is speculative and may or may not describe a future version of the library. Please skip to the next topic if you are just interested in using this library.**

*It is unclear whether or not, going forward, an object will have a material and a mesh property. The competing proposal is to have Object be an empty type (or potential have a guid) and then split object into several types: *

```elm
type alias Object a = { a |
  guid : Int
}

type alias Transform a = Object { a |
  position : Vec3,
  rotation : Vec3,
  scale    : Vec3
}

type alias Renderable a = Transform { a |
  material : Material,
  mesh     : Mesh
}
```

*This would then cause the weird design problem of: should lights and cameras be just `Transform` or `Renderable`. Should there be a built-in behavior or should this behavior be defined by the user of the library?*

---------------------------------
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
* `Material material` *The object's material*
* `mat4 modelViewProjectionMatrix;`
* `mat4 modelViewMatrix;`
* `mat4 normalMatrix;`
