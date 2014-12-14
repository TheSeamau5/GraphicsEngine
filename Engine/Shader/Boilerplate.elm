module Engine.Shader.Boilerplate where

{-| This module exists to automatically handle some of the boilerplate
that comes with writing shaders.

# Struct Definitions
@docs materialPropertyStructTypeDefinition,
      materialStructTypeDefinition,
      lightStructTypeDefinition

# Automatic Setup of Variables
@docs setupMaterial, setupLight

# Uniform Declarations
@docs uniformDeclarations

# Attribute Declarations
@docs attributeDeclarations

# Additional Useful Variables
@docs usefulVariables

# Boilerplate
@docs vertexShaderBoilerplate, fragmentShaderBoilerplate

-}

import Engine.Shader.Utils (
  declareUniform,
  declareAttribute,
  groupStatements,
  setFloatPrecision,
  newLine,
  declareStructType,
  declareInitializedVariable,
  callFunctionExpression)
import Engine.Shader.Library (libraryVariables, libraryFunctions)
import List (intersperse, map)



{-| Definition of the struct MaterialProperty

    //GLSL CODE:

    struct MaterialProperty {
      vec3 color;
      float strength;
    };

-}
materialPropertyStructTypeDefinition : String
materialPropertyStructTypeDefinition = declareStructType "MaterialProperty"
  [ ("vec3" , "color")    ,
    ("float", "strength") ]






{-| Definition of the struct Material

    //GLSL CODE:

    struct Material {
      MaterialProperty emissive;
      MaterialProperty ambient;
      MaterialProperty diffuse;
      MaterialProperty specular;
    };

-}
materialStructTypeDefinition : String
materialStructTypeDefinition = declareStructType "Material"
  [ ("MaterialProperty", "emissive") ,
    ("MaterialProperty", "ambient")  ,
    ("MaterialProperty", "diffuse")  ,
    ("MaterialProperty", "specular") ]






{-| The setup for material. This is due to the fact that currently you
cannot yet pass structs as uniforms with elm-webgl. As such, each underlying
property is passed as a primitive type and then the struct is constructed
from each of the properties.

Thanks to this process, you now have access to the variable :

    Material material;

And it contains all of the data you have defined in the Elm code usable in
the same way as in Elm.

-}
setupMaterial : String
setupMaterial =
  let makeMaterialColor = callFunctionExpression "MaterialProperty"
      materialValue = callFunctionExpression "Material" <| map makeMaterialColor
        [ ["materialEmissiveColor", "materialEmissiveStrength"],
          ["materialAmbientColor" , "materialAmbientStrength" ],
          ["materialDiffuseColor" , "materialDiffuseStrength" ],
          ["materialSpecularColor", "materialSpecularStrength"]]
  in declareInitializedVariable "Material" "material" materialValue







-- TODO: Add property visibility : Bool
-- TODO: Add property scale : Vec3
{-| Definition of the struct Light.

Note: Currently, this struct does not have the visibility property. This is
due to the fact that you cannot yet pass bools as uniforms with elm-webgl. As
such it is ignored. Please take notice!

Note: Currently, this struct does not contain the scale property. Given the
last refractoring, Lights are now defined as Transforms and as such contain
a scale property. This will be amended in a future release. Please take notice!

    //GLSL CODE:

    struct Light {
      vec3 position;
      vec3 rotation;
      vec3 color;
      float intensity;
    };

-}
lightStructTypeDefinition : String
lightStructTypeDefinition = declareStructType "Light"
  [ ("vec3" , "position")  ,
    ("vec3" , "rotation")  ,
    ("vec3" , "color")     ,
    ("float", "intensity") ]






-- TODO: Add support for visibility
-- TODO: Add support for scale
{-| The setup for light. This is due to the fact that currently you
cannot yet pass structs as uniforms with elm-webgl. As such, each underlying
property is passed as a primitive type and then the struct is constructed
from each of the properties.

Thanks to this process, you now have access to the variable :

    Light light;

And it contains all of the data you have defined in the Elm code usable in
the same way as in Elm.

Note: Currently visibility and scale are unsupported!

Note: Currently only one light is supported. This is due to the fact that
currently you cannot yet pass arrays as uniforms with elm-wegl. I haven't
thought of a good hack around this, sorry.

-}
setupLight : String
setupLight =
  let lightValue = callFunctionExpression "Light"
        [ "lightPosition"  ,
          "lightRotation"  ,
          "lightColor"     ,
          "lightIntensity" ]

  in declareInitializedVariable "Light" "light" lightValue






-- TODO : Add property lightVisibility : Bool
-- TODO : Add property lightScale : Vec3
{-| Set of uniform declarations. (Available in both vertex and fragment shaders)

Currently, the available uniforms are:

    uniform mat4 modelMatrix;
    uniform mat4 viewMatrix;
    uniform mat4 projectionMatrix;

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

-}
uniformDeclarations : String
uniformDeclarations =
  groupStatements <| map (uncurry declareUniform)
    [ ("mat4" , "modelMatrix")              ,
      ("mat4" , "viewMatrix")               ,
      ("mat4" , "projectionMatrix")         ,
      ("vec3" , "lightPosition")            ,
      ("vec3" , "lightRotation")            ,
      ("vec3" , "lightColor")               ,
      ("float", "lightIntensity")           ,
      ("vec3" , "materialEmissiveColor")    ,
      ("float", "materialEmissiveStrength") ,
      ("vec3" , "materialAmbientColor")     ,
      ("float", "materialAmbientStrength")  ,
      ("vec3" , "materialDiffuseColor")     ,
      ("float", "materialDiffuseStrength")  ,
      ("vec3" , "materialSpecularColor")    ,
      ("float", "materialSpecularStrength") ]







{-| Set of attribute declarations. (available in vertex shader only)

Currently, the available attributes are:

    attribute vec3 position;

-}
attributeDeclarations : String
attributeDeclarations = groupStatements <| map (uncurry declareAttribute)
  [ ("vec3", "position")]



{-| Shorthand for the model view matrix. Available in both shaders.

    mat4 modelViewMatrix = viewMatrix * modelMatrix;

-}
modelViewMatrix =
  declareInitializedVariable "mat4" "modelViewMatrix"
    "viewMatrix * modelMatrix"


{-| Shorthand for the model view projection matrix. Available in both shaders.

    mat4 modelViewProjectionMatrix = projectionMatrix * viewMatrix * modelMatrix;

-}
modelViewProjectionMatrix =
  declareInitializedVariable "mat4" "modelViewProjectionMatrix"
    "projectionMatrix * modelViewMatrix"


{-| The normal matrix. Convenient to calculate surface normals.

    mat4 normalMatrix = transpose(inverse(modelViewMatrix));

-}
normalMatrix =
  declareInitializedVariable "mat4" "normalMatrix"
    "transpose(inverse(modelViewMatrix))"



{-| Set of useful variables for programming convenience.

Currently, the available useful variables are :

    mat4 modelViewMatrix;
    mat4 modelViewProjectionMatrix;
    mat4 normalMatrix;

-}
usefulVariables =
  modelViewMatrix           ++ newLine ++
  modelViewProjectionMatrix ++ newLine ++
  normalMatrix


{-| Details the common boilerplate shared in both vertex and fragment shaders.

-}
commonShaderBoilerplate : String
commonShaderBoilerplate =
  materialPropertyStructTypeDefinition ++ newLine ++ newLine ++
  materialStructTypeDefinition         ++ newLine ++ newLine ++
  lightStructTypeDefinition            ++ newLine ++ newLine ++
  uniformDeclarations                  ++ newLine ++ newLine ++
  setupLight                           ++ newLine ++ newLine ++
  setupMaterial                        ++ newLine ++ newLine ++
  libraryVariables                     ++ newLine ++ newLine ++
  libraryFunctions                     ++ newLine ++ newLine ++
  usefulVariables



{-| The boilerplate code found in the vertex shader.

-}
vertexShaderBoilerplate : String
vertexShaderBoilerplate =
  setFloatPrecision     ++ newLine ++ newLine ++
  attributeDeclarations ++ newLine ++ newLine ++
  commonShaderBoilerplate


{-| The boilerplate code found in the fragment shader.

-}
fragmentShaderBoilerplate : String
fragmentShaderBoilerplate =
  setFloatPrecision ++ newLine ++ newLine ++ commonShaderBoilerplate
