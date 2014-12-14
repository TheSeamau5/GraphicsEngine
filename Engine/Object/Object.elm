module Engine.Object.Object where

type alias Object a = { a |
  guid : Int
}

object : Object {}
object = { guid = 0 }
