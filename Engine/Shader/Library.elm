module Engine.Shader.Library where

mat2Transpose : String
mat2Transpose = """
mat2 transpose(mat2 matrix){
  return mat2(
    matrix[0][0], matrix[1][0],
    matrix[0][1], matrix[1][1]
  );
}
"""

mat3Transpose : String
mat3Transpose = """
mat3 transpose(mat3 matrix){
  return mat3(
    matrix[0][0], matrix[1][0], matrix[2][0],
    matrix[0][1], matrix[1][1], matrix[2][1],
    matrix[0][2], matrix[1][2], matrix[2][2]
  );
}
"""

mat4Transpose : String
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

mat2Determinant : String
mat2Determinant = """
float determinant(mat2 matrix){
  return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
}
"""

mat3Determinant : String
mat3Determinant = """
float determinant(mat3 matrix){
  return (
    matrix[0][0] * determinant(mat2(
      matrix[1][1], matrix[1][2],
      matrix[2][1], matrix[2][2]
    )) -
    matrix[0][1] * determinant(mat2(
      matrix[1][0], matrix[1][2],
      matrix[2][0], matrix[2][2]
    )) +
    matrix[0][2] * determinant(mat2(
      matrix[1][0], matrix[1][1],
      matrix[2][0], matrix[2][1]))
  );
}
"""

mat4Determinant : String
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

mat2Trace : String
mat2Trace = """
float trace(mat2 matrix){
  return matrix[0][0] + matrix[1][1];
}
"""

mat3Trace : String
mat3Trace = """
float trace(mat3 matrix){
  return matrix[0][0] + matrix[1][1] + matrix[2][2];
}
"""

mat4Trace : String
mat4Trace = """
float trace(mat4 matrix){
  return matrix[0][0] + matrix[1][1] + matrix[2][2] + matrix[3][3];
}
"""

mat2Identity : String
mat2Identity = """
const mat2 identity2 = mat2(
  1.0, 0.0,
  0.0, 1.0
);
"""

mat3Identity : String
mat3Identity = """
const mat3 identity3 = mat3(
  1.0, 0.0, 0.0,
  0.0, 1.0, 0.0,
  0.0, 0.0, 1.0
);
"""

mat4Identity : String
mat4Identity = """
const mat4 identity4 = mat4(
  1.0, 0.0, 0.0, 0.0,
  0.0, 1.0, 0.0, 0.0,
  0.0, 0.0, 1.0, 0.0,
  0.0, 0.0, 0.0, 1.0
);
"""

mat2Inverse : String
mat2Inverse = """
mat2 inverse(mat2 matrix){
  return (1.0 / determinant(matrix)) * mat2(
    matrix[1][1], -matrix[0][1],
    -matrix[1][0], matrix[0][0]
);
}
"""

-- Uses Cayley-Hamilton decomposition (mostly for a concise representation)
mat3Inverse : String
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
mat4Inverse : String
mat4Inverse = """
mat4 inverse(mat4 matrix){
  return (1.0 / determinant(matrix)) * (
         (1.0 / 6.0) * (pow(trace(matrix), 3.0) - 3.0 * trace(matrix) * trace(matrix * matrix) * identity4) -
         0.5 * (pow(trace(matrix), 2.0) - trace(matrix * matrix)) +
         matrix * matrix * trace(matrix) - matrix * matrix * matrix
  );
}
"""

transposeFunction : String
transposeFunction =
  mat2Transpose ++ newLine ++
  mat3Transpose ++ newLine ++
  mat4Transpose

determinantFunction : String
determinantFunction =
  mat2Determinant ++ newLine ++
  mat3Determinant ++ newLine ++
  mat4Determinant

traceFunction : String
traceFunction =
  mat2Trace ++ newLine ++
  mat3Trace ++ newLine ++
  mat4Trace

inverseFunction : String
inverseFunction =
  mat2Inverse ++ newLine ++
  mat3Inverse ++ newLine ++
  mat4Inverse

identityMatrix : String
identityMatrix =
  mat2Identity ++ newLine ++
  mat3Identity ++ newLine ++
  mat4Identity

libraryVariables : String
libraryVariables =
  identityMatrix

libraryFunctions : String
libraryFunctions =
  transposeFunction   ++ newLine ++
  determinantFunction ++ newLine ++
  traceFunction       ++ newLine ++
  inverseFunction
