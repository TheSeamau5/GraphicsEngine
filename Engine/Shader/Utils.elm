module Engine.Shader.Utils where

import String (join)
import List (map, intersperse)

newLine : String
newLine = "\n"

whiteSpace : String
whiteSpace = " "

tab : String
tab = "  "

equalSign : String
equalSign = "="

comma : String
comma = ","

semiColon : String
semiColon = ";"

openParenthesis : String
openParenthesis = "("

closeParenthesis : String
closeParenthesis = ")"

openCurlyBrace : String
openCurlyBrace = "{"

closeCurlyBrace : String
closeCurlyBrace = "}"

commentStart : String
commentStart = "/*"

commentEnd : String
commentEnd = "*/"

setFloatPrecision : String
setFloatPrecision = "precision mediump float;"

comment : String -> String
comment commentString =
  commentStart ++ newLine ++ commentString ++ newLine ++ commentEnd

groupStrings : List String -> String
groupStrings = join ""

groupStatements : List String -> String
groupStatements = join "" << intersperse newLine

groupProperties : List String -> String
groupProperties = join "" << intersperse (newLine ++ tab)


declareVariable : String -> String -> String
declareVariable variableType variableName =
  variableType ++ whiteSpace ++ variableName ++ semiColon

declareInitializedVariable : String -> String -> String -> String
declareInitializedVariable variableType variableName initialValue =
  variableType ++ whiteSpace ++ variableName ++ whiteSpace ++ equalSign ++ whiteSpace ++ initialValue ++ semiColon

declareConstVariable variableType variableName initialValue =
  "const" ++ whiteSpace ++ declareInitializedVariable variableType variableName initialValue

declareParameter : String -> String -> String -> String
declareParameter parameterType variableType variableName =
  parameterType ++ whiteSpace ++ variableType ++ whiteSpace ++ variableName ++ semiColon

declareAttribute : String -> String -> String
declareAttribute = declareParameter "attribute"

declareVarying : String -> String -> String
declareVarying = declareParameter "varying"

declareUniform : String -> String -> String
declareUniform = declareParameter "uniform"

declareStructType : String -> List (String, String) -> String
declareStructType structTypeName structProperties =
  let propertyToDeclaration (propertyType, propertyName) =
        declareVariable propertyType propertyName
      structBody =
        openCurlyBrace ++ newLine ++ tab ++
        (groupProperties <| map propertyToDeclaration structProperties) ++
        newLine ++ closeCurlyBrace
  in declareParameter "struct" structTypeName structBody

callFunctionExpression : String -> List String -> String
callFunctionExpression functionName parameterList =
  functionName ++ openParenthesis ++
  (groupStrings <| intersperse (comma ++ whiteSpace) parameterList) ++
  closeParenthesis
