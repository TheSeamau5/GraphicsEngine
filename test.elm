import Engine (..)
import Engine.Material.Material (MaterialProperty)
import Math.Vector3 (vec3)
import Engine.Shader.GouraudShader (gouraudShader)

myObject =
  let gouraudMaterial = {
        material | fragmentShader <- gouraudShader,
                   emissive <- MaterialProperty (vec3 0 0 1) 0.7,
                   ambient  <- MaterialProperty (vec3 1 1 1) 0.3,
                   diffuse  <- MaterialProperty (vec3 1 1 1) 0.5,
                   specular <- MaterialProperty (vec3 1 1 1) 0.8 }
  in { sphere | material <- gouraudMaterial }


myCamera = {
  camera | position <- vec3 -1.7 1.7 -3,
           rotation <- vec3 0.4 0.5 0 }

myLight = {
  light | position <- vec3 -3 5 -4 }

myScene = {
  scene | objects <- [myObject],
          camera <- myCamera,
          light <- myLight }

main = render myScene
