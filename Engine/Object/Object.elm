module Engine.Object.Object where

{-| This module contains the definition of the Object type and the default
object object. An Object is an object with a guid property.

A guid, or globally unique identifier, is as the acronym suggests, a globally
unique identifier. A guid is used to single out an object and, given an
appropriate hashing mechanism, retrieve the object quickly.

Currently, this  property is unused and is here just because I felt bad to leave
the Object type empty.

By placing it here, I leave it open for future versions to implement
more involved data structures to represent scene graphs which could be
more efficient that the current list data structure.



# Definition
@docs Object

# Default Object

-}

{-| The Object type. Has a guid property. Currently, the guid property
is unused. The Object type is used to extend other types such as renderable.

-}
type alias Object a = { a |
  guid : Int
}

{-| The default object. Sets the guid to 0.

-}
object : Object {}
object = { guid = 0 }
