module Engine.Shader.Library where

{-| This module contains a set of strings that represent GLSL functions
that constitute a GLSL library to add common operations missing from
WebGL's version of GLSL.

# Definition
@docs Engine.Shader.Library

# Matrix Functions
@docs transposeFunction, determinantFunction, traceFunction, inverseFunction

-}

import Engine.Shader.Utils (newLine)

{-| GLSL Function that computes the transpose of a 2-dimensional matrix.

    // GLSL CODE:
    mat2 matrix = mat2(
      1.0, 2.0,
      3.0, 4.0
    );
    mat2 transposedMatrix = transpose(matrix);
    // transposedMatrix == mat2(
    //      1.0, 3.0,
    //      2.0, 4.0)

-}
mat2Transpose : String
mat2Transpose = """
mat2 transpose(mat2 matrix){
  return mat2(
    matrix[0][0], matrix[1][0],
    matrix[0][1], matrix[1][1]
  );
}
"""


{-| GLSL Function that computes the transpose of a 3-dimensional matrix.

    // GLSL CODE:
    mat3 matrix = mat3(
      1.0, 2.0, 3.0,
      4.0, 5.0, 6.0,
      7.0, 8.0, 9.0
    );
    mat3 transposedMatrix = transpose(matrix);
    // transposedMatrix == mat3(
    //      1.0, 4.0, 7.0,
    //      2.0, 5.0, 8.0,
    //      3.0, 6.0, 9.0)

-}
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


{-| GLSL Function that computes the transpose of a 4-dimensional matrix.

    // GLSL CODE:
    mat4 matrix = mat4(
        1.0,  2.0,  3.0,  4.0,
        5.0,  6.0,  7.0,  8.0,
        9.0,  10.0, 11.0, 12.0,
        13.0, 14.0, 15.0, 16.0
    );
    mat4 transposedMatrix = transpose(matrix);
    // transposedMatrix == mat4(
    //    1.0, 5.0, 9.0,  13.0,
    //    2.0, 6.0, 10.0, 14.0,
    //    3.0, 7.0, 11.0, 15.0,
    //    4.0, 8.0, 12.0, 16.0);

-}
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

{-| GLSL Function that computes the determinant of a 2-dimensional matrix

    // GLSL CODE:
    mat2 matrix = mat2(
      1.0, 3.0,
      2.0, 12.0
    );
    float matrixDeterminant = determinant(matrix);
    // matrixDeterminant == 6.0

-}
mat2Determinant : String
mat2Determinant = """
float determinant(mat2 matrix){
  return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
}
"""


{-| GLSL Function that computes the determinant of a 3-dimensional matrix

    // GLSL CODE:
    mat3 matrix = mat3(
      1.0, 0.0, 0.0,
      0.0, 4.0, 0.0,
      0.0, 0.0, 20.0
    );
    float matrixDeterminant = determinant(matrix);
    // matrixDeterminant == 80.0

-}
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


{-| GLSL Function that computes the determinant of a 4-dimensional matrix

    //GLSL CODE:
    mat4 matrix = matrix4(
      2.0, 0.0, 0.0, 0.0,
      3.0, 4.0, 0.0, 0.0,
      1.0, 5.0, 9.0, 0.0,
      0.0, 0.0, 4.0, 2.0
    );
    float matrixDeterminant = determinant(matrix);
    // matrixDeterminant == 72.0

-}
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

{-| GLSL Function that computes the trace of a 2-dimensional matrix

    // GLSL CODE:
    mat2 matrix = mat2(
      2.0, 3.0,
      5.0, 1.0
    );
    float matrixTrace = trace(matrix);
    // matrixTrace == 3.0

-}
mat2Trace : String
mat2Trace = """
float trace(mat2 matrix){
  return matrix[0][0] + matrix[1][1];
}
"""

{-| GLSL Function that computes the trace of a 3-dimensional matrix

    // GLSL CODE:
    mat3 matrix = mat3(
      3.0, 9.0, 1.0,
      6.0, 8.0, 0.0,
      1.0, 2.0, 1.0
    );
    float matrixTrace = trace(matrix);
    // matrixTrace == 12.0

-}
mat3Trace : String
mat3Trace = """
float trace(mat3 matrix){
  return matrix[0][0] + matrix[1][1] + matrix[2][2];
}
"""


{-| GLSL Function that computes the trace of a 4-dimensional matrix

    // GLSL CODE:
    mat4 matrix = mat4(
      2.0, 9.0, 9.0, 1.0,
      8.0, 7.0, 5.0, 1.0,
      1.0, 2.0, 3.0, 1.0,
      1.0, 2.0, 1.0, -12.0
    );
    float matrixTrace = trace(matrix);
    // matrixTrace == 0.0

-}
mat4Trace : String
mat4Trace = """
float trace(mat4 matrix){
  return matrix[0][0] + matrix[1][1] + matrix[2][2] + matrix[3][3];
}
"""


{-| GLSL 2-Dimensional Identity Matrix

    //GLSL CODE:

    //identity2 == mat2(
    //    1.0, 0.0,
    //    0.0, 1.0
    //);

-}
mat2Identity : String
mat2Identity = """
const mat2 identity2 = mat2(
  1.0, 0.0,
  0.0, 1.0
);
"""

{-| GLSL 3-Dimensional Identity Matrix

    //GLSL CODE:

    //identity3 == mat3(
    //    1.0, 0.0, 0.0,
    //    0.0, 1.0, 0.0,
    //    0.0, 0.0, 1.0
    //);

-}
mat3Identity : String
mat3Identity = """
const mat3 identity3 = mat3(
  1.0, 0.0, 0.0,
  0.0, 1.0, 0.0,
  0.0, 0.0, 1.0
);
"""

{-| GLSL 4-Dimensional Identity Matrix

    // GLSL CODE:

    //identity4 == mat4(
    //    1.0, 0.0, 0.0, 0.0,
    //    0.0, 1.0, 0.0, 0.0,
    //    0.0, 0.0, 1.0, 0.0,
    //    0.0, 0.0, 0.0, 1.0
    //);

-}
mat4Identity : String
mat4Identity = """
const mat4 identity4 = mat4(
  1.0, 0.0, 0.0, 0.0,
  0.0, 1.0, 0.0, 0.0,
  0.0, 0.0, 1.0, 0.0,
  0.0, 0.0, 0.0, 1.0
);
"""


{-| GLSL Function that computes the inverse of a 2-Dimensional matrix.

    The 2-Dimensional Matrix inverse function is implemented directly
    by computing the determinant and hardcoding the matrix scaled
    by the inverse of the determinant.

    // GLSL CODE:
    mat2 matrix = mat2(
      1.0, 2.0,
      3.0, 4.0
    );
    mat2 matrixInverse = inverse(matrix);
    //matrixInverse == mat2(
    //  -2.0, 1.0,
    //   1.5,-0.5
    //);

-}
mat2Inverse : String
mat2Inverse = """
mat2 inverse(mat2 matrix){
  return (1.0 / determinant(matrix)) * mat2(
    matrix[1][1], -matrix[0][1],
    -matrix[1][0], matrix[0][0]
);
}
"""

{-| GLSL Function that computes the inverse of a 3-Dimensional matrix.

    The 3-Dimensional Matrix inverse function is implemented using
    Cayley-Hamilton decomposition (mostly just for convenience).

    // GLSL CODE:
    mat3 matrix = mat3(
      1.0, 2.0, 3.0,
      0.0, 1.0, 4.0,
      5.0, 6.0, 0.0
    );
    mat3 matrixInverse = inverse(matrix);
    //matrixInverse == mat3(
    //  -24.0, 18.0, 5.0,
    //   20.0,-15.0,-4.0,
    //   -5.0,  4.0, 1.0
    //);

-}
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

{-| GLSL Function that computes the inverse of a 4-Dimensional matrix.

    The 4-Dimensional Matrix inverse function is implemented using
    Cayley-Hamilton decomposition (mostly just for convenience).

    //GLSL CODE:
    mat4 matrix = mat4(
      4.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 2.0, 0.0,
      0.0, 1.0, 2.0, 0.0,
      1.0, 0.0, 0.0, 1.0
    );
    mat4 matrixInverse = inverse(matrix);
    //matrixInverse == mat4(
    //  0.25 , 0.0, 0.0, 0.0,
    //  0.0  ,-1.0, 1.0, 0.0,
    //  0.0  , 0.5, 0.0, 0.0,
    //  -0.25, 0.0, 0.0, 1.0
    //);

-}
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

{-| GLSL Function to calculate the transpose of a 2,3 or 4-Dimensional matrix.

    The transpose of a matrix is simply the result of switching the rows
    and columns of the input matrix.

      transpose(mat2(1.0, 2.0, 3.0, 4.0)) == mat2(1.0, 3.0, 2.0, 4.0);

      transpose(transpose(matrix)) == matrix;
-}
transposeFunction : String
transposeFunction =
  mat2Transpose ++ newLine ++
  mat3Transpose ++ newLine ++
  mat4Transpose

{-| GLSL Function to calculate the transpose of a 2, 3, or 4-Dimensional matrix

    The determinant of a matrix represents the area of a parallelogram
    (in 2 dimensions), the volume of a parallelepiped (in 3 dimensions),
    or the hypervolume of a hyperrectangle.

    One of the most common uses of a determinant is as a crucial step in calculating
    the inverse of a matrix. The determiant can also be used as an efficient
    test for the invertability of a matrix. A matrix is invertible if and
    only if the determinant of the matrix is nonzero.

      determinant(mat2(1.0, 3.0, 2.0, 12.0)) == 6.0;

      determinant(identity4) == 1.0;
-}
determinantFunction : String
determinantFunction =
  mat2Determinant ++ newLine ++
  mat3Determinant ++ newLine ++
  mat4Determinant

{-| GLSL Function to calculate the trace of a 2, 3, or 4-Dimensional matrix.

    The trace of a matrix represents the derivative of the determinant
    (i.e. the infinitesimal change in area, volume, or hypervolume).

    One of the most common uses of the trace of a matrix is to compute an axis
    and angle from a rotation matrix.

      trace(mat2(1.0, 3.0, 2.0, 12.0)) == 12.0;

      trace(identity4) == 2.0

-}
traceFunction : String
traceFunction =
  mat2Trace ++ newLine ++
  mat3Trace ++ newLine ++
  mat4Trace

{-| GLSL Function to calculate the inverse of a 2, 3, or 4-Dimensional matrix.
    Note: This function does not test for invertability. So, buyer beware.

    The inverse of a matrix is basically like an undo matrix. A matrix
    multiplied by its inverse yields the identity matrix and thus undoing
    a matrix transformation on a vector is as simple as multiplying the
    transformed vector by the inverse of that matrix transformation.

    A common use case for the inverse of a matrix is to convert screen
    coordinates to world coordinates (by inverting modelViewProjectionMatrix).
    This is useful screen-to-world raycasting (i.e. clicking on a 3-d object).

      inverse(inverse(invertibleMatrix)) == invertibleMatrix;

      inverse(identity3) == identity3;

      inverse(projectionMatrix) * modelViewProjectionMatrix ==
        modelViewMatrix;
-}
inverseFunction : String
inverseFunction =
  mat2Inverse ++ newLine ++
  mat3Inverse ++ newLine ++
  mat4Inverse

{-| GLSL 2, 3, and 4 Identity Matrices

    The Identity Matrix is the matrix that maps a vector to itself.

        identity2 * vector2 == vector2;

        identity3 * vector3 == vector3;

        identity4 * modelMatrix == modelMatrix;

-}
identityMatrix : String
identityMatrix =
  mat2Identity ++ newLine ++
  mat3Identity ++ newLine ++
  mat4Identity


{-| GLSL Set of variables included in the library

      mat2 identity2;
      mat3 identity3;
      mat4 identity4;

-}
libraryVariables : String
libraryVariables =
  identityMatrix

{-| Set of functions included in the library

      mat2 transpose(mat2);
      mat3 transpose(mat3);
      mat4 transpose(mat4);

      float determinant(mat2);
      float determinant(mat3);
      float determinant(mat4);

      mat2 trace(mat2);
      mat3 trace(mat3);
      mat4 trace(mat4);

      mat2 inverse(mat2);
      mat3 inverse(mat3);
      mat4 inverse(mat4);
-}
libraryFunctions : String
libraryFunctions =
  transposeFunction   ++ newLine ++
  determinantFunction ++ newLine ++
  traceFunction       ++ newLine ++
  inverseFunction
