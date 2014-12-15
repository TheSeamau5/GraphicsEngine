module Engine.Viewport.Viewport where

{-| This module contains the definition for the Viewport type and the
default viewport object

# Definition
@docs Viewport

# Default Viewport
@docs viewport

-}



{-| A Viewport is an object that is supposed to describe the target "screen"
or "context" on to which a scene is rendered.

A Viewport has dimensions consisting of a width and a height.
-}
type alias Viewport = {
  dimensions : {
      width  : Float,
      height : Float
  }
}



{-| Default Viewport. Sets dimensions.width = 400 and dimensions.height = 400.
(In essence, with the default viewport object your scene will appear in
a 400 by 400 canvas or webgl context).
-}
viewport : Viewport
viewport = {
  dimensions = {
    width  = 400,
    height = 400 } }
