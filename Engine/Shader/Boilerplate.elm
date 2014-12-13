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
  [ ("vec3", "position")]


modelViewMatrix =
  declareInitializedVariable "mat4" "modelViewMatrix"
    "viewMatrix * modelMatrix"

modelViewProjectionMatrix =
  declareInitializedVariable "mat4" "modelViewProjectionMatrix"
    "projectionMatrix * modelViewMatrix"

normalMatrix =
  declareInitializedVariable "mat4" "normalMatrix"
    "transpose(inverse(modelViewMatrix))"


mat2Transpose = """
mat2 transpose(mat2 matrix){
  return mat2(
    matrix[0][0], matrix[1][0],
    matrix[0][1], matrix[1][1]
  );
}
"""

mat3Transpose = """
mat3 transpose(mat3 matrix){
  return mat3(
    matrix[0][0], matrix[1][0], matrix[2][0],
    matrix[0][1], matrix[1][1], matrix[2][1],
    matrix[0][2], matrix[1][2], matrix[2][2]
  );
}
"""

mat4Transpose = """
mat4 transpose(mat4 matrix){
  return mat4(
    matrix[0][0], matrix[1][0], matrix[2][0], matrix[3][0],
    matrix[0][1], matrix[1][1], matrix[2][1], matrix[3][1],
    matrix[0][2], matrix[1][2], matrix[2][2], matrix[3][2],
    matrix[0][3], matrix[1][3], matrix[2][3], matrix[3][3]
  );
}
"""

mat2Determinant = """
float determinant(mat2 matrix){
  return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
}
"""

mat3Determinant = """
float determinant(mat3 matrix){
  return (
    matrix[0][0] * determinant(mat2(matrix[1][1], matrix[1][2], matrix[2][1], matrix[2][2])) -
    matrix[0][1] * determinant(mat2(matrix[1][0], matrix[1][2], matrix[2][0], matrix[2][2])) +
    matrix[0][2] * determinant(mat2(matrix[1][0], matrix[1][1], matrix[2][0], matrix[2][1]))
  );
}
"""

mat4Determinant = """
float determinant(mat4 matrix){
  return (
    matrix[0][0] * determinant(mat3(
      matrix[1][1], matrix[1][2], matrix[1][3],
      matrix[2][1], matrix[2][2], matrix[2][3],
      matrix[3][1], matrix[3][2], matrix[3][3]
    )) -
    matrix[0][1] * determinant(mat3(
      matrix[1][0], matrix[1][2], matrix[1][3],
      matrix[2][0], matrix[2][2], matrix[2][3],
      matrix[3][0], matrix[3][2], matrix[3][3]
    )) +
    matrix[0][2] * determinant(mat3(
      matrix[1][0], matrix[1][1], matrix[1][3],
      matrix[2][0], matrix[2][1], matrix[2][3],
      matrix[3][0], matrix[3][1], matrix[3][3]
    )) -
    matrix[0][3] * determinant(mat3(
      matrix[1][0], matrix[1][1], matrix[1][2],
      matrix[2][0], matrix[2][1], matrix[2][2],
      matrix[3][0], matrix[3][1], matrix[3][2]
    ))
  );
}
"""

mat2Trace = """
float trace(mat2 matrix){
  return matrix[0][0] + matrix[1][1];
}
"""

mat3Trace = """
float trace(mat3 matrix){
  return matrix[0][0] + matrix[1][1] + matrix[2][2];
}
"""

mat4Trace = """
float trace(mat4 matrix){
  return matrix[0][0] + matrix[1][1] + matrix[2][2] + matrix[3][3];
}
"""

mat2Identity = """
const mat2 identity2 = mat2(
  1.0, 0.0,
  0.0, 1.0
);
"""

mat3Identity = """
const mat3 identity3 = mat3(
  1.0, 0.0, 0.0,
  0.0, 1.0, 0.0,
  0.0, 0.0, 1.0
);
"""

mat4Identity = """
const mat4 identity4 = mat4(
  1.0, 0.0, 0.0, 0.0,
  0.0, 1.0, 0.0, 0.0,
  0.0, 0.0, 1.0, 0.0,
  0.0, 0.0, 0.0, 1.0
);
"""


mat2Inverse = """
mat2 inverse(mat2 matrix){
  return (1.0 / determinant(matrix)) * mat2(
    matrix[1][1], -matrix[0][1],
    -matrix[1][0], matrix[0][0]
  );
}
"""

-- Uses Cayley-Hamilton decomposition (mostly for a concise representation)
mat3Inverse = """
mat3 inverse(mat3 matrix){
  return (1.0 / determinant(matrix)) * (
    0.5 * (pow(trace(matrix), 2.0) - trace(matrix * matrix)) * identity3 -
    matrix * trace(matrix) +
    matrix * matrix
  );
}
"""

-- Uses Cayley-Hamilton decomposition (mostly for a concise representation)
mat4Inverse = """
mat4 inverse(mat4 matrix){
  return (1.0 / determinant(matrix)) * (
    (1.0 / 6.0) * (pow(trace(matrix), 3.0) - 3.0 * trace(matrix) * trace(matrix * matrix) * identity4) -
    0.5 * (pow(trace(matrix), 2.0) - trace(matrix * matrix)) +
    matrix * matrix * trace(matrix) - matrix * matrix * matrix
  );
}
"""

transposeFunction =
  mat2Transpose ++ newLine ++
  mat3Transpose ++ newLine ++
  mat4Transpose

determinantFunction =
  mat2Determinant ++ newLine ++
  mat3Determinant ++ newLine ++
  mat4Determinant

traceFunction =
  mat2Trace ++ newLine ++
  mat3Trace ++ newLine ++
  mat4Trace

inverseFunction =
  mat2Inverse ++ newLine ++
  mat3Inverse ++ newLine ++
  mat4Inverse

identityMatrix =
  mat2Identity ++ newLine ++
  mat3Identity ++ newLine ++
  mat4Identity

libraryVariables =
  identityMatrix

libraryFunctions =
  transposeFunction   ++ newLine ++
  determinantFunction ++ newLine ++
  traceFunction       ++ newLine ++
  inverseFunction

usefulVariables =
  modelViewMatrix           ++ newLine ++
  modelViewProjectionMatrix ++ newLine ++
  normalMatrix


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


vertexShaderBoilerplate : String
vertexShaderBoilerplate =
  setFloatPrecision     ++ newLine ++ newLine ++
  attributeDeclarations ++ newLine ++ newLine ++
  commonShaderBoilerplate

fragmentShaderBoilerplate : String
fragmentShaderBoilerplate =
  setFloatPrecision ++ newLine ++ newLine ++ commonShaderBoilerplate
