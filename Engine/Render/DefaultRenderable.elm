module Engine.Render.DefaultRenderable where

{-| This module contains the definition for the default Renderable renderable.
This definition is separated from the Renderable module in order to avoid
circular dependencies.


# Default Renderable
@docs renderable

-}

import Engine.Render.Renderable (Renderable)
import Engine.Mesh.Cube (cube)

{-| Default renderable object. Alias for the default cube object.

-}
renderable : Renderable
renderable = cube
