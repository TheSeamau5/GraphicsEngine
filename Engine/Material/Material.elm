module Engine.Material.Material where

{-| This module defined the Material type and the default material object.
A Material is a record type made to define how an object reacts to light
in a scene and draws itself.

# Definition
@docs Material

# Default Material
@docs material

# Convenient Helper Type
@docs MaterialProperty

-}

import Math.Vector3 (Vec3, vec3)
import Engine.Shader.VertexShader (vertexShader)
import Engine.Shader.FragmentShader (fragmentShader)

{-| Represent a property of a material. Contains a color and a strength.
By convention, full strength is set at 1 an no strength is 0,
color values are between 0 and 1 (not 0 - 255).

Example (creating a white specular property at full strength):

    specularProperty = MaterialProperty (vec3 1 1 1) 1

From the above, the specularProperty variable is given a white color and
full strength. If this property is used to represent specular highlights,
then this means that these highlights will appear white and very visible.

-}
type alias MaterialProperty = {
  color : Vec3,
  strength : Float
}

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
type alias Material = {
  emissive : MaterialProperty,
  ambient  : MaterialProperty,
  diffuse  : MaterialProperty,
  specular : MaterialProperty,
  vertexShader    : String,
  fragmentShader  : String
}

{-| Default material. Defines a material with a weak white ambient and no
emissive, diffuse, or specular terms. (i.e. a simple flat material)

The current default shaders are a standard vertex shader that converts from
world to screen coordinates and a fragment shader that just returns a red pixel.

This is ideal for creating your own materials and to just use a simple
default material.
-}
material : Material
material = {
  emissive = MaterialProperty (vec3 0 0 0) 0,
  ambient  = MaterialProperty (vec3 1 1 1) 0.2,
  diffuse  = MaterialProperty (vec3 0 0 0) 0,
  specular = MaterialProperty (vec3 0 0 0) 0,
  vertexShader = vertexShader,
  fragmentShader = fragmentShader }
