module Engine.Shader.Boilerplate where

import Engine.Shader.Utils (
  declareUniform,
  declareAttribute,
  groupStatements,
  setFloatPrecision,
  newLine,
  declareStructType,
  declareInitializedVariable,
  callFunctionExpression)

import List (intersperse, map)


materialPropertyStructTypeDefinition : String
materialPropertyStructTypeDefinition = declareStructType "MaterialProperty"
  [ ("vec3" , "color")    ,
    ("float", "strength") ]


materialStructTypeDefinition : String
materialStructTypeDefinition = declareStructType "Material"
  [ ("MaterialProperty", "emissive") ,
    ("MaterialProperty", "ambient")  ,
    ("MaterialProperty", "diffuse")  ,
    ("MaterialProperty", "specular") ]

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
lightStructTypeDefinition : String
lightStructTypeDefinition = declareStructType "Light"
  [ ("vec3" , "position")  ,
    ("vec3" , "rotation")  ,
    ("vec3" , "color")     ,
    ("float", "intensity") ]

-- TODO: Add support for visibility
setupLight : String
setupLight =
  let lightValue = callFunctionExpression "Light"
        [ "lightPosition"  ,
          "lightRotation"  ,
          "lightColor"     ,
          "lightIntensity" ]

  in declareInitializedVariable "Light" "light" lightValue

-- TODO : Add property lightVisibility : Bool
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


attributeDeclarations : String
attributeDeclarations = groupStatements <| map (uncurry declareAttribute)
  [ ("vec3", "position"),
    ("vec3", "normal")  ]

commonShaderBoilerplate : String
commonShaderBoilerplate =
  materialPropertyStructTypeDefinition ++ newLine ++ newLine ++
  materialStructTypeDefinition         ++ newLine ++ newLine ++
  lightStructTypeDefinition            ++ newLine ++ newLine ++
  uniformDeclarations                  ++ newLine ++ newLine ++
  setupLight                           ++ newLine ++ newLine ++
  setupMaterial


vertexShaderBoilerplate : String
vertexShaderBoilerplate =
  setFloatPrecision     ++ newLine ++ newLine ++
  attributeDeclarations ++ newLine ++ newLine ++
  commonShaderBoilerplate

fragmentShaderBoilerplate : String
fragmentShaderBoilerplate =
  setFloatPrecision ++ newLine ++ newLine ++ commonShaderBoilerplate
