module Engine.Render.Render where

import WebGL (Entity, entity, webgl)
import Graphics.Element (Element)

import Engine.Object.Object (Object)
import Engine.Scene.Scene (Scene)
import Engine.Shader.Uniform (constructUniforms)
import Engine.Shader.Shader (constructVertexShader, constructFragmentShader)

import List (map)


renderObject : Scene -> Object a -> Entity
renderObject scene object =
  entity (constructVertexShader   object.material.vertexShader)
         (constructFragmentShader object.material.fragmentShader)
         object.mesh
         (constructUniforms scene object)

render : Scene -> Element
render scene =
  webgl (floor scene.viewport.dimensions.width, floor scene.viewport.dimensions.height) <|
    map (renderObject scene) scene.objects
