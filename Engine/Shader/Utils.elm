module Engine.Shader.Utils where

{-| This module contains useful values and functions for constructing
shaders. This includes common shorthands for statements and symbols as well
as methods to construct attributes, uniforms, structs, or functions.

# Useful Strings
@docs newLine, whiteSpace, tab, equalSign, comma, semiColon,
      openParenthesis, closeParenthesis, openCurlyBrace, closeCurlyBrace,
      commentStart, commentEnd, setFloatPrecision

# Useful Functions
@docs groupStrings, groupStatements, groupProperties

# Functions to construct GLSL statements
@docs declareVariable, declareInitializedVariable, declareConstVariable,
      declareParameter, declareAttribute, declareVarying, declareUniform,
      declareStructType, callFunctionExpression

-}

import String (join)
import List (map, intersperse)

{-| The new line string : "\n"
-}
newLine : String
newLine = "\n"


{-| The whitespace string : " "
-}
whiteSpace : String
whiteSpace = " "


{-| The tab string : "\t"
-}
tab : String
tab = "\t"

{-| The equal sign string : "="
-}
equalSign : String
equalSign = "="


{-| The comma string : ","
-}
comma : String
comma = ","


{-| The semicolon string : ";"
-}
semiColon : String
semiColon = ";"


{-| The open parenthesis string : "("
-}
openParenthesis : String
openParenthesis = "("


{-| The close parenthesis string : ")"
-}
closeParenthesis : String
closeParenthesis = ")"


{-| The open curly brace string : "{"
-}
openCurlyBrace : String
openCurlyBrace = "{"


{-| The close curly brace string : "}"
-}
closeCurlyBrace : String
closeCurlyBrace = "}"


{-| The GLSL multiline comment start string : "/*"
-}
commentStart : String
commentStart = "/*"


{-| The GLSL multiline comment end string : "*/"
-}
commentEnd : String
commentEnd = "*/"


{-| The string : "precision mediump float;"
-}
setFloatPrecision : String
setFloatPrecision = "precision mediump float;"


{-| Constructs a comment from a string

    comment "hello" == "/*\nhello\n*/"
-}
comment : String -> String
comment commentString =
  commentStart ++ newLine ++ commentString ++ newLine ++ commentEnd


{-| Groups a list of string into a single string

    groupString ["Hello", "World"] == "HelloWorld"
-}
groupStrings : List String -> String
groupStrings = join ""


{-| Groups a list of statements into a single string by interspersing
new lines.

    groupStatements ["x = 1;", "y = 2;"] == "x = 1;\ny = 2;"
-}
groupStatements : List String -> String
groupStatements = join "" << intersperse newLine


{-| Groups a list of properties into a single string by interspersing
new lines and tabs. (mainly used to construct GLSL struct definitions)

    groupProperties ["vec3 position;", "vec3 rotation;"] ==
      "vec3 position;\n\tvec3 rotation;"
-}
groupProperties : List String -> String
groupProperties = join "" << intersperse (newLine ++ tab)


{-| Function to construct a variable declaration in GLSL
with a given type and name

    declareVariable "vec3" "position" == "vec3 position;"
-}
declareVariable : String -> String -> String
declareVariable variableType variableName =
  variableType ++ whiteSpace ++ variableName ++ semiColon


{-| Function to construct an initialized variable in GLSL

    declareInitializedVariable "float" "x" "3.0" == "float x = 3.0;"
-}
declareInitializedVariable : String -> String -> String -> String
declareInitializedVariable variableType variableName initialValue =
  variableType ++ whiteSpace ++ variableName ++ whiteSpace ++ equalSign ++ whiteSpace ++ initialValue ++ semiColon


{-| Function to construct a const variable declaration in GLSL

    declareConstVariable "float" "x" "3.0" == "const float x = 3.0;"
-}
declareConstVariable : String -> String -> String -> String
declareConstVariable variableType variableName initialValue =
  "const" ++ whiteSpace ++ declareInitializedVariable variableType variableName initialValue


{-| Function to construct an input parameter declaration in GLSL

    declareParameter "uniform" "float" "border" == "uniform float border;"
-}
declareParameter : String -> String -> String -> String
declareParameter parameterType variableType variableName =
  parameterType ++ whiteSpace ++ variableType ++ whiteSpace ++ variableName ++ semiColon


{-| Function to construct an attribute parameter declaration in GLSL

    declareAttribute "vec3" "position" == "attribute vec3 position;"
-}
declareAttribute : String -> String -> String
declareAttribute = declareParameter "attribute"


{-| Function to construct a varying parameter declaration in GLSL

    declareVarying "vec3" "vPosition" == "varying vec3 vPosition;"
-}
declareVarying : String -> String -> String
declareVarying = declareParameter "varying"


{-| Function to construct a uniform parameter declaration in GLSL

    declareUniform "mat4" "modelMatrix" == "uniform mat4 modelMatrix;"
-}
declareUniform : String -> String -> String
declareUniform = declareParameter "uniform"


{-| Function to construct a struct type declaration in GLSL

    declareStructType "Point" [("float", "x"), ("float", "y")] ==
      "struct Point {\n\tfloat x;\n\tfloat y;\n};"
-}
declareStructType : String -> List (String, String) -> String
declareStructType structTypeName structProperties =
  let propertyToDeclaration (propertyType, propertyName) =
        declareVariable propertyType propertyName
      structBody =
        openCurlyBrace ++ newLine ++ tab ++
        (groupProperties <| map propertyToDeclaration structProperties) ++
        newLine ++ closeCurlyBrace
  in declareParameter "struct" structTypeName structBody



{-| Function to construct a function call expression in GLSL

    callFunctionExpression "add" ["x", "y"] == "add(x, y)"
-}
callFunctionExpression : String -> List String -> String
callFunctionExpression functionName parameterList =
  functionName ++ openParenthesis ++
  (groupStrings <| intersperse (comma ++ whiteSpace) parameterList) ++
  closeParenthesis
