var Elm = Elm || { Native: {} };
Elm.Basics = Elm.Basics || {};
Elm.Basics.make = function (_elm) {
   "use strict";
   _elm.Basics = _elm.Basics || {};
   if (_elm.Basics.values)
   return _elm.Basics.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Basics",
   $Native$Basics = Elm.Native.Basics.make(_elm),
   $Native$Show = Elm.Native.Show.make(_elm),
   $Native$Utils = Elm.Native.Utils.make(_elm);
   var uncurry = F2(function (f,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2": return A2(f,
              _v0._0,
              _v0._1);}
         _U.badCase($moduleName,
         "on line 458, column 19 to 24");
      }();
   });
   var curry = F3(function (f,
   a,
   b) {
      return f({ctor: "_Tuple2"
               ,_0: a
               ,_1: b});
   });
   var flip = F3(function (f,b,a) {
      return A2(f,a,b);
   });
   var snd = function (_v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2": return _v4._1;}
         _U.badCase($moduleName,
         "on line 442, column 13 to 14");
      }();
   };
   var fst = function (_v8) {
      return function () {
         switch (_v8.ctor)
         {case "_Tuple2": return _v8._0;}
         _U.badCase($moduleName,
         "on line 438, column 13 to 14");
      }();
   };
   var always = F2(function (a,
   _v12) {
      return function () {
         return a;
      }();
   });
   var identity = function (x) {
      return x;
   };
   _op["<|"] = F2(function (f,x) {
      return f(x);
   });
   _op["|>"] = F2(function (x,f) {
      return f(x);
   });
   _op[">>"] = F3(function (f,
   g,
   x) {
      return g(f(x));
   });
   _op["<<"] = F3(function (g,
   f,
   x) {
      return g(f(x));
   });
   _op["++"] = $Native$Utils.append;
   var toString = $Native$Show.toString;
   var isInfinite = $Native$Basics.isInfinite;
   var isNaN = $Native$Basics.isNaN;
   var toFloat = $Native$Basics.toFloat;
   var ceiling = $Native$Basics.ceiling;
   var floor = $Native$Basics.floor;
   var truncate = $Native$Basics.truncate;
   var round = $Native$Basics.round;
   var otherwise = true;
   var not = $Native$Basics.not;
   var xor = $Native$Basics.xor;
   _op["||"] = $Native$Basics.or;
   _op["&&"] = $Native$Basics.and;
   var max = $Native$Basics.max;
   var min = $Native$Basics.min;
   var GT = {ctor: "GT"};
   var EQ = {ctor: "EQ"};
   var LT = {ctor: "LT"};
   var compare = $Native$Basics.compare;
   _op[">="] = $Native$Basics.ge;
   _op["<="] = $Native$Basics.le;
   _op[">"] = $Native$Basics.gt;
   _op["<"] = $Native$Basics.lt;
   _op["/="] = $Native$Basics.neq;
   _op["=="] = $Native$Basics.eq;
   var e = $Native$Basics.e;
   var pi = $Native$Basics.pi;
   var clamp = $Native$Basics.clamp;
   var logBase = $Native$Basics.logBase;
   var abs = $Native$Basics.abs;
   var negate = $Native$Basics.negate;
   var sqrt = $Native$Basics.sqrt;
   var atan2 = $Native$Basics.atan2;
   var atan = $Native$Basics.atan;
   var asin = $Native$Basics.asin;
   var acos = $Native$Basics.acos;
   var tan = $Native$Basics.tan;
   var sin = $Native$Basics.sin;
   var cos = $Native$Basics.cos;
   _op["^"] = $Native$Basics.exp;
   _op["%"] = $Native$Basics.mod;
   var rem = $Native$Basics.rem;
   _op["//"] = $Native$Basics.div;
   _op["/"] = $Native$Basics.floatDiv;
   _op["*"] = $Native$Basics.mul;
   _op["-"] = $Native$Basics.sub;
   _op["+"] = $Native$Basics.add;
   var toPolar = $Native$Basics.toPolar;
   var fromPolar = $Native$Basics.fromPolar;
   var turns = $Native$Basics.turns;
   var degrees = $Native$Basics.degrees;
   var radians = function (t) {
      return t;
   };
   _elm.Basics.values = {_op: _op
                        ,radians: radians
                        ,degrees: degrees
                        ,turns: turns
                        ,fromPolar: fromPolar
                        ,toPolar: toPolar
                        ,rem: rem
                        ,cos: cos
                        ,sin: sin
                        ,tan: tan
                        ,acos: acos
                        ,asin: asin
                        ,atan: atan
                        ,atan2: atan2
                        ,sqrt: sqrt
                        ,negate: negate
                        ,abs: abs
                        ,logBase: logBase
                        ,clamp: clamp
                        ,pi: pi
                        ,e: e
                        ,compare: compare
                        ,LT: LT
                        ,EQ: EQ
                        ,GT: GT
                        ,min: min
                        ,max: max
                        ,xor: xor
                        ,not: not
                        ,otherwise: otherwise
                        ,round: round
                        ,truncate: truncate
                        ,floor: floor
                        ,ceiling: ceiling
                        ,toFloat: toFloat
                        ,isNaN: isNaN
                        ,isInfinite: isInfinite
                        ,toString: toString
                        ,identity: identity
                        ,always: always
                        ,fst: fst
                        ,snd: snd
                        ,flip: flip
                        ,curry: curry
                        ,uncurry: uncurry};
   return _elm.Basics.values;
};
Elm.Char = Elm.Char || {};
Elm.Char.make = function (_elm) {
   "use strict";
   _elm.Char = _elm.Char || {};
   if (_elm.Char.values)
   return _elm.Char.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Char",
   $Native$Char = Elm.Native.Char.make(_elm);
   var fromCode = $Native$Char.fromCode;
   var toCode = $Native$Char.toCode;
   var toLocaleLower = $Native$Char.toLocaleLower;
   var toLocaleUpper = $Native$Char.toLocaleUpper;
   var toLower = $Native$Char.toLower;
   var toUpper = $Native$Char.toUpper;
   var isHexDigit = $Native$Char.isHexDigit;
   var isOctDigit = $Native$Char.isOctDigit;
   var isDigit = $Native$Char.isDigit;
   var isLower = $Native$Char.isLower;
   var isUpper = $Native$Char.isUpper;
   _elm.Char.values = {_op: _op
                      ,isUpper: isUpper
                      ,isLower: isLower
                      ,isDigit: isDigit
                      ,isOctDigit: isOctDigit
                      ,isHexDigit: isHexDigit
                      ,toUpper: toUpper
                      ,toLower: toLower
                      ,toLocaleUpper: toLocaleUpper
                      ,toLocaleLower: toLocaleLower
                      ,toCode: toCode
                      ,fromCode: fromCode};
   return _elm.Char.values;
};
Elm.Color = Elm.Color || {};
Elm.Color.make = function (_elm) {
   "use strict";
   _elm.Color = _elm.Color || {};
   if (_elm.Color.values)
   return _elm.Color.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Color",
   $Basics = Elm.Basics.make(_elm);
   var Radial = F5(function (a,
   b,
   c,
   d,
   e) {
      return {ctor: "Radial"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d
             ,_4: e};
   });
   var radial = Radial;
   var Linear = F3(function (a,
   b,
   c) {
      return {ctor: "Linear"
             ,_0: a
             ,_1: b
             ,_2: c};
   });
   var linear = Linear;
   var fmod = F2(function (f,n) {
      return function () {
         var integer = $Basics.floor(f);
         return $Basics.toFloat(A2($Basics._op["%"],
         integer,
         n)) + f - $Basics.toFloat(integer);
      }();
   });
   var rgbToHsl = F3(function (red,
   green,
   blue) {
      return function () {
         var b = $Basics.toFloat(blue) / 255;
         var g = $Basics.toFloat(green) / 255;
         var r = $Basics.toFloat(red) / 255;
         var cMax = A2($Basics.max,
         A2($Basics.max,r,g),
         b);
         var cMin = A2($Basics.min,
         A2($Basics.min,r,g),
         b);
         var c = cMax - cMin;
         var lightness = (cMax + cMin) / 2;
         var saturation = _U.eq(lightness,
         0) ? 0 : c / (1 - $Basics.abs(2 * lightness - 1));
         var hue = $Basics.degrees(60) * (_U.eq(cMax,
         r) ? A2(fmod,
         (g - b) / c,
         6) : _U.eq(cMax,
         g) ? (b - r) / c + 2 : _U.eq(cMax,
         b) ? (r - g) / c + 4 : _U.badIf($moduleName,
         "between lines 141 and 143"));
         return {ctor: "_Tuple3"
                ,_0: hue
                ,_1: saturation
                ,_2: lightness};
      }();
   });
   var hslToRgb = F3(function (hue,
   saturation,
   lightness) {
      return function () {
         var hue$ = hue / $Basics.degrees(60);
         var chroma = (1 - $Basics.abs(2 * lightness - 1)) * saturation;
         var x = chroma * (1 - $Basics.abs(A2(fmod,
         hue$,
         2) - 1));
         var $ = _U.cmp(hue$,
         0) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: 0
                  ,_2: 0} : _U.cmp(hue$,
         1) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: x
                  ,_2: 0} : _U.cmp(hue$,
         2) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: chroma
                  ,_2: 0} : _U.cmp(hue$,
         3) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: chroma
                  ,_2: x} : _U.cmp(hue$,
         4) < 0 ? {ctor: "_Tuple3"
                  ,_0: 0
                  ,_1: x
                  ,_2: chroma} : _U.cmp(hue$,
         5) < 0 ? {ctor: "_Tuple3"
                  ,_0: x
                  ,_1: 0
                  ,_2: chroma} : _U.cmp(hue$,
         6) < 0 ? {ctor: "_Tuple3"
                  ,_0: chroma
                  ,_1: 0
                  ,_2: x} : {ctor: "_Tuple3"
                            ,_0: 0
                            ,_1: 0
                            ,_2: 0},
         r = $._0,
         g = $._1,
         b = $._2;
         var m = lightness - chroma / 2;
         return {ctor: "_Tuple3"
                ,_0: r + m
                ,_1: g + m
                ,_2: b + m};
      }();
   });
   var toRgb = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA":
            return function () {
                 var $ = A3(hslToRgb,
                 color._0,
                 color._1,
                 color._2),
                 r = $._0,
                 g = $._1,
                 b = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,blue: $Basics.round(255 * b)
                        ,green: $Basics.round(255 * g)
                        ,red: $Basics.round(255 * r)};
              }();
            case "RGBA": return {_: {}
                                ,alpha: color._3
                                ,blue: color._2
                                ,green: color._1
                                ,red: color._0};}
         _U.badCase($moduleName,
         "between lines 115 and 123");
      }();
   };
   var toHsl = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return {_: {}
                              ,alpha: color._3
                              ,hue: color._0
                              ,lightness: color._2
                              ,saturation: color._1};
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return {_: {}
                        ,alpha: color._3
                        ,hue: h
                        ,lightness: l
                        ,saturation: s};
              }();}
         _U.badCase($moduleName,
         "between lines 105 and 112");
      }();
   };
   var HSLA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "HSLA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var hsla = F4(function (hue,
   saturation,
   lightness,
   alpha) {
      return A4(HSLA,
      hue - $Basics.turns($Basics.toFloat($Basics.floor(hue / (2 * $Basics.pi)))),
      saturation,
      lightness,
      alpha);
   });
   var hsl = F3(function (hue,
   saturation,
   lightness) {
      return A4(hsla,
      hue,
      saturation,
      lightness,
      1);
   });
   var complement = function (color) {
      return function () {
         switch (color.ctor)
         {case "HSLA": return A4(hsla,
              color._0 + $Basics.degrees(180),
              color._1,
              color._2,
              color._3);
            case "RGBA":
            return function () {
                 var $ = A3(rgbToHsl,
                 color._0,
                 color._1,
                 color._2),
                 h = $._0,
                 s = $._1,
                 l = $._2;
                 return A4(hsla,
                 h + $Basics.degrees(180),
                 s,
                 l,
                 color._3);
              }();}
         _U.badCase($moduleName,
         "between lines 96 and 102");
      }();
   };
   var grayscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var greyscale = function (p) {
      return A4(HSLA,0,0,1 - p,1);
   };
   var RGBA = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "RGBA"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var rgba = RGBA;
   var rgb = F3(function (r,g,b) {
      return A4(RGBA,r,g,b,1);
   });
   var lightRed = A4(RGBA,
   239,
   41,
   41,
   1);
   var red = A4(RGBA,204,0,0,1);
   var darkRed = A4(RGBA,
   164,
   0,
   0,
   1);
   var lightOrange = A4(RGBA,
   252,
   175,
   62,
   1);
   var orange = A4(RGBA,
   245,
   121,
   0,
   1);
   var darkOrange = A4(RGBA,
   206,
   92,
   0,
   1);
   var lightYellow = A4(RGBA,
   255,
   233,
   79,
   1);
   var yellow = A4(RGBA,
   237,
   212,
   0,
   1);
   var darkYellow = A4(RGBA,
   196,
   160,
   0,
   1);
   var lightGreen = A4(RGBA,
   138,
   226,
   52,
   1);
   var green = A4(RGBA,
   115,
   210,
   22,
   1);
   var darkGreen = A4(RGBA,
   78,
   154,
   6,
   1);
   var lightBlue = A4(RGBA,
   114,
   159,
   207,
   1);
   var blue = A4(RGBA,
   52,
   101,
   164,
   1);
   var darkBlue = A4(RGBA,
   32,
   74,
   135,
   1);
   var lightPurple = A4(RGBA,
   173,
   127,
   168,
   1);
   var purple = A4(RGBA,
   117,
   80,
   123,
   1);
   var darkPurple = A4(RGBA,
   92,
   53,
   102,
   1);
   var lightBrown = A4(RGBA,
   233,
   185,
   110,
   1);
   var brown = A4(RGBA,
   193,
   125,
   17,
   1);
   var darkBrown = A4(RGBA,
   143,
   89,
   2,
   1);
   var black = A4(RGBA,0,0,0,1);
   var white = A4(RGBA,
   255,
   255,
   255,
   1);
   var lightGrey = A4(RGBA,
   238,
   238,
   236,
   1);
   var grey = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGrey = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightGray = A4(RGBA,
   238,
   238,
   236,
   1);
   var gray = A4(RGBA,
   211,
   215,
   207,
   1);
   var darkGray = A4(RGBA,
   186,
   189,
   182,
   1);
   var lightCharcoal = A4(RGBA,
   136,
   138,
   133,
   1);
   var charcoal = A4(RGBA,
   85,
   87,
   83,
   1);
   var darkCharcoal = A4(RGBA,
   46,
   52,
   54,
   1);
   _elm.Color.values = {_op: _op
                       ,RGBA: RGBA
                       ,HSLA: HSLA
                       ,rgba: rgba
                       ,rgb: rgb
                       ,hsla: hsla
                       ,hsl: hsl
                       ,grayscale: grayscale
                       ,greyscale: greyscale
                       ,complement: complement
                       ,toHsl: toHsl
                       ,toRgb: toRgb
                       ,fmod: fmod
                       ,rgbToHsl: rgbToHsl
                       ,hslToRgb: hslToRgb
                       ,Linear: Linear
                       ,Radial: Radial
                       ,linear: linear
                       ,radial: radial
                       ,lightRed: lightRed
                       ,red: red
                       ,darkRed: darkRed
                       ,lightOrange: lightOrange
                       ,orange: orange
                       ,darkOrange: darkOrange
                       ,lightYellow: lightYellow
                       ,yellow: yellow
                       ,darkYellow: darkYellow
                       ,lightGreen: lightGreen
                       ,green: green
                       ,darkGreen: darkGreen
                       ,lightBlue: lightBlue
                       ,blue: blue
                       ,darkBlue: darkBlue
                       ,lightPurple: lightPurple
                       ,purple: purple
                       ,darkPurple: darkPurple
                       ,lightBrown: lightBrown
                       ,brown: brown
                       ,darkBrown: darkBrown
                       ,black: black
                       ,white: white
                       ,lightGrey: lightGrey
                       ,grey: grey
                       ,darkGrey: darkGrey
                       ,lightGray: lightGray
                       ,gray: gray
                       ,darkGray: darkGray
                       ,lightCharcoal: lightCharcoal
                       ,charcoal: charcoal
                       ,darkCharcoal: darkCharcoal};
   return _elm.Color.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   if (_elm.Engine.values)
   return _elm.Engine.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine",
   $Engine$Camera$Camera = Elm.Engine.Camera.Camera.make(_elm),
   $Engine$Light$Light = Elm.Engine.Light.Light.make(_elm),
   $Engine$Material$Material = Elm.Engine.Material.Material.make(_elm),
   $Engine$Mesh$Cube = Elm.Engine.Mesh.Cube.make(_elm),
   $Engine$Mesh$Mesh = Elm.Engine.Mesh.Mesh.make(_elm),
   $Engine$Mesh$Pyramid = Elm.Engine.Mesh.Pyramid.make(_elm),
   $Engine$Mesh$Rectangle = Elm.Engine.Mesh.Rectangle.make(_elm),
   $Engine$Mesh$Triangle = Elm.Engine.Mesh.Triangle.make(_elm),
   $Engine$Object$DefaultObject = Elm.Engine.Object.DefaultObject.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Engine$Render$Render = Elm.Engine.Render.Render.make(_elm),
   $Engine$Scene$Scene = Elm.Engine.Scene.Scene.make(_elm),
   $Engine$Shader$Attribute = Elm.Engine.Shader.Attribute.make(_elm),
   $Engine$Shader$Uniform = Elm.Engine.Shader.Uniform.make(_elm);
   var render = $Engine$Render$Render.render;
   var object = $Engine$Object$DefaultObject.object;
   var pyramidMesh = $Engine$Mesh$Pyramid.pyramidMesh;
   var pyramid = $Engine$Mesh$Pyramid.pyramid;
   var cubeMesh = $Engine$Mesh$Cube.cubeMesh;
   var cube = $Engine$Mesh$Cube.cube;
   var rectangleMesh = $Engine$Mesh$Rectangle.rectangleMesh;
   var rectangle = $Engine$Mesh$Rectangle.rectangle;
   var triangleMesh = $Engine$Mesh$Triangle.triangleMesh;
   var triangle = $Engine$Mesh$Triangle.triangle;
   var material = $Engine$Material$Material.material;
   var light = $Engine$Light$Light.light;
   var camera = $Engine$Camera$Camera.camera;
   var scene = $Engine$Scene$Scene.scene;
   _elm.Engine.values = {_op: _op
                        ,scene: scene
                        ,camera: camera
                        ,light: light
                        ,material: material
                        ,triangle: triangle
                        ,triangleMesh: triangleMesh
                        ,rectangle: rectangle
                        ,rectangleMesh: rectangleMesh
                        ,cube: cube
                        ,cubeMesh: cubeMesh
                        ,pyramid: pyramid
                        ,pyramidMesh: pyramidMesh
                        ,object: object
                        ,render: render};
   return _elm.Engine.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Camera = Elm.Engine.Camera || {};
Elm.Engine.Camera.Camera = Elm.Engine.Camera.Camera || {};
Elm.Engine.Camera.Camera.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Camera = _elm.Engine.Camera || {};
   _elm.Engine.Camera.Camera = _elm.Engine.Camera.Camera || {};
   if (_elm.Engine.Camera.Camera.values)
   return _elm.Engine.Camera.Camera.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Camera.Camera",
   $Engine$Object$DefaultObject = Elm.Engine.Object.DefaultObject.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var camera = A6($Engine$Object$Object.Object,
   $Engine$Object$DefaultObject.object.mesh,
   $Engine$Object$DefaultObject.object.material,
   A3($Math$Vector3.vec3,0,0,-10),
   $Engine$Object$DefaultObject.object.rotation,
   $Engine$Object$DefaultObject.object.scale,
   {_: {}
   ,aspectRatio: 1
   ,farClipping: 80000
   ,fieldOfView: 45
   ,nearClipping: 1});
   _elm.Engine.Camera.Camera.values = {_op: _op
                                      ,camera: camera};
   return _elm.Engine.Camera.Camera.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Light = Elm.Engine.Light || {};
Elm.Engine.Light.Light = Elm.Engine.Light.Light || {};
Elm.Engine.Light.Light.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Light = _elm.Engine.Light || {};
   _elm.Engine.Light.Light = _elm.Engine.Light.Light || {};
   if (_elm.Engine.Light.Light.values)
   return _elm.Engine.Light.Light.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Light.Light",
   $Engine$Object$DefaultObject = Elm.Engine.Object.DefaultObject.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var light = A6($Engine$Object$Object.Object,
   $Engine$Object$DefaultObject.object.mesh,
   $Engine$Object$DefaultObject.object.material,
   A3($Math$Vector3.vec3,1,1,3),
   $Engine$Object$DefaultObject.object.rotation,
   $Engine$Object$DefaultObject.object.scale,
   {_: {}
   ,color: A3($Math$Vector3.vec3,
   1,
   1,
   1)
   ,intensity: 1
   ,visibility: true});
   _elm.Engine.Light.Light.values = {_op: _op
                                    ,light: light};
   return _elm.Engine.Light.Light.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Material = Elm.Engine.Material || {};
Elm.Engine.Material.Material = Elm.Engine.Material.Material || {};
Elm.Engine.Material.Material.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Material = _elm.Engine.Material || {};
   _elm.Engine.Material.Material = _elm.Engine.Material.Material || {};
   if (_elm.Engine.Material.Material.values)
   return _elm.Engine.Material.Material.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Material.Material",
   $Engine$Shader$FragmentShader = Elm.Engine.Shader.FragmentShader.make(_elm),
   $Engine$Shader$VertexShader = Elm.Engine.Shader.VertexShader.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var Material = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,ambient: b
             ,diffuse: c
             ,emissive: a
             ,fragmentShader: f
             ,specular: d
             ,vertexShader: e};
   });
   var MaterialProperty = F2(function (a,
   b) {
      return {_: {}
             ,color: a
             ,strength: b};
   });
   var material = {_: {}
                  ,ambient: A2(MaterialProperty,
                  A3($Math$Vector3.vec3,0,0,0),
                  0)
                  ,diffuse: A2(MaterialProperty,
                  A3($Math$Vector3.vec3,0,0,0),
                  0)
                  ,emissive: A2(MaterialProperty,
                  A3($Math$Vector3.vec3,0,0,0),
                  0)
                  ,fragmentShader: $Engine$Shader$FragmentShader.fragmentShader
                  ,specular: A2(MaterialProperty,
                  A3($Math$Vector3.vec3,0,0,0),
                  0)
                  ,vertexShader: $Engine$Shader$VertexShader.vertexShader};
   _elm.Engine.Material.Material.values = {_op: _op
                                          ,MaterialProperty: MaterialProperty
                                          ,Material: Material
                                          ,material: material};
   return _elm.Engine.Material.Material.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Math = Elm.Engine.Math || {};
Elm.Engine.Math.Utils = Elm.Engine.Math.Utils || {};
Elm.Engine.Math.Utils.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Math = _elm.Engine.Math || {};
   _elm.Engine.Math.Utils = _elm.Engine.Math.Utils || {};
   if (_elm.Engine.Math.Utils.values)
   return _elm.Engine.Math.Utils.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Math.Utils",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Camera$Camera = Elm.Engine.Camera.Camera.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Math$Matrix4 = Elm.Math.Matrix4.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var projectionMatrix = function (camera) {
      return A4($Math$Matrix4.makePerspective,
      camera.fieldOfView,
      camera.aspectRatio,
      camera.nearClipping,
      camera.farClipping);
   };
   var getForwardVector = function (camera) {
      return function () {
         var roll = $Math$Vector3.getZ(camera.rotation);
         var sz = $Basics.sin(roll);
         var cz = $Basics.cos(roll);
         var pitch = $Math$Vector3.getY(camera.rotation);
         var sy = $Basics.sin(pitch);
         var cy = $Basics.cos(pitch);
         var yaw = $Math$Vector3.getX(camera.rotation);
         var sx = $Basics.sin(yaw);
         var vx = sy * cz + cy * sx * sz;
         var vy = sy * sz - cy * sx * cz;
         var cx = $Basics.cos(yaw);
         var vz = cy * cx;
         return A3($Math$Vector3.vec3,
         vx,
         vy,
         vz);
      }();
   };
   var getTargetPosition = function (camera) {
      return A2($Math$Vector3.add,
      camera.position,
      getForwardVector(camera));
   };
   var getUpVector = function (camera) {
      return function () {
         var roll = $Math$Vector3.getZ(camera.rotation);
         var sz = $Basics.sin(roll);
         var cz = $Basics.cos(roll);
         var pitch = $Math$Vector3.getY(camera.rotation);
         var sy = $Basics.sin(pitch);
         var cy = $Basics.cos(pitch);
         var yaw = $Math$Vector3.getX(camera.rotation);
         var sx = $Basics.sin(yaw);
         var vz = sx;
         var cx = $Basics.cos(yaw);
         var vx = (0 - cx) * sz;
         var vy = cx * cz;
         return A3($Math$Vector3.vec3,
         vx,
         vy,
         vz);
      }();
   };
   var viewMatrix = function (camera) {
      return A3($Math$Matrix4.makeLookAt,
      camera.position,
      getTargetPosition(camera),
      getUpVector(camera));
   };
   var getSideVector = function (camera) {
      return function () {
         var roll = $Math$Vector3.getZ(camera.rotation);
         var sz = $Basics.sin(roll);
         var cz = $Basics.cos(roll);
         var pitch = $Math$Vector3.getY(camera.rotation);
         var sy = $Basics.sin(pitch);
         var cy = $Basics.cos(pitch);
         var yaw = $Math$Vector3.getX(camera.rotation);
         var sx = $Basics.sin(yaw);
         var vx = cy * cz - sy * sx * sz;
         var vy = cy * sz + sy * sx * cz;
         var cx = $Basics.cos(yaw);
         var vz = (0 - sy) * cx;
         return A3($Math$Vector3.vec3,
         vx,
         vy,
         vz);
      }();
   };
   var matrixIdentity = $Math$Matrix4.identity;
   var safeMakeRotate = function (vector) {
      return _U.eq($Math$Vector3.lengthSquared(vector),
      0) ? $Math$Matrix4.identity : A2($Math$Matrix4.makeRotate,
      $Basics.sqrt($Math$Vector3.lengthSquared(vector)),
      $Math$Vector3.normalize(vector));
   };
   var modelMatrix = function (object) {
      return function () {
         var scaleMatrix = $Math$Matrix4.makeScale(object.scale);
         var rotationMatrix = safeMakeRotate(object.rotation);
         var translationMatrix = $Math$Matrix4.makeTranslate(object.position);
         return A2($Math$Matrix4.mul,
         translationMatrix,
         A2($Math$Matrix4.mul,
         rotationMatrix,
         scaleMatrix));
      }();
   };
   var safeNormalize = function (vector) {
      return _U.eq($Math$Vector3.lengthSquared(vector),
      0) ? vector : $Math$Vector3.normalize(vector);
   };
   _elm.Engine.Math.Utils.values = {_op: _op
                                   ,safeNormalize: safeNormalize
                                   ,safeMakeRotate: safeMakeRotate
                                   ,matrixIdentity: matrixIdentity
                                   ,getSideVector: getSideVector
                                   ,getUpVector: getUpVector
                                   ,getForwardVector: getForwardVector
                                   ,getTargetPosition: getTargetPosition
                                   ,modelMatrix: modelMatrix
                                   ,viewMatrix: viewMatrix
                                   ,projectionMatrix: projectionMatrix};
   return _elm.Engine.Math.Utils.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Mesh = Elm.Engine.Mesh || {};
Elm.Engine.Mesh.Cube = Elm.Engine.Mesh.Cube || {};
Elm.Engine.Mesh.Cube.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Mesh = _elm.Engine.Mesh || {};
   _elm.Engine.Mesh.Cube = _elm.Engine.Mesh.Cube || {};
   if (_elm.Engine.Mesh.Cube.values)
   return _elm.Engine.Mesh.Cube.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Mesh.Cube",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Mesh$Mesh = Elm.Engine.Mesh.Mesh.make(_elm),
   $Engine$Mesh$Rectangle = Elm.Engine.Mesh.Rectangle.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var cubeMesh = F2(function (center,
   size) {
      return function () {
         var hs = size / 2;
         var ftl = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         0 - hs,
         hs,
         0 - hs));
         var ftr = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         hs,
         hs,
         0 - hs));
         var fbr = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         hs,
         0 - hs,
         0 - hs));
         var fbl = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         0 - hs,
         0 - hs,
         0 - hs));
         var btl = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         0 - hs,
         hs,
         hs));
         var btr = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         hs,
         hs,
         hs));
         var bbr = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         hs,
         0 - hs,
         hs));
         var bbl = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         0 - hs,
         0 - hs,
         hs));
         return A2($Basics._op["++"],
         A4($Engine$Mesh$Rectangle.rectangleMesh,
         ftl,
         ftr,
         btr,
         btl),
         A2($Basics._op["++"],
         A4($Engine$Mesh$Rectangle.rectangleMesh,
         ftl,
         fbl,
         fbr,
         ftr),
         A2($Basics._op["++"],
         A4($Engine$Mesh$Rectangle.rectangleMesh,
         fbl,
         fbr,
         bbr,
         bbl),
         A2($Basics._op["++"],
         A4($Engine$Mesh$Rectangle.rectangleMesh,
         btr,
         bbr,
         bbl,
         btl),
         A2($Basics._op["++"],
         A4($Engine$Mesh$Rectangle.rectangleMesh,
         ftl,
         fbl,
         bbl,
         btl),
         A4($Engine$Mesh$Rectangle.rectangleMesh,
         ftr,
         fbr,
         bbr,
         btr))))));
      }();
   });
   var cube = _U.replace([["mesh"
                          ,A2(cubeMesh,
                          A3($Math$Vector3.vec3,0,0,0),
                          1)]],
   $Engine$Mesh$Rectangle.rectangle);
   _elm.Engine.Mesh.Cube.values = {_op: _op
                                  ,cubeMesh: cubeMesh
                                  ,cube: cube};
   return _elm.Engine.Mesh.Cube.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Mesh = Elm.Engine.Mesh || {};
Elm.Engine.Mesh.Mesh = Elm.Engine.Mesh.Mesh || {};
Elm.Engine.Mesh.Mesh.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Mesh = _elm.Engine.Mesh || {};
   _elm.Engine.Mesh.Mesh = _elm.Engine.Mesh.Mesh || {};
   if (_elm.Engine.Mesh.Mesh.values)
   return _elm.Engine.Mesh.Mesh.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Mesh.Mesh",
   $Engine$Shader$Attribute = Elm.Engine.Shader.Attribute.make(_elm),
   $WebGL = Elm.WebGL.make(_elm);
   _elm.Engine.Mesh.Mesh.values = {_op: _op};
   return _elm.Engine.Mesh.Mesh.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Mesh = Elm.Engine.Mesh || {};
Elm.Engine.Mesh.Pyramid = Elm.Engine.Mesh.Pyramid || {};
Elm.Engine.Mesh.Pyramid.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Mesh = _elm.Engine.Mesh || {};
   _elm.Engine.Mesh.Pyramid = _elm.Engine.Mesh.Pyramid || {};
   if (_elm.Engine.Mesh.Pyramid.values)
   return _elm.Engine.Mesh.Pyramid.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Mesh.Pyramid",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Mesh$Mesh = Elm.Engine.Mesh.Mesh.make(_elm),
   $Engine$Mesh$Rectangle = Elm.Engine.Mesh.Rectangle.make(_elm),
   $Engine$Mesh$Triangle = Elm.Engine.Mesh.Triangle.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var pyramidMesh = F3(function (center,
   height,
   width) {
      return function () {
         var halfWidth = width / 2;
         var halfHeight = height / 2;
         var top = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         0,
         halfHeight,
         0));
         var bfl = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         0 - halfWidth,
         0 - halfHeight,
         0 - halfWidth));
         var bfr = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         halfWidth,
         0 - halfHeight,
         0 - halfWidth));
         var bbl = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         0 - halfWidth,
         0 - halfHeight,
         halfWidth));
         var bbr = A2($Math$Vector3.add,
         center,
         A3($Math$Vector3.vec3,
         halfWidth,
         0 - halfHeight,
         halfWidth));
         return A2($Basics._op["++"],
         A4($Engine$Mesh$Rectangle.rectangleMesh,
         bbr,
         bbl,
         bfl,
         bfr),
         A2($Basics._op["++"],
         A3($Engine$Mesh$Triangle.triangleMesh,
         bfl,
         bfr,
         top),
         A2($Basics._op["++"],
         A3($Engine$Mesh$Triangle.triangleMesh,
         bfr,
         bbr,
         top),
         A2($Basics._op["++"],
         A3($Engine$Mesh$Triangle.triangleMesh,
         bbr,
         bbl,
         top),
         A3($Engine$Mesh$Triangle.triangleMesh,
         bbl,
         bfl,
         top)))));
      }();
   });
   var pyramid = _U.replace([["mesh"
                             ,A3(pyramidMesh,
                             A3($Math$Vector3.vec3,0,0,0),
                             1,
                             1)]],
   $Engine$Mesh$Triangle.triangle);
   _elm.Engine.Mesh.Pyramid.values = {_op: _op
                                     ,pyramidMesh: pyramidMesh
                                     ,pyramid: pyramid};
   return _elm.Engine.Mesh.Pyramid.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Mesh = Elm.Engine.Mesh || {};
Elm.Engine.Mesh.Rectangle = Elm.Engine.Mesh.Rectangle || {};
Elm.Engine.Mesh.Rectangle.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Mesh = _elm.Engine.Mesh || {};
   _elm.Engine.Mesh.Rectangle = _elm.Engine.Mesh.Rectangle || {};
   if (_elm.Engine.Mesh.Rectangle.values)
   return _elm.Engine.Mesh.Rectangle.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Mesh.Rectangle",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Mesh$Mesh = Elm.Engine.Mesh.Mesh.make(_elm),
   $Engine$Mesh$Triangle = Elm.Engine.Mesh.Triangle.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var rectangleMesh = F4(function (p,
   q,
   r,
   s) {
      return A2($Basics._op["++"],
      A3($Engine$Mesh$Triangle.triangleMesh,
      p,
      q,
      r),
      A3($Engine$Mesh$Triangle.triangleMesh,
      r,
      s,
      p));
   });
   var rectangle = _U.replace([["mesh"
                               ,A4(rectangleMesh,
                               A3($Math$Vector3.vec3,
                               -0.5,
                               -0.5,
                               0),
                               A3($Math$Vector3.vec3,
                               0.5,
                               -0.5,
                               0),
                               A3($Math$Vector3.vec3,
                               0.5,
                               0.5,
                               0),
                               A3($Math$Vector3.vec3,
                               -0.5,
                               0.5,
                               0))]],
   $Engine$Mesh$Triangle.triangle);
   _elm.Engine.Mesh.Rectangle.values = {_op: _op
                                       ,rectangleMesh: rectangleMesh
                                       ,rectangle: rectangle};
   return _elm.Engine.Mesh.Rectangle.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Mesh = Elm.Engine.Mesh || {};
Elm.Engine.Mesh.Triangle = Elm.Engine.Mesh.Triangle || {};
Elm.Engine.Mesh.Triangle.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Mesh = _elm.Engine.Mesh || {};
   _elm.Engine.Mesh.Triangle = _elm.Engine.Mesh.Triangle || {};
   if (_elm.Engine.Mesh.Triangle.values)
   return _elm.Engine.Mesh.Triangle.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Mesh.Triangle",
   $Engine$Material$Material = Elm.Engine.Material.Material.make(_elm),
   $Engine$Mesh$Mesh = Elm.Engine.Mesh.Mesh.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Engine$Shader$Attribute = Elm.Engine.Shader.Attribute.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm),
   $WebGL = Elm.WebGL.make(_elm);
   var triangleMesh = F3(function (p,
   q,
   r) {
      return _L.fromArray([A2($WebGL.map,
      $Engine$Shader$Attribute.Attribute,
      {ctor: "_Tuple3"
      ,_0: p
      ,_1: q
      ,_2: r})]);
   });
   var triangle = {_: {}
                  ,material: $Engine$Material$Material.material
                  ,mesh: A3(triangleMesh,
                  A3($Math$Vector3.vec3,
                  -0.5,
                  -0.5,
                  0),
                  A3($Math$Vector3.vec3,
                  0.5,
                  -0.5,
                  0),
                  A3($Math$Vector3.vec3,0,0.5,0))
                  ,position: A3($Math$Vector3.vec3,
                  0,
                  0,
                  0)
                  ,rotation: A3($Math$Vector3.vec3,
                  0,
                  0,
                  0)
                  ,scale: A3($Math$Vector3.vec3,
                  1,
                  1,
                  1)};
   _elm.Engine.Mesh.Triangle.values = {_op: _op
                                      ,triangleMesh: triangleMesh
                                      ,triangle: triangle};
   return _elm.Engine.Mesh.Triangle.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Object = Elm.Engine.Object || {};
Elm.Engine.Object.DefaultObject = Elm.Engine.Object.DefaultObject || {};
Elm.Engine.Object.DefaultObject.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Object = _elm.Engine.Object || {};
   _elm.Engine.Object.DefaultObject = _elm.Engine.Object.DefaultObject || {};
   if (_elm.Engine.Object.DefaultObject.values)
   return _elm.Engine.Object.DefaultObject.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Object.DefaultObject",
   $Engine$Mesh$Cube = Elm.Engine.Mesh.Cube.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm);
   var object = $Engine$Mesh$Cube.cube;
   _elm.Engine.Object.DefaultObject.values = {_op: _op
                                             ,object: object};
   return _elm.Engine.Object.DefaultObject.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Object = Elm.Engine.Object || {};
Elm.Engine.Object.Object = Elm.Engine.Object.Object || {};
Elm.Engine.Object.Object.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Object = _elm.Engine.Object || {};
   _elm.Engine.Object.Object = _elm.Engine.Object.Object || {};
   if (_elm.Engine.Object.Object.values)
   return _elm.Engine.Object.Object.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Object.Object",
   $Engine$Material$Material = Elm.Engine.Material.Material.make(_elm),
   $Engine$Mesh$Mesh = Elm.Engine.Mesh.Mesh.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var Object = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return _U.insert("scale",
      e,
      _U.insert("rotation",
      d,
      _U.insert("position",
      c,
      _U.insert("material",
      b,
      _U.insert("mesh",a,f)))));
   });
   _elm.Engine.Object.Object.values = {_op: _op
                                      ,Object: Object};
   return _elm.Engine.Object.Object.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Render = Elm.Engine.Render || {};
Elm.Engine.Render.Render = Elm.Engine.Render.Render || {};
Elm.Engine.Render.Render.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Render = _elm.Engine.Render || {};
   _elm.Engine.Render.Render = _elm.Engine.Render.Render || {};
   if (_elm.Engine.Render.Render.values)
   return _elm.Engine.Render.Render.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Render.Render",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Engine$Scene$Scene = Elm.Engine.Scene.Scene.make(_elm),
   $Engine$Shader$Shader = Elm.Engine.Shader.Shader.make(_elm),
   $Engine$Shader$Uniform = Elm.Engine.Shader.Uniform.make(_elm),
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $List = Elm.List.make(_elm),
   $WebGL = Elm.WebGL.make(_elm);
   var renderObject = F2(function (scene,
   object) {
      return A4($WebGL.entity,
      $Engine$Shader$Shader.constructVertexShader(object.material.vertexShader),
      $Engine$Shader$Shader.constructFragmentShader(object.material.fragmentShader),
      object.mesh,
      A2($Engine$Shader$Uniform.constructUniforms,
      scene,
      object));
   });
   var render = function (scene) {
      return $WebGL.webgl({ctor: "_Tuple2"
                          ,_0: $Basics.floor(scene.viewport.dimensions.width)
                          ,_1: $Basics.floor(scene.viewport.dimensions.height)})(A2($List.map,
      renderObject(scene),
      scene.objects));
   };
   _elm.Engine.Render.Render.values = {_op: _op
                                      ,renderObject: renderObject
                                      ,render: render};
   return _elm.Engine.Render.Render.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Scene = Elm.Engine.Scene || {};
Elm.Engine.Scene.Scene = Elm.Engine.Scene.Scene || {};
Elm.Engine.Scene.Scene.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Scene = _elm.Engine.Scene || {};
   _elm.Engine.Scene.Scene = _elm.Engine.Scene.Scene || {};
   if (_elm.Engine.Scene.Scene.values)
   return _elm.Engine.Scene.Scene.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Scene.Scene",
   $Engine$Camera$Camera = Elm.Engine.Camera.Camera.make(_elm),
   $Engine$Light$Light = Elm.Engine.Light.Light.make(_elm),
   $Engine$Object$DefaultObject = Elm.Engine.Object.DefaultObject.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm);
   var scene = {_: {}
               ,camera: $Engine$Camera$Camera.camera
               ,light: $Engine$Light$Light.light
               ,objects: _L.fromArray([$Engine$Object$DefaultObject.object])
               ,viewport: {_: {}
                          ,dimensions: {_: {}
                                       ,height: 400
                                       ,width: 400}}};
   var Scene = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,camera: a
             ,light: c
             ,objects: b
             ,viewport: d};
   });
   _elm.Engine.Scene.Scene.values = {_op: _op
                                    ,Scene: Scene
                                    ,scene: scene};
   return _elm.Engine.Scene.Scene.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.Attribute = Elm.Engine.Shader.Attribute || {};
Elm.Engine.Shader.Attribute.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.Attribute = _elm.Engine.Shader.Attribute || {};
   if (_elm.Engine.Shader.Attribute.values)
   return _elm.Engine.Shader.Attribute.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.Attribute",
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var Attribute = function (a) {
      return {_: {},position: a};
   };
   _elm.Engine.Shader.Attribute.values = {_op: _op
                                         ,Attribute: Attribute};
   return _elm.Engine.Shader.Attribute.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.Boilerplate = Elm.Engine.Shader.Boilerplate || {};
Elm.Engine.Shader.Boilerplate.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.Boilerplate = _elm.Engine.Shader.Boilerplate || {};
   if (_elm.Engine.Shader.Boilerplate.values)
   return _elm.Engine.Shader.Boilerplate.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.Boilerplate",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Shader$Library = Elm.Engine.Shader.Library.make(_elm),
   $Engine$Shader$Utils = Elm.Engine.Shader.Utils.make(_elm),
   $List = Elm.List.make(_elm);
   var normalMatrix = A3($Engine$Shader$Utils.declareInitializedVariable,
   "mat4",
   "normalMatrix",
   "transpose(inverse(modelViewMatrix))");
   var modelViewProjectionMatrix = A3($Engine$Shader$Utils.declareInitializedVariable,
   "mat4",
   "modelViewProjectionMatrix",
   "projectionMatrix * modelViewMatrix");
   var modelViewMatrix = A3($Engine$Shader$Utils.declareInitializedVariable,
   "mat4",
   "modelViewMatrix",
   "viewMatrix * modelMatrix");
   var usefulVariables = A2($Basics._op["++"],
   modelViewMatrix,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   modelViewProjectionMatrix,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   normalMatrix))));
   var attributeDeclarations = $Engine$Shader$Utils.groupStatements(A2($List.map,
   $Basics.uncurry($Engine$Shader$Utils.declareAttribute),
   _L.fromArray([{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "position"}])));
   var uniformDeclarations = $Engine$Shader$Utils.groupStatements(A2($List.map,
   $Basics.uncurry($Engine$Shader$Utils.declareUniform),
   _L.fromArray([{ctor: "_Tuple2"
                 ,_0: "mat4"
                 ,_1: "modelMatrix"}
                ,{ctor: "_Tuple2"
                 ,_0: "mat4"
                 ,_1: "viewMatrix"}
                ,{ctor: "_Tuple2"
                 ,_0: "mat4"
                 ,_1: "projectionMatrix"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "lightPosition"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "lightRotation"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "lightColor"}
                ,{ctor: "_Tuple2"
                 ,_0: "float"
                 ,_1: "lightIntensity"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "materialEmissiveColor"}
                ,{ctor: "_Tuple2"
                 ,_0: "float"
                 ,_1: "materialEmissiveStrength"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "materialAmbientColor"}
                ,{ctor: "_Tuple2"
                 ,_0: "float"
                 ,_1: "materialAmbientStrength"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "materialDiffuseColor"}
                ,{ctor: "_Tuple2"
                 ,_0: "float"
                 ,_1: "materialDiffuseStrength"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "materialSpecularColor"}
                ,{ctor: "_Tuple2"
                 ,_0: "float"
                 ,_1: "materialSpecularStrength"}])));
   var setupLight = function () {
      var lightValue = A2($Engine$Shader$Utils.callFunctionExpression,
      "Light",
      _L.fromArray(["lightPosition"
                   ,"lightRotation"
                   ,"lightColor"
                   ,"lightIntensity"]));
      return A3($Engine$Shader$Utils.declareInitializedVariable,
      "Light",
      "light",
      lightValue);
   }();
   var lightStructTypeDefinition = A2($Engine$Shader$Utils.declareStructType,
   "Light",
   _L.fromArray([{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "position"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "rotation"}
                ,{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "color"}
                ,{ctor: "_Tuple2"
                 ,_0: "float"
                 ,_1: "intensity"}]));
   var setupMaterial = function () {
      var makeMaterialColor = $Engine$Shader$Utils.callFunctionExpression("MaterialProperty");
      var materialValue = $Engine$Shader$Utils.callFunctionExpression("Material")(A2($List.map,
      makeMaterialColor,
      _L.fromArray([_L.fromArray(["materialEmissiveColor"
                                 ,"materialEmissiveStrength"])
                   ,_L.fromArray(["materialAmbientColor"
                                 ,"materialAmbientStrength"])
                   ,_L.fromArray(["materialDiffuseColor"
                                 ,"materialDiffuseStrength"])
                   ,_L.fromArray(["materialSpecularColor"
                                 ,"materialSpecularStrength"])])));
      return A3($Engine$Shader$Utils.declareInitializedVariable,
      "Material",
      "material",
      materialValue);
   }();
   var materialStructTypeDefinition = A2($Engine$Shader$Utils.declareStructType,
   "Material",
   _L.fromArray([{ctor: "_Tuple2"
                 ,_0: "MaterialProperty"
                 ,_1: "emissive"}
                ,{ctor: "_Tuple2"
                 ,_0: "MaterialProperty"
                 ,_1: "ambient"}
                ,{ctor: "_Tuple2"
                 ,_0: "MaterialProperty"
                 ,_1: "diffuse"}
                ,{ctor: "_Tuple2"
                 ,_0: "MaterialProperty"
                 ,_1: "specular"}]));
   var materialPropertyStructTypeDefinition = A2($Engine$Shader$Utils.declareStructType,
   "MaterialProperty",
   _L.fromArray([{ctor: "_Tuple2"
                 ,_0: "vec3"
                 ,_1: "color"}
                ,{ctor: "_Tuple2"
                 ,_0: "float"
                 ,_1: "strength"}]));
   var commonShaderBoilerplate = A2($Basics._op["++"],
   materialPropertyStructTypeDefinition,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   materialStructTypeDefinition,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   lightStructTypeDefinition,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   uniformDeclarations,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   setupLight,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   setupMaterial,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Library.libraryVariables,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Library.libraryFunctions,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   usefulVariables))))))))))))))))))))))));
   var vertexShaderBoilerplate = A2($Basics._op["++"],
   $Engine$Shader$Utils.setFloatPrecision,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   attributeDeclarations,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   commonShaderBoilerplate))))));
   var fragmentShaderBoilerplate = A2($Basics._op["++"],
   $Engine$Shader$Utils.setFloatPrecision,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   commonShaderBoilerplate)));
   _elm.Engine.Shader.Boilerplate.values = {_op: _op
                                           ,materialPropertyStructTypeDefinition: materialPropertyStructTypeDefinition
                                           ,materialStructTypeDefinition: materialStructTypeDefinition
                                           ,setupMaterial: setupMaterial
                                           ,lightStructTypeDefinition: lightStructTypeDefinition
                                           ,setupLight: setupLight
                                           ,uniformDeclarations: uniformDeclarations
                                           ,attributeDeclarations: attributeDeclarations
                                           ,modelViewMatrix: modelViewMatrix
                                           ,modelViewProjectionMatrix: modelViewProjectionMatrix
                                           ,normalMatrix: normalMatrix
                                           ,usefulVariables: usefulVariables
                                           ,commonShaderBoilerplate: commonShaderBoilerplate
                                           ,vertexShaderBoilerplate: vertexShaderBoilerplate
                                           ,fragmentShaderBoilerplate: fragmentShaderBoilerplate};
   return _elm.Engine.Shader.Boilerplate.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.FragmentShader = Elm.Engine.Shader.FragmentShader || {};
Elm.Engine.Shader.FragmentShader.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.FragmentShader = _elm.Engine.Shader.FragmentShader || {};
   if (_elm.Engine.Shader.FragmentShader.values)
   return _elm.Engine.Shader.FragmentShader.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.FragmentShader";
   var fragmentShader = "\n\nvoid main(){\n  gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n}\n\n";
   _elm.Engine.Shader.FragmentShader.values = {_op: _op
                                              ,fragmentShader: fragmentShader};
   return _elm.Engine.Shader.FragmentShader.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.Library = Elm.Engine.Shader.Library || {};
Elm.Engine.Shader.Library.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.Library = _elm.Engine.Shader.Library || {};
   if (_elm.Engine.Shader.Library.values)
   return _elm.Engine.Shader.Library.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.Library",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Shader$Utils = Elm.Engine.Shader.Utils.make(_elm);
   var mat4Inverse = "\nmat4 inverse(mat4 matrix){\n  return (1.0 / determinant(matrix)) * (\n         (1.0 / 6.0) * (pow(trace(matrix), 3.0) - 3.0 * trace(matrix) * trace(matrix * matrix) * identity4) -\n         0.5 * (pow(trace(matrix), 2.0) - trace(matrix * matrix)) +\n         matrix * matrix * trace(matrix) - matrix * matrix * matrix\n  );\n}\n";
   var mat3Inverse = "\nmat3 inverse(mat3 matrix){\n  return (1.0 / determinant(matrix)) * (\n         0.5 * (pow(trace(matrix), 2.0) - trace(matrix * matrix)) * identity3 -\n         matrix * trace(matrix) +\n         matrix * matrix\n  );\n}\n";
   var mat2Inverse = "\nmat2 inverse(mat2 matrix){\n  return (1.0 / determinant(matrix)) * mat2(\n    matrix[1][1], -matrix[0][1],\n    -matrix[1][0], matrix[0][0]\n);\n}\n";
   var inverseFunction = A2($Basics._op["++"],
   mat2Inverse,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   mat3Inverse,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   mat4Inverse))));
   var mat4Identity = "\nconst mat4 identity4 = mat4(\n  1.0, 0.0, 0.0, 0.0,\n  0.0, 1.0, 0.0, 0.0,\n  0.0, 0.0, 1.0, 0.0,\n  0.0, 0.0, 0.0, 1.0\n);\n";
   var mat3Identity = "\nconst mat3 identity3 = mat3(\n  1.0, 0.0, 0.0,\n  0.0, 1.0, 0.0,\n  0.0, 0.0, 1.0\n);\n";
   var mat2Identity = "\nconst mat2 identity2 = mat2(\n  1.0, 0.0,\n  0.0, 1.0\n);\n";
   var identityMatrix = A2($Basics._op["++"],
   mat2Identity,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   mat3Identity,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   mat4Identity))));
   var libraryVariables = identityMatrix;
   var mat4Trace = "\nfloat trace(mat4 matrix){\n  return matrix[0][0] + matrix[1][1] + matrix[2][2] + matrix[3][3];\n}\n";
   var mat3Trace = "\nfloat trace(mat3 matrix){\n  return matrix[0][0] + matrix[1][1] + matrix[2][2];\n}\n";
   var mat2Trace = "\nfloat trace(mat2 matrix){\n  return matrix[0][0] + matrix[1][1];\n}\n";
   var traceFunction = A2($Basics._op["++"],
   mat2Trace,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   mat3Trace,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   mat4Trace))));
   var mat4Determinant = "\nfloat determinant(mat4 matrix){\n  return (\n    matrix[0][0] * determinant(mat3(\n      matrix[1][1], matrix[1][2], matrix[1][3],\n      matrix[2][1], matrix[2][2], matrix[2][3],\n      matrix[3][1], matrix[3][2], matrix[3][3]\n    )) -\n    matrix[0][1] * determinant(mat3(\n    matrix[1][0], matrix[1][2], matrix[1][3],\n    matrix[2][0], matrix[2][2], matrix[2][3],\n    matrix[3][0], matrix[3][2], matrix[3][3]\n    )) +\n    matrix[0][2] * determinant(mat3(\n      matrix[1][0], matrix[1][1], matrix[1][3],\n      matrix[2][0], matrix[2][1], matrix[2][3],\n      matrix[3][0], matrix[3][1], matrix[3][3]\n    )) -\n    matrix[0][3] * determinant(mat3(\n      matrix[1][0], matrix[1][1], matrix[1][2],\n      matrix[2][0], matrix[2][1], matrix[2][2],\n      matrix[3][0], matrix[3][1], matrix[3][2]\n    ))\n  );\n}\n";
   var mat3Determinant = "\nfloat determinant(mat3 matrix){\n  return (\n    matrix[0][0] * determinant(mat2(\n      matrix[1][1], matrix[1][2],\n      matrix[2][1], matrix[2][2]\n    )) -\n    matrix[0][1] * determinant(mat2(\n      matrix[1][0], matrix[1][2],\n      matrix[2][0], matrix[2][2]\n    )) +\n    matrix[0][2] * determinant(mat2(\n      matrix[1][0], matrix[1][1],\n      matrix[2][0], matrix[2][1]))\n  );\n}\n";
   var mat2Determinant = "\nfloat determinant(mat2 matrix){\n  return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];\n}\n";
   var determinantFunction = A2($Basics._op["++"],
   mat2Determinant,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   mat3Determinant,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   mat4Determinant))));
   var mat4Transpose = "\nmat4 transpose(mat4 matrix){\n  return mat4(\n    matrix[0][0], matrix[1][0], matrix[2][0], matrix[3][0],\n    matrix[0][1], matrix[1][1], matrix[2][1], matrix[3][1],\n    matrix[0][2], matrix[1][2], matrix[2][2], matrix[3][2],\n    matrix[0][3], matrix[1][3], matrix[2][3], matrix[3][3]\n  );\n}\n";
   var mat3Transpose = "\nmat3 transpose(mat3 matrix){\n  return mat3(\n    matrix[0][0], matrix[1][0], matrix[2][0],\n    matrix[0][1], matrix[1][1], matrix[2][1],\n    matrix[0][2], matrix[1][2], matrix[2][2]\n  );\n}\n";
   var mat2Transpose = "\nmat2 transpose(mat2 matrix){\n  return mat2(\n    matrix[0][0], matrix[1][0],\n    matrix[0][1], matrix[1][1]\n  );\n}\n";
   var transposeFunction = A2($Basics._op["++"],
   mat2Transpose,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   mat3Transpose,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   mat4Transpose))));
   var libraryFunctions = A2($Basics._op["++"],
   transposeFunction,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   determinantFunction,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   A2($Basics._op["++"],
   traceFunction,
   A2($Basics._op["++"],
   $Engine$Shader$Utils.newLine,
   inverseFunction))))));
   _elm.Engine.Shader.Library.values = {_op: _op
                                       ,mat2Transpose: mat2Transpose
                                       ,mat3Transpose: mat3Transpose
                                       ,mat4Transpose: mat4Transpose
                                       ,mat2Determinant: mat2Determinant
                                       ,mat3Determinant: mat3Determinant
                                       ,mat4Determinant: mat4Determinant
                                       ,mat2Trace: mat2Trace
                                       ,mat3Trace: mat3Trace
                                       ,mat4Trace: mat4Trace
                                       ,mat2Identity: mat2Identity
                                       ,mat3Identity: mat3Identity
                                       ,mat4Identity: mat4Identity
                                       ,mat2Inverse: mat2Inverse
                                       ,mat3Inverse: mat3Inverse
                                       ,mat4Inverse: mat4Inverse
                                       ,transposeFunction: transposeFunction
                                       ,determinantFunction: determinantFunction
                                       ,traceFunction: traceFunction
                                       ,inverseFunction: inverseFunction
                                       ,identityMatrix: identityMatrix
                                       ,libraryVariables: libraryVariables
                                       ,libraryFunctions: libraryFunctions};
   return _elm.Engine.Shader.Library.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.Shader = Elm.Engine.Shader.Shader || {};
Elm.Engine.Shader.Shader.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.Shader = _elm.Engine.Shader.Shader || {};
   if (_elm.Engine.Shader.Shader.values)
   return _elm.Engine.Shader.Shader.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.Shader",
   $Basics = Elm.Basics.make(_elm),
   $Engine$Shader$Attribute = Elm.Engine.Shader.Attribute.make(_elm),
   $Engine$Shader$Boilerplate = Elm.Engine.Shader.Boilerplate.make(_elm),
   $Engine$Shader$Uniform = Elm.Engine.Shader.Uniform.make(_elm),
   $Engine$Shader$Utils = Elm.Engine.Shader.Utils.make(_elm),
   $WebGL = Elm.WebGL.make(_elm);
   var constructFragmentShader = function (shaderString) {
      return $WebGL.unsafeShader(A2($Basics._op["++"],
      $Engine$Shader$Boilerplate.fragmentShaderBoilerplate,
      A2($Basics._op["++"],
      $Engine$Shader$Utils.newLine,
      shaderString)));
   };
   var constructVertexShader = function (shaderString) {
      return $WebGL.unsafeShader(A2($Basics._op["++"],
      $Engine$Shader$Boilerplate.vertexShaderBoilerplate,
      A2($Basics._op["++"],
      $Engine$Shader$Utils.newLine,
      shaderString)));
   };
   var showFragmentShader = function (shaderString) {
      return A2($Basics._op["++"],
      $Engine$Shader$Boilerplate.fragmentShaderBoilerplate,
      A2($Basics._op["++"],
      $Engine$Shader$Utils.newLine,
      shaderString));
   };
   var showVertexShader = function (shaderString) {
      return A2($Basics._op["++"],
      $Engine$Shader$Boilerplate.vertexShaderBoilerplate,
      A2($Basics._op["++"],
      $Engine$Shader$Utils.newLine,
      shaderString));
   };
   _elm.Engine.Shader.Shader.values = {_op: _op
                                      ,showVertexShader: showVertexShader
                                      ,showFragmentShader: showFragmentShader
                                      ,constructVertexShader: constructVertexShader
                                      ,constructFragmentShader: constructFragmentShader};
   return _elm.Engine.Shader.Shader.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.Uniform = Elm.Engine.Shader.Uniform || {};
Elm.Engine.Shader.Uniform.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.Uniform = _elm.Engine.Shader.Uniform || {};
   if (_elm.Engine.Shader.Uniform.values)
   return _elm.Engine.Shader.Uniform.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.Uniform",
   $Engine$Math$Utils = Elm.Engine.Math.Utils.make(_elm),
   $Engine$Object$Object = Elm.Engine.Object.Object.make(_elm),
   $Engine$Scene$Scene = Elm.Engine.Scene.Scene.make(_elm),
   $Math$Matrix4 = Elm.Math.Matrix4.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var constructUniforms = F2(function (scene,
   object) {
      return {_: {}
             ,lightColor: scene.light.color
             ,lightIntensity: scene.light.intensity
             ,lightPosition: scene.light.position
             ,lightRotation: scene.light.rotation
             ,materialAmbientColor: object.material.ambient.color
             ,materialAmbientStrength: object.material.ambient.strength
             ,materialDiffuseColor: object.material.diffuse.color
             ,materialDiffuseStrength: object.material.diffuse.strength
             ,materialEmissiveColor: object.material.emissive.color
             ,materialEmissiveStrength: object.material.emissive.strength
             ,materialSpecularColor: object.material.specular.color
             ,materialSpecularStrength: object.material.specular.strength
             ,modelMatrix: $Engine$Math$Utils.modelMatrix(object)
             ,projectionMatrix: $Engine$Math$Utils.projectionMatrix(scene.camera)
             ,viewMatrix: $Engine$Math$Utils.viewMatrix(scene.camera)};
   });
   var Uniform = function (a) {
      return function (b) {
         return function (c) {
            return function (d) {
               return function (e) {
                  return function (f) {
                     return function (g) {
                        return function (h) {
                           return function (i) {
                              return function (j) {
                                 return function (k) {
                                    return function (l) {
                                       return function (m) {
                                          return function (n) {
                                             return function (o) {
                                                return {_: {}
                                                       ,lightColor: f
                                                       ,lightIntensity: g
                                                       ,lightPosition: d
                                                       ,lightRotation: e
                                                       ,materialAmbientColor: j
                                                       ,materialAmbientStrength: k
                                                       ,materialDiffuseColor: l
                                                       ,materialDiffuseStrength: m
                                                       ,materialEmissiveColor: h
                                                       ,materialEmissiveStrength: i
                                                       ,materialSpecularColor: n
                                                       ,materialSpecularStrength: o
                                                       ,modelMatrix: a
                                                       ,projectionMatrix: c
                                                       ,viewMatrix: b};
                                             };
                                          };
                                       };
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
      };
   };
   _elm.Engine.Shader.Uniform.values = {_op: _op
                                       ,Uniform: Uniform
                                       ,constructUniforms: constructUniforms};
   return _elm.Engine.Shader.Uniform.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.Utils = Elm.Engine.Shader.Utils || {};
Elm.Engine.Shader.Utils.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.Utils = _elm.Engine.Shader.Utils || {};
   if (_elm.Engine.Shader.Utils.values)
   return _elm.Engine.Shader.Utils.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.Utils",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $String = Elm.String.make(_elm);
   var groupStrings = $String.join("");
   var setFloatPrecision = "precision mediump float;";
   var commentEnd = "*/";
   var commentStart = "/*";
   var closeCurlyBrace = "}";
   var openCurlyBrace = "{";
   var closeParenthesis = ")";
   var openParenthesis = "(";
   var semiColon = ";";
   var comma = ",";
   var equalSign = "=";
   var tab = "  ";
   var whiteSpace = " ";
   var declareVariable = F2(function (variableType,
   variableName) {
      return A2($Basics._op["++"],
      variableType,
      A2($Basics._op["++"],
      whiteSpace,
      A2($Basics._op["++"],
      variableName,
      semiColon)));
   });
   var declareInitializedVariable = F3(function (variableType,
   variableName,
   initialValue) {
      return A2($Basics._op["++"],
      variableType,
      A2($Basics._op["++"],
      whiteSpace,
      A2($Basics._op["++"],
      variableName,
      A2($Basics._op["++"],
      whiteSpace,
      A2($Basics._op["++"],
      equalSign,
      A2($Basics._op["++"],
      whiteSpace,
      A2($Basics._op["++"],
      initialValue,
      semiColon)))))));
   });
   var declareConstVariable = F3(function (variableType,
   variableName,
   initialValue) {
      return A2($Basics._op["++"],
      "const",
      A2($Basics._op["++"],
      whiteSpace,
      A3(declareInitializedVariable,
      variableType,
      variableName,
      initialValue)));
   });
   var declareParameter = F3(function (parameterType,
   variableType,
   variableName) {
      return A2($Basics._op["++"],
      parameterType,
      A2($Basics._op["++"],
      whiteSpace,
      A2($Basics._op["++"],
      variableType,
      A2($Basics._op["++"],
      whiteSpace,
      A2($Basics._op["++"],
      variableName,
      semiColon)))));
   });
   var declareAttribute = declareParameter("attribute");
   var declareVarying = declareParameter("varying");
   var declareUniform = declareParameter("uniform");
   var callFunctionExpression = F2(function (functionName,
   parameterList) {
      return A2($Basics._op["++"],
      functionName,
      A2($Basics._op["++"],
      openParenthesis,
      A2($Basics._op["++"],
      groupStrings(A2($List.intersperse,
      A2($Basics._op["++"],
      comma,
      whiteSpace),
      parameterList)),
      closeParenthesis)));
   });
   var newLine = "\n";
   var comment = function (commentString) {
      return A2($Basics._op["++"],
      commentStart,
      A2($Basics._op["++"],
      newLine,
      A2($Basics._op["++"],
      commentString,
      A2($Basics._op["++"],
      newLine,
      commentEnd))));
   };
   var groupStatements = function ($) {
      return $String.join("")($List.intersperse(newLine)($));
   };
   var groupProperties = function ($) {
      return $String.join("")($List.intersperse(A2($Basics._op["++"],
      newLine,
      tab))($));
   };
   var declareStructType = F2(function (structTypeName,
   structProperties) {
      return function () {
         var propertyToDeclaration = function (_v0) {
            return function () {
               switch (_v0.ctor)
               {case "_Tuple2":
                  return A2(declareVariable,
                    _v0._0,
                    _v0._1);}
               _U.badCase($moduleName,
               "on line 86, column 9 to 50");
            }();
         };
         var structBody = A2($Basics._op["++"],
         openCurlyBrace,
         A2($Basics._op["++"],
         newLine,
         A2($Basics._op["++"],
         tab,
         A2($Basics._op["++"],
         groupProperties(A2($List.map,
         propertyToDeclaration,
         structProperties)),
         A2($Basics._op["++"],
         newLine,
         closeCurlyBrace)))));
         return A3(declareParameter,
         "struct",
         structTypeName,
         structBody);
      }();
   });
   _elm.Engine.Shader.Utils.values = {_op: _op
                                     ,newLine: newLine
                                     ,whiteSpace: whiteSpace
                                     ,tab: tab
                                     ,equalSign: equalSign
                                     ,comma: comma
                                     ,semiColon: semiColon
                                     ,openParenthesis: openParenthesis
                                     ,closeParenthesis: closeParenthesis
                                     ,openCurlyBrace: openCurlyBrace
                                     ,closeCurlyBrace: closeCurlyBrace
                                     ,commentStart: commentStart
                                     ,commentEnd: commentEnd
                                     ,setFloatPrecision: setFloatPrecision
                                     ,comment: comment
                                     ,groupStrings: groupStrings
                                     ,groupStatements: groupStatements
                                     ,groupProperties: groupProperties
                                     ,declareVariable: declareVariable
                                     ,declareInitializedVariable: declareInitializedVariable
                                     ,declareConstVariable: declareConstVariable
                                     ,declareParameter: declareParameter
                                     ,declareAttribute: declareAttribute
                                     ,declareVarying: declareVarying
                                     ,declareUniform: declareUniform
                                     ,declareStructType: declareStructType
                                     ,callFunctionExpression: callFunctionExpression};
   return _elm.Engine.Shader.Utils.values;
};
Elm.Engine = Elm.Engine || {};
Elm.Engine.Shader = Elm.Engine.Shader || {};
Elm.Engine.Shader.VertexShader = Elm.Engine.Shader.VertexShader || {};
Elm.Engine.Shader.VertexShader.make = function (_elm) {
   "use strict";
   _elm.Engine = _elm.Engine || {};
   _elm.Engine.Shader = _elm.Engine.Shader || {};
   _elm.Engine.Shader.VertexShader = _elm.Engine.Shader.VertexShader || {};
   if (_elm.Engine.Shader.VertexShader.values)
   return _elm.Engine.Shader.VertexShader.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Engine.Shader.VertexShader";
   var vertexShader = "\n\nvoid main (){\n  vec4 outputPosition = modelViewProjectionMatrix * vec4(position, 1.0);\n  gl_Position = outputPosition;\n}\n\n";
   _elm.Engine.Shader.VertexShader.values = {_op: _op
                                            ,vertexShader: vertexShader};
   return _elm.Engine.Shader.VertexShader.values;
};
Elm.Graphics = Elm.Graphics || {};
Elm.Graphics.Element = Elm.Graphics.Element || {};
Elm.Graphics.Element.make = function (_elm) {
   "use strict";
   _elm.Graphics = _elm.Graphics || {};
   _elm.Graphics.Element = _elm.Graphics.Element || {};
   if (_elm.Graphics.Element.values)
   return _elm.Graphics.Element.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Graphics.Element",
   $Basics = Elm.Basics.make(_elm),
   $Color = Elm.Color.make(_elm),
   $List = Elm.List.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$Graphics$Element = Elm.Native.Graphics.Element.make(_elm);
   var DOut = {ctor: "DOut"};
   var outward = DOut;
   var DIn = {ctor: "DIn"};
   var inward = DIn;
   var DRight = {ctor: "DRight"};
   var right = DRight;
   var DLeft = {ctor: "DLeft"};
   var left = DLeft;
   var DDown = {ctor: "DDown"};
   var down = DDown;
   var DUp = {ctor: "DUp"};
   var up = DUp;
   var Position = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,horizontal: a
             ,vertical: b
             ,x: c
             ,y: d};
   });
   var Relative = function (a) {
      return {ctor: "Relative"
             ,_0: a};
   };
   var relative = Relative;
   var Absolute = function (a) {
      return {ctor: "Absolute"
             ,_0: a};
   };
   var absolute = Absolute;
   var N = {ctor: "N"};
   var bottomLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var Z = {ctor: "Z"};
   var middle = {_: {}
                ,horizontal: Z
                ,vertical: Z
                ,x: Relative(0.5)
                ,y: Relative(0.5)};
   var midLeft = _U.replace([["horizontal"
                             ,N]
                            ,["x",Absolute(0)]],
   middle);
   var middleAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midBottomAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var P = {ctor: "P"};
   var topLeft = {_: {}
                 ,horizontal: N
                 ,vertical: P
                 ,x: Absolute(0)
                 ,y: Absolute(0)};
   var bottomLeft = _U.replace([["vertical"
                                ,N]],
   topLeft);
   var topRight = _U.replace([["horizontal"
                              ,P]],
   topLeft);
   var bottomRight = _U.replace([["horizontal"
                                 ,P]],
   bottomLeft);
   var midRight = _U.replace([["horizontal"
                              ,P]],
   midLeft);
   var midTop = _U.replace([["vertical"
                            ,P]
                           ,["y",Absolute(0)]],
   middle);
   var midBottom = _U.replace([["vertical"
                               ,N]],
   midTop);
   var topLeftAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: N
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var topRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var bottomRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: N
             ,x: x
             ,y: y};
   });
   var midRightAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: P
             ,vertical: Z
             ,x: x
             ,y: y};
   });
   var midTopAt = F2(function (x,
   y) {
      return {_: {}
             ,horizontal: Z
             ,vertical: P
             ,x: x
             ,y: y};
   });
   var Tiled = {ctor: "Tiled"};
   var Cropped = function (a) {
      return {ctor: "Cropped"
             ,_0: a};
   };
   var Fitted = {ctor: "Fitted"};
   var Plain = {ctor: "Plain"};
   var Custom = {ctor: "Custom"};
   var RawHtml = {ctor: "RawHtml"};
   var Spacer = {ctor: "Spacer"};
   var Flow = F2(function (a,b) {
      return {ctor: "Flow"
             ,_0: a
             ,_1: b};
   });
   var Container = F2(function (a,
   b) {
      return {ctor: "Container"
             ,_0: a
             ,_1: b};
   });
   var Image = F4(function (a,
   b,
   c,
   d) {
      return {ctor: "Image"
             ,_0: a
             ,_1: b
             ,_2: c
             ,_3: d};
   });
   var link = F2(function (href,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["href"
                                    ,href]],
                p)};
      }();
   });
   var tag = F2(function (name,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["tag"
                                    ,name]],
                p)};
      }();
   });
   var color = F2(function (c,e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["color"
                                    ,$Maybe.Just(c)]],
                p)};
      }();
   });
   var opacity = F2(function (o,
   e) {
      return function () {
         var p = e.props;
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["opacity"
                                    ,o]],
                p)};
      }();
   });
   var height = F2(function (nh,
   e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v0 = e.element;
            switch (_v0.ctor)
            {case "Image":
               return _U.replace([["width"
                                  ,$Basics.round($Basics.toFloat(_v0._1) / $Basics.toFloat(_v0._2) * $Basics.toFloat(nh))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["height"
                                    ,nh]],
                p)};
      }();
   });
   var width = F2(function (nw,e) {
      return function () {
         var p = e.props;
         var props = function () {
            var _v5 = e.element;
            switch (_v5.ctor)
            {case "Image":
               return _U.replace([["height"
                                  ,$Basics.round($Basics.toFloat(_v5._2) / $Basics.toFloat(_v5._1) * $Basics.toFloat(nw))]],
                 p);
               case "RawHtml":
               return _U.replace([["height"
                                  ,$Basics.snd(A2($Native$Graphics$Element.htmlHeight,
                                  nw,
                                  e.element))]],
                 p);}
            return p;
         }();
         return {_: {}
                ,element: e.element
                ,props: _U.replace([["width"
                                    ,nw]],
                props)};
      }();
   });
   var size = F3(function (w,h,e) {
      return A2(height,
      h,
      A2(width,w,e));
   });
   var sizeOf = function (e) {
      return {ctor: "_Tuple2"
             ,_0: e.props.width
             ,_1: e.props.height};
   };
   var heightOf = function (e) {
      return e.props.height;
   };
   var widthOf = function (e) {
      return e.props.width;
   };
   var Element = F2(function (a,
   b) {
      return {_: {}
             ,element: b
             ,props: a};
   });
   var Properties = F9(function (a,
   b,
   c,
   d,
   e,
   f,
   g,
   h,
   i) {
      return {_: {}
             ,click: i
             ,color: e
             ,height: c
             ,hover: h
             ,href: f
             ,id: a
             ,opacity: d
             ,tag: g
             ,width: b};
   });
   var newElement = F3(function (w,
   h,
   e) {
      return {_: {}
             ,element: e
             ,props: A9(Properties,
             $Native$Graphics$Element.guid({ctor: "_Tuple0"}),
             w,
             h,
             1,
             $Maybe.Nothing,
             "",
             "",
             {ctor: "_Tuple0"},
             {ctor: "_Tuple0"})};
   });
   var image = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Plain,w,h,src));
   });
   var fittedImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Fitted,w,h,src));
   });
   var croppedImage = F4(function (pos,
   w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Cropped(pos),w,h,src));
   });
   var tiledImage = F3(function (w,
   h,
   src) {
      return A3(newElement,
      w,
      h,
      A4(Image,Tiled,w,h,src));
   });
   var container = F4(function (w,
   h,
   pos,
   e) {
      return A3(newElement,
      w,
      h,
      A2(Container,pos,e));
   });
   var spacer = F2(function (w,h) {
      return A3(newElement,
      w,
      h,
      Spacer);
   });
   var empty = A2(spacer,0,0);
   var flow = F2(function (dir,
   es) {
      return function () {
         var newFlow = F2(function (w,
         h) {
            return A3(newElement,
            w,
            h,
            A2(Flow,dir,es));
         });
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return _U.eq(es,
         _L.fromArray([])) ? empty : function () {
            switch (dir.ctor)
            {case "DDown":
               return A2(newFlow,
                 $List.maximum(ws),
                 $List.sum(hs));
               case "DIn": return A2(newFlow,
                 $List.maximum(ws),
                 $List.maximum(hs));
               case "DLeft": return A2(newFlow,
                 $List.sum(ws),
                 $List.maximum(hs));
               case "DOut": return A2(newFlow,
                 $List.maximum(ws),
                 $List.maximum(hs));
               case "DRight":
               return A2(newFlow,
                 $List.sum(ws),
                 $List.maximum(hs));
               case "DUp": return A2(newFlow,
                 $List.maximum(ws),
                 $List.sum(hs));}
            _U.badCase($moduleName,
            "between lines 280 and 291");
         }();
      }();
   });
   var above = F2(function (hi,
   lo) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var below = F2(function (lo,
   hi) {
      return A3(newElement,
      A2($Basics.max,
      widthOf(hi),
      widthOf(lo)),
      heightOf(hi) + heightOf(lo),
      A2(Flow,
      DDown,
      _L.fromArray([hi,lo])));
   });
   var beside = F2(function (lft,
   rht) {
      return A3(newElement,
      widthOf(lft) + widthOf(rht),
      A2($Basics.max,
      heightOf(lft),
      heightOf(rht)),
      A2(Flow,
      right,
      _L.fromArray([lft,rht])));
   });
   var layers = function (es) {
      return function () {
         var hs = A2($List.map,
         heightOf,
         es);
         var ws = A2($List.map,
         widthOf,
         es);
         return A3(newElement,
         $List.maximum(ws),
         $List.maximum(hs),
         A2(Flow,DOut,es));
      }();
   };
   _elm.Graphics.Element.values = {_op: _op
                                  ,Properties: Properties
                                  ,Element: Element
                                  ,empty: empty
                                  ,widthOf: widthOf
                                  ,heightOf: heightOf
                                  ,sizeOf: sizeOf
                                  ,width: width
                                  ,height: height
                                  ,size: size
                                  ,opacity: opacity
                                  ,color: color
                                  ,tag: tag
                                  ,link: link
                                  ,newElement: newElement
                                  ,Image: Image
                                  ,Container: Container
                                  ,Flow: Flow
                                  ,Spacer: Spacer
                                  ,RawHtml: RawHtml
                                  ,Custom: Custom
                                  ,Plain: Plain
                                  ,Fitted: Fitted
                                  ,Cropped: Cropped
                                  ,Tiled: Tiled
                                  ,image: image
                                  ,fittedImage: fittedImage
                                  ,croppedImage: croppedImage
                                  ,tiledImage: tiledImage
                                  ,P: P
                                  ,Z: Z
                                  ,N: N
                                  ,Absolute: Absolute
                                  ,Relative: Relative
                                  ,Position: Position
                                  ,container: container
                                  ,spacer: spacer
                                  ,DUp: DUp
                                  ,DDown: DDown
                                  ,DLeft: DLeft
                                  ,DRight: DRight
                                  ,DIn: DIn
                                  ,DOut: DOut
                                  ,flow: flow
                                  ,above: above
                                  ,below: below
                                  ,beside: beside
                                  ,layers: layers
                                  ,absolute: absolute
                                  ,relative: relative
                                  ,middle: middle
                                  ,topLeft: topLeft
                                  ,topRight: topRight
                                  ,bottomLeft: bottomLeft
                                  ,bottomRight: bottomRight
                                  ,midLeft: midLeft
                                  ,midRight: midRight
                                  ,midTop: midTop
                                  ,midBottom: midBottom
                                  ,middleAt: middleAt
                                  ,topLeftAt: topLeftAt
                                  ,topRightAt: topRightAt
                                  ,bottomLeftAt: bottomLeftAt
                                  ,bottomRightAt: bottomRightAt
                                  ,midLeftAt: midLeftAt
                                  ,midRightAt: midRightAt
                                  ,midTopAt: midTopAt
                                  ,midBottomAt: midBottomAt
                                  ,up: up
                                  ,down: down
                                  ,left: left
                                  ,right: right
                                  ,inward: inward
                                  ,outward: outward};
   return _elm.Graphics.Element.values;
};
Elm.Http = Elm.Http || {};
Elm.Http.make = function (_elm) {
   "use strict";
   _elm.Http = _elm.Http || {};
   if (_elm.Http.values)
   return _elm.Http.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Http",
   $Native$Http = Elm.Native.Http.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var send = $Native$Http.send;
   var Request = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,body: c
             ,headers: d
             ,url: b
             ,verb: a};
   });
   var request = Request;
   var get = function (url) {
      return A4(Request,
      "GET",
      url,
      "",
      _L.fromArray([]));
   };
   var sendGet = function (requestStrings) {
      return send(A2($Signal.map,
      get,
      requestStrings));
   };
   var post = F2(function (url,
   body) {
      return A4(Request,
      "POST",
      url,
      body,
      _L.fromArray([]));
   });
   var Failure = F2(function (a,
   b) {
      return {ctor: "Failure"
             ,_0: a
             ,_1: b};
   });
   var Waiting = {ctor: "Waiting"};
   var Success = function (a) {
      return {ctor: "Success"
             ,_0: a};
   };
   _elm.Http.values = {_op: _op
                      ,Success: Success
                      ,Waiting: Waiting
                      ,Failure: Failure
                      ,Request: Request
                      ,request: request
                      ,get: get
                      ,post: post
                      ,send: send
                      ,sendGet: sendGet};
   return _elm.Http.values;
};
Elm.List = Elm.List || {};
Elm.List.make = function (_elm) {
   "use strict";
   _elm.List = _elm.List || {};
   if (_elm.List.values)
   return _elm.List.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "List",
   $Basics = Elm.Basics.make(_elm),
   $Maybe = Elm.Maybe.make(_elm),
   $Native$List = Elm.Native.List.make(_elm);
   var sortWith = $Native$List.sortWith;
   var sortBy = $Native$List.sortBy;
   var sort = $Native$List.sort;
   var repeat = $Native$List.repeat;
   var drop = $Native$List.drop;
   var take = $Native$List.take;
   var map5 = $Native$List.map5;
   var map4 = $Native$List.map4;
   var map3 = $Native$List.map3;
   var map2 = $Native$List.map2;
   var append = $Native$List.append;
   var any = $Native$List.any;
   var all = $Native$List.all;
   var reverse = $Native$List.reverse;
   var length = $Native$List.length;
   var filter = $Native$List.filter;
   var scanl1 = $Native$List.scanl1;
   var scanl = $Native$List.scanl;
   var foldr1 = $Native$List.foldr1;
   var foldl1 = $Native$List.foldl1;
   var maximum = foldl1($Basics.max);
   var minimum = foldl1($Basics.min);
   var foldr = $Native$List.foldr;
   var concat = function (lists) {
      return A3(foldr,
      append,
      _L.fromArray([]),
      lists);
   };
   var foldl = $Native$List.foldl;
   var sum = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x + y;
      }),
      0,
      numbers);
   };
   var product = function (numbers) {
      return A3(foldl,
      F2(function (x,y) {
         return x * y;
      }),
      1,
      numbers);
   };
   var indexedMap = F2(function (f,
   xs) {
      return A3(map2,
      f,
      _L.range(0,length(xs) - 1),
      xs);
   });
   var map = $Native$List.map;
   var concatMap = F2(function (f,
   list) {
      return concat(A2(map,
      f,
      list));
   });
   var member = $Native$List.member;
   var isEmpty = function (xs) {
      return function () {
         switch (xs.ctor)
         {case "[]": return true;}
         return false;
      }();
   };
   var tail = $Native$List.tail;
   var head = $Native$List.head;
   _op["::"] = $Native$List.cons;
   var maybeCons = F3(function (f,
   mx,
   xs) {
      return function () {
         var _v1 = f(mx);
         switch (_v1.ctor)
         {case "Just":
            return A2(_op["::"],_v1._0,xs);
            case "Nothing": return xs;}
         _U.badCase($moduleName,
         "between lines 162 and 169");
      }();
   });
   var filterMap = F2(function (f,
   xs) {
      return A3(foldr,
      maybeCons(f),
      _L.fromArray([]),
      xs);
   });
   var partition = F2(function (pred,
   list) {
      return function () {
         var step = F2(function (x,
         _v3) {
            return function () {
               switch (_v3.ctor)
               {case "_Tuple2":
                  return pred(x) ? {ctor: "_Tuple2"
                                   ,_0: A2(_op["::"],x,_v3._0)
                                   ,_1: _v3._1} : {ctor: "_Tuple2"
                                                  ,_0: _v3._0
                                                  ,_1: A2(_op["::"],x,_v3._1)};}
               _U.badCase($moduleName,
               "between lines 270 and 272");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         list);
      }();
   });
   var unzip = function (pairs) {
      return function () {
         var step = F2(function (_v7,
         _v8) {
            return function () {
               switch (_v8.ctor)
               {case "_Tuple2":
                  return function () {
                       switch (_v7.ctor)
                       {case "_Tuple2":
                          return {ctor: "_Tuple2"
                                 ,_0: A2(_op["::"],_v7._0,_v8._0)
                                 ,_1: A2(_op["::"],
                                 _v7._1,
                                 _v8._1)};}
                       _U.badCase($moduleName,
                       "on line 308, column 12 to 28");
                    }();}
               _U.badCase($moduleName,
               "on line 308, column 12 to 28");
            }();
         });
         return A3(foldr,
         step,
         {ctor: "_Tuple2"
         ,_0: _L.fromArray([])
         ,_1: _L.fromArray([])},
         pairs);
      }();
   };
   var intersperse = F2(function (sep,
   xs) {
      return function () {
         switch (xs.ctor)
         {case "::": return function () {
                 var step = F2(function (x,
                 rest) {
                    return A2(_op["::"],
                    sep,
                    A2(_op["::"],x,rest));
                 });
                 var spersed = A3(foldr,
                 step,
                 _L.fromArray([]),
                 xs._1);
                 return A2(_op["::"],
                 xs._0,
                 spersed);
              }();
            case "[]":
            return _L.fromArray([]);}
         _U.badCase($moduleName,
         "between lines 319 and 330");
      }();
   });
   _elm.List.values = {_op: _op
                      ,head: head
                      ,tail: tail
                      ,isEmpty: isEmpty
                      ,member: member
                      ,map: map
                      ,indexedMap: indexedMap
                      ,foldl: foldl
                      ,foldr: foldr
                      ,foldl1: foldl1
                      ,foldr1: foldr1
                      ,scanl: scanl
                      ,scanl1: scanl1
                      ,filter: filter
                      ,filterMap: filterMap
                      ,maybeCons: maybeCons
                      ,length: length
                      ,reverse: reverse
                      ,all: all
                      ,any: any
                      ,append: append
                      ,concat: concat
                      ,concatMap: concatMap
                      ,sum: sum
                      ,product: product
                      ,maximum: maximum
                      ,minimum: minimum
                      ,partition: partition
                      ,map2: map2
                      ,map3: map3
                      ,map4: map4
                      ,map5: map5
                      ,unzip: unzip
                      ,intersperse: intersperse
                      ,take: take
                      ,drop: drop
                      ,repeat: repeat
                      ,sort: sort
                      ,sortBy: sortBy
                      ,sortWith: sortWith};
   return _elm.List.values;
};
Elm.Main = Elm.Main || {};
Elm.Main.make = function (_elm) {
   "use strict";
   _elm.Main = _elm.Main || {};
   if (_elm.Main.values)
   return _elm.Main.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Main",
   $Engine = Elm.Engine.make(_elm),
   $Math$Vector3 = Elm.Math.Vector3.make(_elm);
   var myPyramid = _U.replace([["position"
                               ,A3($Math$Vector3.vec3,2,0,0)]
                              ,["scale"
                               ,A3($Math$Vector3.vec3,
                               0.5,
                               1,
                               0.5)]],
   $Engine.pyramid);
   var myCube = _U.replace([["position"
                            ,A3($Math$Vector3.vec3,0,0,0)]
                           ,["rotation"
                            ,A3($Math$Vector3.vec3,45,0,45)]
                           ,["scale"
                            ,A3($Math$Vector3.vec3,
                            1.5,
                            1.5,
                            1.5)]],
   $Engine.cube);
   var myScene = _U.replace([["objects"
                             ,_L.fromArray([myCube
                                           ,myPyramid])]],
   $Engine.scene);
   var main = $Engine.render(myScene);
   _elm.Main.values = {_op: _op
                      ,myCube: myCube
                      ,myPyramid: myPyramid
                      ,myScene: myScene
                      ,main: main};
   return _elm.Main.values;
};
Elm.Math = Elm.Math || {};
Elm.Math.Matrix4 = Elm.Math.Matrix4 || {};
Elm.Math.Matrix4.make = function (_elm) {
   "use strict";
   _elm.Math = _elm.Math || {};
   _elm.Math.Matrix4 = _elm.Math.Matrix4 || {};
   if (_elm.Math.Matrix4.values)
   return _elm.Math.Matrix4.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Math.Matrix4",
   $Math$Vector3 = Elm.Math.Vector3.make(_elm),
   $Native$MJS = Elm.Native.MJS.make(_elm);
   var makeBasis = $Native$MJS.m4x4makeBasis;
   var transpose = $Native$MJS.m4x4transpose;
   var makeLookAt = $Native$MJS.m4x4makeLookAt;
   var translate = $Native$MJS.m4x4translate;
   var translate3 = $Native$MJS.m4x4translate3;
   var makeTranslate = $Native$MJS.m4x4makeTranslate;
   var makeTranslate3 = $Native$MJS.m4x4makeTranslate3;
   var scale = $Native$MJS.m4x4scale;
   var scale3 = $Native$MJS.m4x4scale3;
   var makeScale = $Native$MJS.m4x4makeScale;
   var makeScale3 = $Native$MJS.m4x4makeScale3;
   var rotate = $Native$MJS.m4x4rotate;
   var makeRotate = $Native$MJS.m4x4makeRotate;
   var mulAffine = $Native$MJS.m4x4mulAffine;
   var mul = $Native$MJS.m4x4mul;
   var makeOrtho2D = $Native$MJS.m4x4makeOrtho2D;
   var makeOrtho = $Native$MJS.m4x4makeOrtho;
   var makePerspective = $Native$MJS.m4x4makePerspective;
   var makeFrustrum = $Native$MJS.m4x4makeFrustrum;
   var inverseOrthonormal = $Native$MJS.m4x4inverseOrthonormal;
   var identity = $Native$MJS.m4x4identity;
   var transform = $Native$MJS.v3mul4x4;
   var Mat4 = {ctor: "Mat4"};
   _elm.Math.Matrix4.values = {_op: _op
                              ,Mat4: Mat4
                              ,transform: transform
                              ,identity: identity
                              ,inverseOrthonormal: inverseOrthonormal
                              ,makeFrustrum: makeFrustrum
                              ,makePerspective: makePerspective
                              ,makeOrtho: makeOrtho
                              ,makeOrtho2D: makeOrtho2D
                              ,mul: mul
                              ,mulAffine: mulAffine
                              ,makeRotate: makeRotate
                              ,rotate: rotate
                              ,makeScale3: makeScale3
                              ,makeScale: makeScale
                              ,scale3: scale3
                              ,scale: scale
                              ,makeTranslate3: makeTranslate3
                              ,makeTranslate: makeTranslate
                              ,translate3: translate3
                              ,translate: translate
                              ,makeLookAt: makeLookAt
                              ,transpose: transpose
                              ,makeBasis: makeBasis};
   return _elm.Math.Matrix4.values;
};
Elm.Math = Elm.Math || {};
Elm.Math.Vector3 = Elm.Math.Vector3 || {};
Elm.Math.Vector3.make = function (_elm) {
   "use strict";
   _elm.Math = _elm.Math || {};
   _elm.Math.Vector3 = _elm.Math.Vector3 || {};
   if (_elm.Math.Vector3.values)
   return _elm.Math.Vector3.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Math.Vector3",
   $Native$MJS = Elm.Native.MJS.make(_elm);
   var cross = $Native$MJS.v3cross;
   var dot = $Native$MJS.v3dot;
   var scale = $Native$MJS.v3scale;
   var normalize = $Native$MJS.v3normalize;
   var distanceSquared = $Native$MJS.v3distanceSquared;
   var distance = $Native$MJS.v3distance;
   var lengthSquared = $Native$MJS.v3lengthSquared;
   var length = $Native$MJS.v3length;
   var direction = $Native$MJS.v3direction;
   var negate = $Native$MJS.v3neg;
   var sub = $Native$MJS.v3sub;
   var add = $Native$MJS.v3add;
   var fromRecord = $Native$MJS.fromRecord3;
   var fromTuple = $Native$MJS.fromTuple3;
   var toRecord = $Native$MJS.toRecord3;
   var toTuple = $Native$MJS.toTuple3;
   var setZ = $Native$MJS.v3setZ;
   var setY = $Native$MJS.v3setY;
   var setX = $Native$MJS.v3setX;
   var getZ = $Native$MJS.v3getZ;
   var getY = $Native$MJS.v3getY;
   var getX = $Native$MJS.v3getX;
   var k = A3($Native$MJS.vec3,
   0,
   0,
   1);
   var j = A3($Native$MJS.vec3,
   0,
   1,
   0);
   var i = A3($Native$MJS.vec3,
   1,
   0,
   0);
   var vec3 = $Native$MJS.vec3;
   var Vec3 = {ctor: "Vec3"};
   _elm.Math.Vector3.values = {_op: _op
                              ,Vec3: Vec3
                              ,vec3: vec3
                              ,i: i
                              ,j: j
                              ,k: k
                              ,getX: getX
                              ,getY: getY
                              ,getZ: getZ
                              ,setX: setX
                              ,setY: setY
                              ,setZ: setZ
                              ,toTuple: toTuple
                              ,toRecord: toRecord
                              ,fromTuple: fromTuple
                              ,fromRecord: fromRecord
                              ,add: add
                              ,sub: sub
                              ,negate: negate
                              ,direction: direction
                              ,length: length
                              ,lengthSquared: lengthSquared
                              ,distance: distance
                              ,distanceSquared: distanceSquared
                              ,normalize: normalize
                              ,scale: scale
                              ,dot: dot
                              ,cross: cross};
   return _elm.Math.Vector3.values;
};
Elm.Maybe = Elm.Maybe || {};
Elm.Maybe.make = function (_elm) {
   "use strict";
   _elm.Maybe = _elm.Maybe || {};
   if (_elm.Maybe.values)
   return _elm.Maybe.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Maybe";
   var withDefault = F2(function ($default,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just": return maybe._0;
            case "Nothing":
            return $default;}
         _U.badCase($moduleName,
         "between lines 45 and 56");
      }();
   });
   var Nothing = {ctor: "Nothing"};
   var oneOf = function (maybes) {
      return function () {
         switch (maybes.ctor)
         {case "::": return function () {
                 switch (maybes._0.ctor)
                 {case "Just": return maybes._0;
                    case "Nothing":
                    return oneOf(maybes._1);}
                 _U.badCase($moduleName,
                 "between lines 64 and 73");
              }();
            case "[]": return Nothing;}
         _U.badCase($moduleName,
         "between lines 59 and 73");
      }();
   };
   var andThen = F2(function (maybeValue,
   callback) {
      return function () {
         switch (maybeValue.ctor)
         {case "Just":
            return callback(maybeValue._0);
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 110 and 112");
      }();
   });
   var Just = function (a) {
      return {ctor: "Just",_0: a};
   };
   var map = F2(function (f,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Just(f(maybe._0));
            case "Nothing": return Nothing;}
         _U.badCase($moduleName,
         "between lines 76 and 107");
      }();
   });
   _elm.Maybe.values = {_op: _op
                       ,andThen: andThen
                       ,map: map
                       ,withDefault: withDefault
                       ,oneOf: oneOf
                       ,Just: Just
                       ,Nothing: Nothing};
   return _elm.Maybe.values;
};

Elm.Native.Basics = {};
Elm.Native.Basics.make = function(elm) {
  elm.Native = elm.Native || {};
  elm.Native.Basics = elm.Native.Basics || {};
  if (elm.Native.Basics.values) return elm.Native.Basics.values;

  var Utils = Elm.Native.Utils.make(elm);

  function div(a, b) {
      return (a/b)|0;
  }
  function rem(a, b) {
      return a % b;
  }
  function mod(a, b) {
        if (b === 0) {
            throw new Error("Cannot perform mod 0. Division by zero error.");
        }
        var r = a % b;
        var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r+b) : -mod(-a,-b));

        return m === b ? 0 : m;
  }
  function logBase(base, n) {
      return Math.log(n) / Math.log(base);
  }
  function negate(n) {
      return -n;
  }
  function abs(n) {
      return n < 0 ? -n : n;
  }

  function min(a, b) {
      return Utils.cmp(a,b) < 0 ? a : b;
  }
  function max(a, b) {
      return Utils.cmp(a,b) > 0 ? a : b;
  }
  function clamp(lo, hi, n) {
      return Utils.cmp(n,lo) < 0 ? lo : Utils.cmp(n,hi) > 0 ? hi : n;
  }

  function xor(a, b) {
      return a !== b;
  }
  function not(b) {
      return !b;
  }
  function isInfinite(n) {
      return n === Infinity || n === -Infinity
  }

  function truncate(n) {
      return n|0;
  }

  function degrees(d) {
      return d * Math.PI / 180;
  }
  function turns(t) {
      return 2 * Math.PI * t;
  }
  function fromPolar(point) {
      var r = point._0;
      var t = point._1;
      return Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
  }
  function toPolar(point) {
      var x = point._0;
      var y = point._1;
      return Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y,x));
  }

  var basics = {
      div: F2(div),
      rem: F2(rem),
      mod: F2(mod),

      pi: Math.PI,
      e: Math.E,
      cos: Math.cos,
      sin: Math.sin,
      tan: Math.tan,
      acos: Math.acos,
      asin: Math.asin,
      atan: Math.atan,
      atan2: F2(Math.atan2),

      degrees:  degrees,
      turns:  turns,
      fromPolar:  fromPolar,
      toPolar:  toPolar,

      sqrt: Math.sqrt,
      logBase: F2(logBase),
      negate: negate,
      abs: abs,
      min: F2(min),
      max: F2(max),
      clamp: F3(clamp),
      compare: Utils.compare,

      xor: F2(xor),
      not: not,

      truncate: truncate,
      ceiling: Math.ceil,
      floor: Math.floor,
      round: Math.round,
      toFloat: function(x) { return x; },
      isNaN: isNaN,
      isInfinite: isInfinite
  };

  return elm.Native.Basics.values = basics;
};

Elm.Native.Char = {};
Elm.Native.Char.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Char = elm.Native.Char || {};
    if (elm.Native.Char.values) return elm.Native.Char.values;

    var Utils = Elm.Native.Utils.make(elm);

    function isBetween(lo,hi) { return function(chr) {
	var c = chr.charCodeAt(0);
	return lo <= c && c <= hi;
    };
                              }
    var isDigit = isBetween('0'.charCodeAt(0),'9'.charCodeAt(0));
    var chk1 = isBetween('a'.charCodeAt(0),'f'.charCodeAt(0));
    var chk2 = isBetween('A'.charCodeAt(0),'F'.charCodeAt(0));

    return elm.Native.Char.values = {
        fromCode : function(c) { return String.fromCharCode(c); },
        toCode   : function(c) { return c.toUpperCase().charCodeAt(0); },
        toUpper  : function(c) { return Utils.chr(c.toUpperCase()); },
        toLower  : function(c) { return Utils.chr(c.toLowerCase()); },
        toLocaleUpper : function(c) { return Utils.chr(c.toLocaleUpperCase()); },
        toLocaleLower : function(c) { return Utils.chr(c.toLocaleLowerCase()); },
        isLower    : isBetween('a'.charCodeAt(0),'z'.charCodeAt(0)),
        isUpper    : isBetween('A'.charCodeAt(0),'Z'.charCodeAt(0)),
        isDigit    : isDigit,
        isOctDigit : isBetween('0'.charCodeAt(0),'7'.charCodeAt(0)),
        isHexDigit : function(c) { return isDigit(c) || chk1(c) || chk2(c); }
    };
};

Elm.Native.Color = {};
Elm.Native.Color.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Color = elm.Native.Color || {};
    if (elm.Native.Color.values) return elm.Native.Color.values;

    function toCss(c) {
        var format = '';
        var colors = '';
        if (c.ctor === 'RGBA') {
            format = 'rgb';
            colors = c._0 + ', ' + c._1 + ', ' + c._2;
        } else {
            format = 'hsl';
            colors = (c._0 * 180 / Math.PI) + ', ' +
                     (c._1 * 100) + '%, ' +
                     (c._2 * 100) + '%';
        }
        if (c._3 === 1) {
            return format + '(' + colors + ')';
        } else {
            return format + 'a(' + colors + ', ' + c._3 + ')';
        }
    }

    return elm.Native.Color.values = {
        toCss:toCss
    };

};


// setup
Elm.Native = Elm.Native || {};
Elm.Native.Graphics = Elm.Native.Graphics || {};
Elm.Native.Graphics.Element = Elm.Native.Graphics.Element || {};

// definition
Elm.Native.Graphics.Element.make = function(localRuntime) {
    'use strict';

    // attempt to short-circuit
    if ('values' in Elm.Native.Graphics.Element) {
        return Elm.Native.Graphics.Element.values;
    }

    var Color = Elm.Native.Color.make(localRuntime);
    var List = Elm.Native.List.make(localRuntime);
    var Utils = Elm.Native.Utils.make(localRuntime);


    function createNode(elementType) {
        var node = document.createElement(elementType);
        node.style.padding = "0";
        node.style.margin = "0";
        return node;
    }

    function setProps(elem, node) {
        var props = elem.props;

        var element = elem.element;
        var width = props.width - (element.adjustWidth || 0);
        var height = props.height - (element.adjustHeight || 0);
        node.style.width  = (width |0) + 'px';
        node.style.height = (height|0) + 'px';

        if (props.opacity !== 1) {
            node.style.opacity = props.opacity;
        }

        if (props.color.ctor === 'Just') {
            node.style.backgroundColor = Color.toCss(props.color._0);
        }

        if (props.tag !== '') {
            node.id = props.tag;
        }

        if (props.hover.ctor !== '_Tuple0') {
            addHover(node, props.hover);
        }

        if (props.click.ctor !== '_Tuple0') {
            addClick(node, props.click);
        }

        if (props.href !== '') {
            var anchor = createNode('a');
            anchor.href = props.href;
            anchor.style.display = 'block';
            anchor.style.pointerEvents = 'auto';
            anchor.appendChild(node);
            node = anchor;
        }

        return node;
    }

    function addClick(e, handler) {
        e.style.pointerEvents = 'auto';
        e.elm_click_handler = handler;
        function trigger(ev) {
            e.elm_click_handler(Utils.Tuple0);
            ev.stopPropagation();
        }
        e.elm_click_trigger = trigger;
        e.addEventListener('click', trigger);
    }

    function removeClick(e, handler) {
        if (e.elm_click_trigger) {
            e.removeEventListener('click', e.elm_click_trigger);
            e.elm_click_trigger = null;
            e.elm_click_handler = null;
        }
    }

    function addHover(e, handler) {
        e.style.pointerEvents = 'auto';
        e.elm_hover_handler = handler;
        e.elm_hover_count = 0;

        function over(evt) {
            if (e.elm_hover_count++ > 0) return;
            e.elm_hover_handler(true);
            evt.stopPropagation();
        }
        function out(evt) {
            if (e.contains(evt.toElement || evt.relatedTarget)) return;
            e.elm_hover_count = 0;
            e.elm_hover_handler(false);
            evt.stopPropagation();
        }
        e.elm_hover_over = over;
        e.elm_hover_out = out;
        e.addEventListener('mouseover', over);
        e.addEventListener('mouseout', out);
    }

    function removeHover(e) {
        e.elm_hover_handler = null;
        if (e.elm_hover_over) {
            e.removeEventListener('mouseover', e.elm_hover_over);
            e.elm_hover_over = null;
        }
        if (e.elm_hover_out) {
            e.removeEventListener('mouseout', e.elm_hover_out);
            e.elm_hover_out = null;
        }
    }

    function image(props, img) {
        switch (img._0.ctor) {
        case 'Plain':   return plainImage(img._3);
        case 'Fitted':  return fittedImage(props.width, props.height, img._3);
        case 'Cropped': return croppedImage(img,props.width,props.height,img._3);
        case 'Tiled':   return tiledImage(img._3);
        }
    }

    function plainImage(src) {
        var img = createNode('img');
        img.src = src;
        img.name = src;
        img.style.display = "block";
        return img;
    }

    function tiledImage(src) {
        var div = createNode('div');
        div.style.backgroundImage = 'url(' + src + ')';
        return div;
    }

    function fittedImage(w, h, src) {
        var div = createNode('div');
        div.style.background = 'url(' + src + ') no-repeat center';
        div.style.webkitBackgroundSize = 'cover';
        div.style.MozBackgroundSize = 'cover';
        div.style.OBackgroundSize = 'cover';
        div.style.backgroundSize = 'cover';
        return div;
    }

    function croppedImage(elem, w, h, src) {
        var pos = elem._0._0;
        var e = createNode('div');
        e.style.overflow = "hidden";

        var img = createNode('img');
        img.onload = function() {
            var sw = w / elem._1, sh = h / elem._2;
            img.style.width = ((this.width * sw)|0) + 'px';
            img.style.height = ((this.height * sh)|0) + 'px';
            img.style.marginLeft = ((- pos._0 * sw)|0) + 'px';
            img.style.marginTop = ((- pos._1 * sh)|0) + 'px';
        };
        img.src = src;
        img.name = src;
        e.appendChild(img);
        return e;
    }

    function goOut(node) {
        node.style.position = 'absolute';
        return node;
    }
    function goDown(node) {
        return node;
    }
    function goRight(node) {
        node.style.styleFloat = 'left';
        node.style.cssFloat = 'left';
        return node;
    }

    var directionTable = {
        DUp    : goDown,
        DDown  : goDown,
        DLeft  : goRight,
        DRight : goRight,
        DIn    : goOut,
        DOut   : goOut
    };
    function needsReversal(dir) {
        return dir == 'DUp' || dir == 'DLeft' || dir == 'DIn';
    }

    function flow(dir,elist) {
        var array = List.toArray(elist);
        var container = createNode('div');
        var goDir = directionTable[dir];
        if (goDir == goOut) {
            container.style.pointerEvents = 'none';
        }
        if (needsReversal(dir)) {
            array.reverse();
        }
        var len = array.length;
        for (var i = 0; i < len; ++i) {
            container.appendChild(goDir(render(array[i])));
        }
        return container;
    }

    function toPos(pos) {
        switch(pos.ctor) {
        case "Absolute": return  pos._0 + "px";
        case "Relative": return (pos._0 * 100) + "%";
        }
    }

    // must clear right, left, top, bottom, and transform
    // before calling this function
    function setPos(pos,elem,e) {
        var element = elem.element;
        var props = elem.props;
        var w = props.width + (element.adjustWidth ? element.adjustWidth : 0);
        var h = props.height + (element.adjustHeight ? element.adjustHeight : 0);

        e.style.position = 'absolute';
        e.style.margin = 'auto';
        var transform = '';
        switch(pos.horizontal.ctor) {
        case 'P': e.style.right = toPos(pos.x); e.style.removeProperty('left'); break;
        case 'Z': transform = 'translateX(' + ((-w/2)|0) + 'px) ';
        case 'N': e.style.left = toPos(pos.x); e.style.removeProperty('right'); break;
        }
        switch(pos.vertical.ctor) {
        case 'N': e.style.bottom = toPos(pos.y); e.style.removeProperty('top'); break;
        case 'Z': transform += 'translateY(' + ((-h/2)|0) + 'px)';
        case 'P': e.style.top = toPos(pos.y); e.style.removeProperty('bottom'); break;
        }
        if (transform !== '') {
            addTransform(e.style, transform);
        }
        return e;
    }

    function addTransform(style, transform) {
        style.transform       = transform;
        style.msTransform     = transform;
        style.MozTransform    = transform;
        style.webkitTransform = transform;
        style.OTransform      = transform;
    }

    function container(pos,elem) {
        var e = render(elem);
        setPos(pos, elem, e);
        var div = createNode('div');
        div.style.position = 'relative';
        div.style.overflow = 'hidden';
        div.appendChild(e);
        return div;
    }

    function rawHtml(elem) {
        var html = elem.html;
        var guid = elem.guid;
        var align = elem.align;

        var div = createNode('div');
        div.innerHTML = html;
        div.style.visibility = "hidden";
        if (align) {
            div.style.textAlign = align;
        }
        div.style.visibility = 'visible';
        div.style.pointerEvents = 'auto';
        return div;
    }

    function render(elem) {
        return setProps(elem, makeElement(elem));
    }
    function makeElement(e) {
        var elem = e.element;
        switch(elem.ctor) {
        case 'Image':     return image(e.props, elem);
        case 'Flow':      return flow(elem._0.ctor, elem._1);
        case 'Container': return container(elem._0, elem._1);
        case 'Spacer':    return createNode('div');
        case 'RawHtml':   return rawHtml(elem);
        case 'Custom':    return elem.render(elem.model);
        }
    }

    function updateAndReplace(node, curr, next) {
        var newNode = update(node, curr, next);
        if (newNode !== node) {
            node.parentNode.replaceChild(newNode, node);
        }
        return newNode;
    }

    function update(node, curr, next) {
        var rootNode = node;
        if (node.tagName === 'A') {
            node = node.firstChild;
        }
        if (curr.props.id === next.props.id) {
            updateProps(node, curr, next);
            return rootNode;
        }
        if (curr.element.ctor !== next.element.ctor) {
            return render(next);
        }
        var nextE = next.element;
        var currE = curr.element;
        switch(nextE.ctor) {
        case "Spacer":
            updateProps(node, curr, next);
            return rootNode;

        case "RawHtml":
            // only markdown blocks have guids, so this must be a text block
            if (nextE.guid === null) {
                if(currE.html.valueOf() !== nextE.html.valueOf()) {
                    node.innerHTML = nextE.html;
                }
                updateProps(node, curr, next);
                return rootNode;
            }
            if (nextE.guid !== currE.guid) {
                return render(next);
            }
            updateProps(node, curr, next);
            return rootNode;

        case "Image":
            if (nextE._0.ctor === 'Plain') {
                if (nextE._3 !== currE._3) {
                    node.src = nextE._3;
                }
            } else if (!Utils.eq(nextE,currE) ||
                       next.props.width !== curr.props.width ||
                       next.props.height !== curr.props.height) {
                return render(next);
            }
            updateProps(node, curr, next);
            return rootNode;

        case "Flow":
            var arr = List.toArray(nextE._1);
            for (var i = arr.length; i--; ) {
                arr[i] = arr[i].element.ctor;
            }
            if (nextE._0.ctor !== currE._0.ctor) {
                return render(next);
            }
            var nexts = List.toArray(nextE._1);
            var kids = node.childNodes;
            if (nexts.length !== kids.length) {
                return render(next);
            }
            var currs = List.toArray(currE._1);
            var dir = nextE._0.ctor;
            var goDir = directionTable[dir];
            var toReverse = needsReversal(dir);
            var len = kids.length;
            for (var i = len; i-- ;) {
                var subNode = kids[toReverse ? len - i - 1 : i];
                goDir(updateAndReplace(subNode, currs[i], nexts[i]));
            }
            updateProps(node, curr, next);
            return rootNode;

        case "Container":
            var subNode = node.firstChild;
            var newSubNode = updateAndReplace(subNode, currE._1, nextE._1);
            setPos(nextE._0, nextE._1, newSubNode);
            updateProps(node, curr, next);
            return rootNode;

        case "Custom":
            if (currE.type === nextE.type) {
                var updatedNode = nextE.update(node, currE.model, nextE.model);
                updateProps(updatedNode, curr, next);
                return updatedNode;
            } else {
                return render(next);
            }
        }
    }

    function updateProps(node, curr, next) {
        var nextProps = next.props;
        var currProps = curr.props;

        var element = next.element;
        var width = nextProps.width - (element.adjustWidth || 0);
        var height = nextProps.height - (element.adjustHeight || 0);
        if (width !== currProps.width) {
            node.style.width = (width|0) + 'px';
        }
        if (height !== currProps.height) {
            node.style.height = (height|0) + 'px';
        }

        if (nextProps.opacity !== currProps.opacity) {
            node.style.opacity = nextProps.opacity;
        }

        var nextColor = nextProps.color.ctor === 'Just'
            ? Color.toCss(nextProps.color._0)
            : '';
        if (node.style.backgroundColor !== nextColor) {
            node.style.backgroundColor = nextColor;
        }

        if (nextProps.tag !== currProps.tag) {
            node.id = nextProps.tag;
        }

        if (nextProps.href !== currProps.href) {
            if (currProps.href === '') {
                // add a surrounding href
                var anchor = createNode('a');
                anchor.href = nextProps.href;
                anchor.style.display = 'block';
                anchor.style.pointerEvents = 'auto';

                node.parentNode.replaceChild(anchor, node);
                anchor.appendChild(node);
            } else if (nextProps.href === '') {
                // remove the surrounding href
                var anchor = node.parentNode;
                anchor.parentNode.replaceChild(node, anchor);
            } else {
                // just update the link
                node.parentNode.href = nextProps.href;
            }
        }

        // update click and hover handlers
        var removed = false;

        // update hover handlers
        if (currProps.hover.ctor === '_Tuple0') {
            if (nextProps.hover.ctor !== '_Tuple0') {
                addHover(node, nextProps.hover);
            }
        }
        else {
            if (nextProps.hover.ctor === '_Tuple0') {
                removed = true;
                removeHover(node);
            }
            else {
                node.elm_hover_handler = nextProps.hover;
            }
        }

        // update click handlers
        if (currProps.click.ctor === '_Tuple0') {
            if (nextProps.click.ctor !== '_Tuple0') {
                addClick(node, nextProps.click);
            }
        }
        else {
            if (nextProps.click.ctor === '_Tuple0') {
                removed = true;
                removeClick(node);
            } else {
                node.elm_click_handler = nextProps.click;
            }
        }

        // stop capturing clicks if 
        if (removed
            && nextProps.hover.ctor === '_Tuple0'
            && nextProps.click.ctor === '_Tuple0')
        {
            node.style.pointerEvents = 'none';
        }
    }


    function htmlHeight(width, rawHtml) {
        // create dummy node
        var temp = document.createElement('div');
        temp.innerHTML = rawHtml.html;
        if (width > 0) {
            temp.style.width = width + "px";
        }
        temp.style.visibility = "hidden";
        temp.style.styleFloat = "left";
        temp.style.cssFloat   = "left";

        document.body.appendChild(temp);

        // get dimensions
        var style = window.getComputedStyle(temp, null);
        var w = Math.ceil(style.getPropertyValue("width").slice(0,-2) - 0);
        var h = Math.ceil(style.getPropertyValue("height").slice(0,-2) - 0);
        document.body.removeChild(temp);
        return Utils.Tuple2(w,h);
    }


    return Elm.Native.Graphics.Element.values = {
        render: render,
        update: update,
        updateAndReplace: updateAndReplace,

        createNode: createNode,
        addTransform: addTransform,
        htmlHeight: F2(htmlHeight),
        guid: Utils.guid
    };

};

Elm.Native.Http = {};
Elm.Native.Http.make = function(elm) {

    elm.Native = elm.Native || {};
    elm.Native.Http = elm.Native.Http || {};
    if (elm.Native.Http.values) return elm.Native.Http.values;

    var List = Elm.List.make(elm);
    var Signal = Elm.Signal.make(elm);

    function registerReq(queue,responses) {
        return function(req) {
            if (req.url.length > 0) {
                sendReq(queue,responses,req);
            }
        };
    }

    function updateQueue(queue,responses) {
        if (queue.length > 0) {
            elm.notify(responses.id, queue[0].value);
            if (queue[0].value.ctor !== 'Waiting') {
                queue.shift();
                setTimeout(function() { updateQueue(queue,responses); }, 0);
            }
        }
    }

    function sendReq(queue,responses,req) {
        var response = { value: { ctor:'Waiting' } };
        queue.push(response);

        var request = (window.ActiveXObject
                       ? new ActiveXObject("Microsoft.XMLHTTP")
                       : new XMLHttpRequest());

        request.onreadystatechange = function(e) {
            if (request.readyState === 4) {
                response.value = (request.status >= 200 && request.status < 300 ?
                                  { ctor:'Success', _0:request.responseText } :
                                  { ctor:'Failure', _0:request.status, _1:request.statusText });
                setTimeout(function() { updateQueue(queue,responses); }, 0);
            }
        };
        request.open(req.verb, req.url, true);
        function setHeader(pair) {
            request.setRequestHeader( pair._0, pair._1 );
        }
        A2( List.map, setHeader, req.headers );
        request.send(req.body);
    }

    function send(requests) {
        var responses = Signal.constant(elm.Http.values.Waiting);
        var sender = A2( Signal.map, registerReq([],responses), requests );
        function f(x) { return function(y) { return x; } }
        return A3( Signal.map2, f, responses, sender );
    }

    return elm.Native.Http.values = {
        send:send
    };
};

Elm.Native.List = {};
Elm.Native.List.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.List = elm.Native.List || {};
    if (elm.Native.List.values) return elm.Native.List.values;
    if ('values' in Elm.Native.List)
        return elm.Native.List.values = Elm.Native.List.values;

    var Utils = Elm.Native.Utils.make(elm);

    var Nil = Utils.Nil;
    var Cons = Utils.Cons;

    function throwError(f) {
        throw new Error("Function '" + f + "' expects a non-empty list!");
    }

    function toArray(xs) {
        var out = [];
        while (xs.ctor !== '[]') {
            out.push(xs._0);
            xs = xs._1;
        }
        return out;
    }

    function fromArray(arr) {
        var out = Nil;
        for (var i = arr.length; i--; ) {
            out = Cons(arr[i], out);
        }
        return out;
    }

    function range(lo,hi) {
        var lst = Nil;
        if (lo <= hi) {
            do { lst = Cons(hi,lst) } while (hi-->lo);
        }
        return lst
    }

    function head(v) {
        return v.ctor === '[]' ? throwError('head') : v._0;
    }
    function tail(v) {
        return v.ctor === '[]' ? throwError('tail') : v._1;
    }

    function last(xs) {
        if (xs.ctor === '[]') { throwError('last'); }
        var out = xs._0;
        while (xs.ctor !== '[]') {
            out = xs._0;
            xs = xs._1;
        }
        return out;
    }

    function map(f, xs) {
        var arr = [];
        while (xs.ctor !== '[]') {
            arr.push(f(xs._0));
            xs = xs._1;
        }
        return fromArray(arr);
    }

    // f defined similarly for both foldl and foldr (NB: different from Haskell)
    // ie, foldl : (a -> b -> b) -> b -> [a] -> b
    function foldl(f, b, xs) {
        var acc = b;
        while (xs.ctor !== '[]') {
            acc = A2(f, xs._0, acc);
            xs = xs._1;
        }
        return acc;
    }

    function foldr(f, b, xs) {
        var arr = toArray(xs);
        var acc = b;
        for (var i = arr.length; i--; ) {
            acc = A2(f, arr[i], acc);
        }
        return acc;
    }

    function foldl1(f, xs) {
        return xs.ctor === '[]' ? throwError('foldl1') : foldl(f, xs._0, xs._1);
    }

    function foldr1(f, xs) {
        if (xs.ctor === '[]') { throwError('foldr1'); }
        var arr = toArray(xs);
        var acc = arr.pop();
        for (var i = arr.length; i--; ) {
            acc = A2(f, arr[i], acc);
        }
        return acc;
    }

    function scanl(f, b, xs) {
        var arr = toArray(xs);
        arr.unshift(b);
        var len = arr.length;
        for (var i = 1; i < len; ++i) {
            arr[i] = A2(f, arr[i], arr[i-1]);
        }
        return fromArray(arr);
    }

    function scanl1(f, xs) {
        return xs.ctor === '[]' ? throwError('scanl1') : scanl(f, xs._0, xs._1);
    }

    function filter(pred, xs) {
        var arr = [];
        while (xs.ctor !== '[]') {
            if (pred(xs._0)) { arr.push(xs._0); }
            xs = xs._1;
        }
        return fromArray(arr);
    }

    function length(xs) {
        var out = 0;
        while (xs.ctor !== '[]') {
            out += 1;
            xs = xs._1;
        }
        return out;
    }

    function member(x, xs) {
        while (xs.ctor !== '[]') {
            if (Utils.eq(x,xs._0)) return true;
            xs = xs._1;
        }
        return false;
    }

    function reverse(xs) {
        return fromArray(toArray(xs).reverse());
    }

    function append(xs, ys) {
        if (xs.ctor === '[]') {
            return ys;
        }
        var root = Cons(xs._0, Nil);
        var curr = root;
        xs = xs._1;
        while (xs.ctor !== '[]') {
            curr._1 = Cons(xs._0, Nil);
            xs = xs._1;
            curr = curr._1;
        }
        curr._1 = ys;
        return root;
    }

    function all(pred, xs) {
        while (xs.ctor !== '[]') {
            if (!pred(xs._0)) return false;
            xs = xs._1;
        }
        return true;
    }

    function any(pred, xs) {
        while (xs.ctor !== '[]') {
            if (pred(xs._0)) return true;
            xs = xs._1;
        }
        return false;
    }

    function map2(f, xs, ys) {
        var arr = [];
        while (xs.ctor !== '[]' && ys.ctor !== '[]') {
            arr.push(A2(f, xs._0, ys._0));
            xs = xs._1;
            ys = ys._1;
        }
        return fromArray(arr);
    }

    function map3(f, xs, ys, zs) {
        var arr = [];
        while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]') {
            arr.push(A3(f, xs._0, ys._0, zs._0));
            xs = xs._1;
            ys = ys._1;
            zs = zs._1;
        }
        return fromArray(arr);
    }

    function map4(f, ws, xs, ys, zs) {
        var arr = [];
        while (   ws.ctor !== '[]'
               && xs.ctor !== '[]'
               && ys.ctor !== '[]'
               && zs.ctor !== '[]')
        {
            arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
            ws = ws._1;
            xs = xs._1;
            ys = ys._1;
            zs = zs._1;
        }
        return fromArray(arr);
    }

    function map5(f, vs, ws, xs, ys, zs) {
        var arr = [];
        while (   vs.ctor !== '[]'
               && ws.ctor !== '[]'
               && xs.ctor !== '[]'
               && ys.ctor !== '[]'
               && zs.ctor !== '[]')
        {
            arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
            vs = vs._1;
            ws = ws._1;
            xs = xs._1;
            ys = ys._1;
            zs = zs._1;
        }
        return fromArray(arr);
    }

    function sort(xs) {
        return fromArray(toArray(xs).sort(Utils.cmp));
    }

    function sortBy(f, xs) {
        return fromArray(toArray(xs).sort(function(a,b){
            return Utils.cmp(f(a), f(b));
        }));
    }

    function sortWith(f, xs) {
        return fromArray(toArray(xs).sort(function(a,b){
            var ord = f(a)(b).ctor;
            return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
        }));
    }

    function nth(xs, n) {
        return toArray(xs)[n];
    }

    function take(n, xs) {
        var arr = [];
        while (xs.ctor !== '[]' && n > 0) {
            arr.push(xs._0);
            xs = xs._1;
            --n;
        }
        return fromArray(arr);
    }

    function drop(n, xs) {
        while (xs.ctor !== '[]' && n > 0) {
            xs = xs._1;
            --n;
        }
        return xs;
    }

    function repeat(n, x) {
        var arr = [];
        var pattern = [x];
        while (n > 0) {
            if (n & 1) arr = arr.concat(pattern);
            n >>= 1, pattern = pattern.concat(pattern);
        }
        return fromArray(arr);
    }


    Elm.Native.List.values = {
        Nil:Nil,
        Cons:Cons,
        cons:F2(Cons),
        toArray:toArray,
        fromArray:fromArray,
        range:range,
        append: F2(append),

        head:head,
        tail:tail,
        last:last,

        map:F2(map),
        foldl:F3(foldl),
        foldr:F3(foldr),

        foldl1:F2(foldl1),
        foldr1:F2(foldr1),
        scanl:F3(scanl),
        scanl1:F2(scanl1),
        filter:F2(filter),
        length:length,
        member:F2(member),
        reverse:reverse,

        all:F2(all),
        any:F2(any),
        map2:F3(map2),
        map3:F4(map3),
        map4:F5(map4),
        map5:F6(map5),
        sort:sort,
        sortBy:F2(sortBy),
        sortWith:F2(sortWith),
        nth:F2(nth),
        take:F2(take),
        drop:F2(drop),
        repeat:F2(repeat)
    };
    return elm.Native.List.values = Elm.Native.List.values;

};


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * File: mjs
 *
 * Vector and Matrix math utilities for JavaScript, optimized for WebGL.
 * Edited to work with the Elm Programming Language
 */

Elm.Native.MJS = {};
Elm.Native.MJS.make = function(elm) {

    elm.Native = elm.Native || {};
    elm.Native.MJS = elm.Native.MJS || {};
    if (elm.Native.MJS.values) return elm.Native.MJS.values;

    /*
     * Constant: MJS_VERSION
     *
     * mjs version number aa.bb.cc, encoded as an integer of the form:
     * 0xaabbcc.
     */
    var MJS_VERSION = 0x000000;

    /*
     * Constant: MJS_DO_ASSERT
     *
     * Enables or disables runtime assertions.
     *
     * For potentially more performance, the assert methods can be
     * commented out in each place where they are called.
     */
    // var MJS_DO_ASSERT = false;

    /*
     * Constant: MJS_FLOAT_ARRAY_TYPE
     *
     * The base float array type.  By default, WebGLFloatArray.
     *
     * mjs can work with any array-like elements, but if an array
     * creation is requested, it will create an array of the type
     * MJS_FLOAT_ARRAY_TYPE.  Also, the builtin constants such as (M4x4.I)
     * will be of this type.
     */
    //MJS_FLOAT_ARRAY_TYPE = WebGLFloatArray;
    var MJS_FLOAT_ARRAY_TYPE = Float32Array;
    //MJS_FLOAT_ARRAY_TYPE = Float64Array;
    //MJS_FLOAT_ARRAY_TYPE = Array;

    /*
    if (MJS_DO_ASSERT) {
        function MathUtils_assert(cond, msg) {
            if (!cond) {
                throw "Assertion failed: " + msg;
            }
        }
    } else {
    */
        function MathUtils_assert() { }
    //}

    /*
     * Class: V3
     *
     * Methods for working with 3-element vectors.  A vector is represented by a 3-element array.
     * Any valid JavaScript array type may be used, but if new
     * vectors are created they are created using the configured MJS_FLOAT_ARRAY_TYPE.
     */

    var V3 = { };

    V3._temp1 = new MJS_FLOAT_ARRAY_TYPE(3);
    V3._temp2 = new MJS_FLOAT_ARRAY_TYPE(3);
    V3._temp3 = new MJS_FLOAT_ARRAY_TYPE(3);

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        V3.x = [1.0, 0.0, 0.0];
        V3.y = [0.0, 1.0, 0.0];
        V3.z = [0.0, 0.0, 1.0];

        V3.$ = function V3_$(x, y, z) {
            return [x, y, z];
        };
    } else {
        V3.x = new MJS_FLOAT_ARRAY_TYPE([1.0, 0.0, 0.0]);
        V3.y = new MJS_FLOAT_ARRAY_TYPE([0.0, 1.0, 0.0]);
        V3.z = new MJS_FLOAT_ARRAY_TYPE([0.0, 0.0, 1.0]);

        /*
         * Function: V3.$
         *
         * Creates a new 3-element vector with the given values.
         *
         * Parameters:
         *
         *   x,y,z - the 3 elements of the new vector.
         *
         * Returns:
         *
         * A new vector containing with the given argument values.
         */

        V3.$ = function V3_$(x, y, z) {
            return new MJS_FLOAT_ARRAY_TYPE([x, y, z]);
        };
    }

    V3.u = V3.x;
    V3.v = V3.y;

    V3.getX = function V3_getX(a) {
        return a[0];
    }
    V3.getY = function V3_getY(a) {
        return a[1];
    }
    V3.getZ = function V3_getZ(a) {
        return a[2];
    }
    V3.setX = function V3_setX(x, a) {
        return new MJS_FLOAT_ARRAY_TYPE([x, a[1], a[2]]);
    }
    V3.setY = function V3_setY(y, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], y, a[2]]);
    }
    V3.setZ = function V3_setZ(z, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], a[1], z]);
    }

    V3.toTuple3 = function V3_toTuple3(a) {
      return {
        ctor:"_Tuple3",
        _0:a[0],
        _1:a[1],
        _2:a[2]
      };
    };
    V3.fromTuple3 = function V3_fromTuple3(t) {
      return new MJS_FLOAT_ARRAY_TYPE([t._0, t._1, t._2]);
    };

    V3.toRecord3 = function V3_toRecord3(a) {
      return {
        _:{},
        x:a[0],
        y:a[1],
        z:a[2]
      };
    };
    V3.fromRecord3 = function V3_fromRecord3(r) {
      return new MJS_FLOAT_ARRAY_TYPE([r.x, r.y, r.z]);
    };

    /*
     * Function: V3.add
     *
     * Perform r = a + b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.add = function V3_add(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] + b[0];
        r[1] = a[1] + b[1];
        r[2] = a[2] + b[2];
        return r;
    };

    /*
     * Function: V3.sub
     *
     * Perform
     * r = a - b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.sub = function V3_sub(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        r[2] = a[2] - b[2];
        return r;
    };

    /*
     * Function: V3.neg
     *
     * Perform
     * r = - a.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.neg = function V3_neg(a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = - a[0];
        r[1] = - a[1];
        r[2] = - a[2];
        return r;
    };

    /*
     * Function: V3.direction
     *
     * Perform
     * r = (a - b) / |a - b|.  The result is the normalized
     * direction from a to b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.direction = function V3_direction(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        return V3.normalize(V3.sub(a, b, r), r);
    };

    /*
     * Function: V3.length
     *
     * Perform r = |a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *
     * Returns:
     *
     *   The length of the given vector.
     */
    V3.length = function V3_length(a) {
        //MathUtils_assert(a.length == 3, "a.length == 3");

        return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);
    };

    /*
     * Function: V3.lengthSquard
     *
     * Perform r = |a|*|a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *
     * Returns:
     *
     *   The square of the length of the given vector.
     */
    V3.lengthSquared = function V3_lengthSquared(a) {
        //MathUtils_assert(a.length == 3, "a.length == 3");

        return a[0]*a[0] + a[1]*a[1] + a[2]*a[2];
    };

    V3.distance = function V3_distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };

    V3.distanceSquared = function V3_distanceSquared(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        return dx * dx + dy * dy + dz * dz;
    };

    /*
     * Function: V3.normalize
     *
     * Perform r = a / |a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.normalize = function V3_normalize(a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        var im = 1.0 / V3.length(a);
        r[0] = a[0] * im;
        r[1] = a[1] * im;
        r[2] = a[2] * im;
        return r;
    };

    /*
     * Function: V3.scale
     *
     * Perform r = k * a.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   k - a scalar value
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.scale = function V3_scale(k, a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] * k;
        r[1] = a[1] * k;
        r[2] = a[2] * k;
        return r;
    };

    /*
     * Function: V3.dot
     *
     * Perform
     * r = dot(a, b).
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *
     * Returns:
     *
     *   The dot product of a and b.
     */
    V3.dot = function V3_dot(a, b) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");

        return a[0] * b[0] +
            a[1] * b[1] +
            a[2] * b[2];
    };

    /*
     * Function: V3.cross
     *
     * Perform r = a x b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.cross = function V3_cross(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[1]*b[2] - a[2]*b[1];
        r[1] = a[2]*b[0] - a[0]*b[2];
        r[2] = a[0]*b[1] - a[1]*b[0];
        return r;
    };

    /*
     * Function: V3.mul4x4
     *
     * Perform
     * r = m * v.
     *
     * Parameters:
     *
     *   m - the 4x4 matrix operand
     *   v - the 3-element vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     *   The 4-element result vector is divided by the w component
     *   and returned as a 3-element vector.
     */
    V3.mul4x4 = function V3_mul4x4(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        var w;
        var tmp = V3._temp1;
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        tmp[0] = m[ 3];
        tmp[1] = m[ 7];
        tmp[2] = m[11];
        w    =  V3.dot(v, tmp) + m[15];
        tmp[0] = m[ 0];
        tmp[1] = m[ 4];
        tmp[2] = m[ 8];
        r[0] = (V3.dot(v, tmp) + m[12])/w;
        tmp[0] = m[ 1];
        tmp[1] = m[ 5];
        tmp[2] = m[ 9];
        r[1] = (V3.dot(v, tmp) + m[13])/w;
        tmp[0] = m[ 2];
        tmp[1] = m[ 6];
        tmp[2] = m[10];
        r[2] = (V3.dot(v, tmp) + m[14])/w;
        return r;
    };

    /*
     * Class: M4x4
     *
     * Methods for working with 4x4 matrices.  A matrix is represented by a 16-element array
     * in column-major order.  Any valid JavaScript array type may be used, but if new
     * matrices are created they are created using the configured MJS_FLOAT_ARRAY_TYPE.
     */

    var M4x4 = { };

    M4x4._temp1 = new MJS_FLOAT_ARRAY_TYPE(16);
    M4x4._temp2 = new MJS_FLOAT_ARRAY_TYPE(16);

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        M4x4.I = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0];

        M4x4.$ = function M4x4_$(m00, m01, m02, m03,
                m04, m05, m06, m07,
                m08, m09, m10, m11,
                m12, m13, m14, m15)
        {
            return [m00, m01, m02, m03,
            m04, m05, m06, m07,
            m08, m09, m10, m11,
            m12, m13, m14, m15];
        };
    } else {
        M4x4.I = new MJS_FLOAT_ARRAY_TYPE([1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0]);

        /*
         * Function: M4x4.$
         *
         * Creates a new 4x4 matrix with the given values.
         *
         * Parameters:
         *
         *   m00..m15 - the 16 elements of the new matrix.
         *
         * Returns:
         *
         * A new matrix filled with the given argument values.
         */
        M4x4.$ = function M4x4_$(m00, m01, m02, m03,
                m04, m05, m06, m07,
                m08, m09, m10, m11,
                m12, m13, m14, m15)
        {
            return new MJS_FLOAT_ARRAY_TYPE([m00, m01, m02, m03,
                    m04, m05, m06, m07,
                    m08, m09, m10, m11,
                    m12, m13, m14, m15]);
        };
    }

    M4x4.identity = M4x4.I;

    /*
     * Function: M4x4.topLeft3x3
     *
     * Return the top left 3x3 matrix from the given 4x4 matrix m.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 3x3 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3x3 matrix with the result.
     */
    M4x4.topLeft3x3 = function M4x4_topLeft3x3(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 9, "r == undefined || r.length == 9");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(9);
        r[0] = m[0]; r[1] = m[1]; r[2] = m[2];
        r[3] = m[4]; r[4] = m[5]; r[5] = m[6];
        r[6] = m[8]; r[7] = m[9]; r[8] = m[10];
        return r;
    };

    /*
     * Function: M4x4.inverseOrthonormal
     *
     * Computes the inverse of the given matrix m, assuming that
     * the matrix is orthonormal.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.inverseOrthonormal = function M4x4_inverseOrthonormal(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(m != r, "m != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        M4x4.transpose(m, r);
        var t = [m[12], m[13], m[14]];
        r[3] = r[7] = r[11] = 0;
        r[12] = -V3.dot([r[0], r[4], r[8]], t);
        r[13] = -V3.dot([r[1], r[5], r[9]], t);
        r[14] = -V3.dot([r[2], r[6], r[10]], t);
        return r;
    };

    /*
     * Function: M4x4.inverseTo3x3
     *
     * Computes the inverse of the given matrix m, but calculates
     * only the top left 3x3 values of the result.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 3x3 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3x3 matrix with the result.
     */
    M4x4.inverseTo3x3 = function M4x4_inverseTo3x3(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 9, "r == undefined || r.length == 9");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(9);

        var a11 = m[10]*m[5]-m[6]*m[9],
            a21 = -m[10]*m[1]+m[2]*m[9],
            a31 = m[6]*m[1]-m[2]*m[5],
            a12 = -m[10]*m[4]+m[6]*m[8],
            a22 = m[10]*m[0]-m[2]*m[8],
            a32 = -m[6]*m[0]+m[2]*m[4],
            a13 = m[9]*m[4]-m[5]*m[8],
            a23 = -m[9]*m[0]+m[1]*m[8],
            a33 = m[5]*m[0]-m[1]*m[4];
        var det = m[0]*(a11) + m[1]*(a12) + m[2]*(a13);
        if (det == 0) // no inverse
            throw "matrix not invertible";
        var idet = 1.0 / det;

        r[0] = idet*a11;
        r[1] = idet*a21;
        r[2] = idet*a31;
        r[3] = idet*a12;
        r[4] = idet*a22;
        r[5] = idet*a32;
        r[6] = idet*a13;
        r[7] = idet*a23;
        r[8] = idet*a33;

        return r;
    };

    /*
     * Function: M4x4.makeFrustum
     *
     * Creates a matrix for a projection frustum with the given parameters.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   znear - the near z distance of the frustum
     *   zfar - the far z distance of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeFrustum = function M4x4_makeFrustum(left, right, bottom, top, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var X = 2*znear/(right-left);
        var Y = 2*znear/(top-bottom);
        var A = (right+left)/(right-left);
        var B = (top+bottom)/(top-bottom);
        var C = -(zfar+znear)/(zfar-znear);
        var D = -2*zfar*znear/(zfar-znear);

        r[0] = 2*znear/(right-left);
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 2*znear/(top-bottom);
        r[6] = 0;
        r[7] = 0;
        r[8] = (right+left)/(right-left);
        r[9] = (top+bottom)/(top-bottom);
        r[10] = -(zfar+znear)/(zfar-znear);
        r[11] = -1;
        r[12] = 0;
        r[13] = 0;
        r[14] = -2*zfar*znear/(zfar-znear);
        r[15] = 0;

        return r;
    };

    /*
     * Function: M4x4.makePerspective
     *
     * Creates a matrix for a perspective projection with the given parameters.
     *
     * Parameters:
     *
     *   fovy - field of view in the y axis, in degrees
     *   aspect - aspect ratio
     *   znear - the near z distance of the projection
     *   zfar - the far z distance of the projection
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makePerspective = function M4x4_makePerspective (fovy, aspect, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
        var ymin = -ymax;
        var xmin = ymin * aspect;
        var xmax = ymax * aspect;

        return M4x4.makeFrustum(xmin, xmax, ymin, ymax, znear, zfar, r);
    };

    /*
     * Function: M4x4.makeOrtho
     *
     * Creates a matrix for an orthogonal frustum projection with the given parameters.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   znear - the near z distance of the frustum
     *   zfar - the far z distance of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeOrtho = function M4x4_makeOrtho (left, right, bottom, top, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var tX = -(right+left)/(right-left);
        var tY = -(top+bottom)/(top-bottom);
        var tZ = -(zfar+znear)/(zfar-znear);
        var X = 2 / (right-left);
        var Y = 2 / (top-bottom);
        var Z = -2 / (zfar-znear);

        r[0] = 2 / (right-left);
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 2 / (top-bottom);
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = -2 / (zfar-znear);
        r[11] = 0;
        r[12] = -(right+left)/(right-left);
        r[13] = -(top+bottom)/(top-bottom);
        r[14] = -(zfar+znear)/(zfar-znear);
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeOrtho2D
     *
     * Creates a matrix for a 2D orthogonal frustum projection with the given parameters.
     * znear and zfar are assumed to be -1 and 1, respectively.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeOrtho2D = function M4x4_makeOrtho2D (left, right, bottom, top, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeOrtho(left, right, bottom, top, -1, 1, r);
    };

    /*
     * Function: M4x4.mul
     *
     * Performs r = a * b.
     *
     * Parameters:
     *
     *   a - the first matrix operand
     *   b - the second matrix operand
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.mul = function M4x4_mul(a, b, r) {
        //MathUtils_assert(a.length == 16, "a.length == 16");
        //MathUtils_assert(b.length == 16, "b.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(a != r && b != r, "a != r && b != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var a11 = a[0];
        var a21 = a[1];
        var a31 = a[2];
        var a41 = a[3];
        var a12 = a[4];
        var a22 = a[5];
        var a32 = a[6];
        var a42 = a[7];
        var a13 = a[8];
        var a23 = a[9];
        var a33 = a[10];
        var a43 = a[11];
        var a14 = a[12];
        var a24 = a[13];
        var a34 = a[14];
        var a44 = a[15];

        var b11 = b[0];
        var b21 = b[1];
        var b31 = b[2];
        var b41 = b[3];
        var b12 = b[4];
        var b22 = b[5];
        var b32 = b[6];
        var b42 = b[7];
        var b13 = b[8];
        var b23 = b[9];
        var b33 = b[10];
        var b43 = b[11];
        var b14 = b[12];
        var b24 = b[13];
        var b34 = b[14];
        var b44 = b[15];

        r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
        r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
        r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
        r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return r;
    };

    /*
     * Function: M4x4.mulAffine
     *
     * Performs r = a * b, assuming a and b are affine (elements 3,7,11,15 = 0,0,0,1)
     *
     * Parameters:
     *
     *   a - the first matrix operand
     *   b - the second matrix operand
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.mulAffine = function M4x4_mulAffine(a, b, r) {
        //MathUtils_assert(a.length == 16, "a.length == 16");
        //MathUtils_assert(b.length == 16, "b.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(a != r && b != r, "a != r && b != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        var a11 = a[0];
        var a21 = a[1];
        var a31 = a[2];
        var a12 = a[4];
        var a22 = a[5];
        var a32 = a[6];
        var a13 = a[8];
        var a23 = a[9];
        var a33 = a[10];
        var a14 = a[12];
        var a24 = a[13];
        var a34 = a[14];

        var b11 = b[0];
        var b21 = b[1];
        var b31 = b[2];
        var b12 = b[4];
        var b22 = b[5];
        var b32 = b[6];
        var b13 = b[8];
        var b23 = b[9];
        var b33 = b[10];
        var b14 = b[12];
        var b24 = b[13];
        var b34 = b[14];

        r[0] = a11 * b11 + a12 * b21 + a13 * b31;
        r[1] = a21 * b11 + a22 * b21 + a23 * b31;
        r[2] = a31 * b11 + a32 * b21 + a33 * b31;
        r[3] = 0;
        r[4] = a11 * b12 + a12 * b22 + a13 * b32;
        r[5] = a21 * b12 + a22 * b22 + a23 * b32;
        r[6] = a31 * b12 + a32 * b22 + a33 * b32;
        r[7] = 0;
        r[8] = a11 * b13 + a12 * b23 + a13 * b33;
        r[9] = a21 * b13 + a22 * b23 + a23 * b33;
        r[10] = a31 * b13 + a32 * b23 + a33 * b33;
        r[11] = 0;
        r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
        r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
        r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeRotate
     *
     * Creates a transformation matrix for rotation by angle radians about the 3-element vector axis.
     *
     * Parameters:
     *
     *   angle - the angle of rotation, in radians
     *   axis - the axis around which the rotation is performed, a 3-element vector
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeRotate = function M4x4_makeRotate(angle, axis, r) {
        //MathUtils_assert(angle.length == 3, "angle.length == 3");
        //MathUtils_assert(axis.length == 3, "axis.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        axis = V3.normalize(axis, V3._temp1);
        var x = axis[0], y = axis[1], z = axis[2];
        var c = Math.cos(angle);
        var c1 = 1-c;
        var s = Math.sin(angle);

        r[0] = x*x*c1+c;
        r[1] = y*x*c1+z*s;
        r[2] = z*x*c1-y*s;
        r[3] = 0;
        r[4] = x*y*c1-z*s;
        r[5] = y*y*c1+c;
        r[6] = y*z*c1+x*s;
        r[7] = 0;
        r[8] = x*z*c1+y*s;
        r[9] = y*z*c1-x*s;
        r[10] = z*z*c1+c;
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.rotate
     *
     * Concatenates a rotation of angle radians about the axis to the give matrix m.
     *
     * Parameters:
     *
     *   angle - the angle of rotation, in radians
     *   axis - the axis around which the rotation is performed, a 3-element vector
     *   m - the matrix to concatenate the rotation to
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.rotate = function M4x4_rotate(angle, axis, m, r) {
        //MathUtils_assert(angle.length == 3, "angle.length == 3");
        //MathUtils_assert(axis.length == 3, "axis.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        var a0=axis [0], a1=axis [1], a2=axis [2];
        var l = Math.sqrt(a0*a0 + a1*a1 + a2*a2);
        var x = a0, y = a1, z = a2;
        if (l != 1.0) {
            var im = 1.0 / l;
            x *= im;
            y *= im;
            z *= im;
        }
        var c = Math.cos(angle);
        var c1 = 1-c;
        var s = Math.sin(angle);
        var xs = x*s;
        var ys = y*s;
        var zs = z*s;
        var xyc1 = x * y * c1;
        var xzc1 = x * z * c1;
        var yzc1 = y * z * c1;

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];

        var t11 = x * x * c1 + c;
        var t21 = xyc1 + zs;
        var t31 = xzc1 - ys;
        var t12 = xyc1 - zs;
        var t22 = y * y * c1 + c;
        var t32 = yzc1 + xs;
        var t13 = xzc1 + ys;
        var t23 = yzc1 - xs;
        var t33 = z * z * c1 + c;

        r[0] = m11 * t11 + m12 * t21 + m13 * t31;
        r[1] = m21 * t11 + m22 * t21 + m23 * t31;
        r[2] = m31 * t11 + m32 * t21 + m33 * t31;
        r[3] = m41 * t11 + m42 * t21 + m43 * t31;
        r[4] = m11 * t12 + m12 * t22 + m13 * t32;
        r[5] = m21 * t12 + m22 * t22 + m23 * t32;
        r[6] = m31 * t12 + m32 * t22 + m33 * t32;
        r[7] = m41 * t12 + m42 * t22 + m43 * t32;
        r[8] = m11 * t13 + m12 * t23 + m13 * t33;
        r[9] = m21 * t13 + m22 * t23 + m23 * t33;
        r[10] = m31 * t13 + m32 * t23 + m33 * t33;
        r[11] = m41 * t13 + m42 * t23 + m43 * t33;
        if (r != m) {
            r[12] = m[12];
            r[13] = m[13];
            r[14] = m[14];
            r[15] = m[15];
        }
        return r;
    };

    /*
     * Function: M4x4.makeScale3
     *
     * Creates a transformation matrix for scaling by 3 scalar values, one for
     * each of the x, y, and z directions.
     *
     * Parameters:
     *
     *   x - the scale for the x axis
     *   y - the scale for the y axis
     *   z - the scale for the z axis
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale3 = function M4x4_makeScale3(x, y, z, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = x;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = y;
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = z;
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeScale1
     *
     * Creates a transformation matrix for a uniform scale by a single scalar value.
     *
     * Parameters:
     *
     *   k - the scale factor
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale1 = function M4x4_makeScale1(k, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeScale3(k, k, k, r);
    };

    /*
     * Function: M4x4.makeScale
     *
     * Creates a transformation matrix for scaling each of the x, y, and z axes by the amount
     * given in the corresponding element of the 3-element vector.
     *
     * Parameters:
     *
     *   v - the 3-element vector containing the scale factors
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale = function M4x4_makeScale(v, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeScale3(v[0], v[1], v[2], r);
    };

    /*
     * Function: M4x4.scale3
     */
    M4x4.scale3 = function M4x4_scale3(x, y, z, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == m) {
            m[0] *= x;
            m[1] *= x;
            m[2] *= x;
            m[3] *= x;
            m[4] *= y;
            m[5] *= y;
            m[6] *= y;
            m[7] *= y;
            m[8] *= z;
            m[9] *= z;
            m[10] *= z;
            m[11] *= z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0] * x;
        r[1] = m[1] * x;
        r[2] = m[2] * x;
        r[3] = m[3] * x;
        r[4] = m[4] * y;
        r[5] = m[5] * y;
        r[6] = m[6] * y;
        r[7] = m[7] * y;
        r[8] = m[8] * z;
        r[9] = m[9] * z;
        r[10] = m[10] * z;
        r[11] = m[11] * z;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.scale1
     */
    M4x4.scale1 = function M4x4_scale1(k, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        if (r == m) {
            m[0] *= k;
            m[1] *= k;
            m[2] *= k;
            m[3] *= k;
            m[4] *= k;
            m[5] *= k;
            m[6] *= k;
            m[7] *= k;
            m[8] *= k;
            m[9] *= k;
            m[10] *= k;
            m[11] *= k;
            return m;
        }


        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0] * k;
        r[1] = m[1] * k;
        r[2] = m[2] * k;
        r[3] = m[3] * k;
        r[4] = m[4] * k;
        r[5] = m[5] * k;
        r[6] = m[6] * k;
        r[7] = m[7] * k;
        r[8] = m[8] * k;
        r[9] = m[9] * k;
        r[10] = m[10] * k;
        r[11] = m[11] * k;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.scale1
     */
    M4x4.scale = function M4x4_scale(v, m, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        var x = v[0], y = v[1], z = v[2];

        if (r == m) {
            m[0] *= x;
            m[1] *= x;
            m[2] *= x;
            m[3] *= x;
            m[4] *= y;
            m[5] *= y;
            m[6] *= y;
            m[7] *= y;
            m[8] *= z;
            m[9] *= z;
            m[10] *= z;
            m[11] *= z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);


        r[0] = m[0] * x;
        r[1] = m[1] * x;
        r[2] = m[2] * x;
        r[3] = m[3] * x;
        r[4] = m[4] * y;
        r[5] = m[5] * y;
        r[6] = m[6] * y;
        r[7] = m[7] * y;
        r[8] = m[8] * z;
        r[9] = m[9] * z;
        r[10] = m[10] * z;
        r[11] = m[11] * z;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.makeTranslate3
     */
    M4x4.makeTranslate3 = function M4x4_makeTranslate3(x, y, z, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = 1;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 1;
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = 1;
        r[11] = 0;
        r[12] = x;
        r[13] = y;
        r[14] = z;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeTranslate1
     */
    M4x4.makeTranslate1 = function M4x4_makeTranslate1 (k, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeTranslate3(k, k, k, r);
    };

    /*
     * Function: M4x4.makeTranslate
     */
    M4x4.makeTranslate = function M4x4_makeTranslate (v, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeTranslate3(v[0], v[1], v[2], r);
    };

    /*
     * Function: M4x4.translate3Self
     */
    M4x4.translate3Self = function M4x4_translate3Self (x, y, z, m) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        m[12] += m[0] * x + m[4] * y + m[8] * z;
        m[13] += m[1] * x + m[5] * y + m[9] * z;
        m[14] += m[2] * x + m[6] * y + m[10] * z;
        m[15] += m[3] * x + m[7] * y + m[11] * z;
        return m;
    };

    /*
     * Function: M4x4.translate3
     */
    M4x4.translate3 = function M4x4_translate3 (x, y, z, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == m) {
            m[12] += m[0] * x + m[4] * y + m[8] * z;
            m[13] += m[1] * x + m[5] * y + m[9] * z;
            m[14] += m[2] * x + m[6] * y + m[10] * z;
            m[15] += m[3] * x + m[7] * y + m[11] * z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];


        r[0] = m11;
        r[1] = m21;
        r[2] = m31;
        r[3] = m41;
        r[4] = m12;
        r[5] = m22;
        r[6] = m32;
        r[7] = m42;
        r[8] = m13;
        r[9] = m23;
        r[10] = m33;
        r[11] = m43;
        r[12] = m11 * x + m12 * y + m13 * z + m[12];
        r[13] = m21 * x + m22 * y + m23 * z + m[13];
        r[14] = m31 * x + m32 * y + m33 * z + m[14];
        r[15] = m41 * x + m42 * y + m43 * z + m[15];

        return r;
    };

    /*
     * Function: M4x4.translate1
     */
    M4x4.translate1 = function M4x4_translate1 (k, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.translate3(k, k, k, m, r);
    };
    /*
     * Function: M4x4.translateSelf
     */
    M4x4.translateSelf = function M4x4_translateSelf (v, m) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        var x=v[0], y=v[1], z=v[2];
        m[12] += m[0] * x + m[4] * y + m[8] * z;
        m[13] += m[1] * x + m[5] * y + m[9] * z;
        m[14] += m[2] * x + m[6] * y + m[10] * z;
        m[15] += m[3] * x + m[7] * y + m[11] * z;
        return m;
    };
    /*
     * Function: M4x4.translate
     */
    M4x4.translate = function M4x4_translate (v, m, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        var x=v[0], y=v[1], z=v[2];
        if (r == m) {
            m[12] += m[0] * x + m[4] * y + m[8] * z;
            m[13] += m[1] * x + m[5] * y + m[9] * z;
            m[14] += m[2] * x + m[6] * y + m[10] * z;
            m[15] += m[3] * x + m[7] * y + m[11] * z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];

        r[0] = m11;
        r[1] = m21;
        r[2] = m31;
        r[3] = m41;
        r[4] = m12;
        r[5] = m22;
        r[6] = m32;
        r[7] = m42;
        r[8] = m13;
        r[9] = m23;
        r[10] = m33;
        r[11] = m43;
        r[12] = m11 * x + m12 * y + m13 * z + m[12];
        r[13] = m21 * x + m22 * y + m23 * z + m[13];
        r[14] = m31 * x + m32 * y + m33 * z + m[14];
        r[15] = m41 * x + m42 * y + m43 * z + m[15];

        return r;
    };

    /*
     * Function: M4x4.makeLookAt
     */
    M4x4.makeLookAt = function M4x4_makeLookAt (eye, center, up, r) {
        //MathUtils_assert(eye.length == 3, "eye.length == 3");
        //MathUtils_assert(center.length == 3, "center.length == 3");
        //MathUtils_assert(up.length == 3, "up.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        var z = V3.direction(eye, center, V3._temp1);
        var x = V3.normalize(V3.cross(up, z, V3._temp2), V3._temp2);
        var y = V3.normalize(V3.cross(z, x, V3._temp3), V3._temp3);

        var tm1 = M4x4._temp1;
        var tm2 = M4x4._temp2;

        tm1[0] = x[0];
        tm1[1] = y[0];
        tm1[2] = z[0];
        tm1[3] = 0;
        tm1[4] = x[1];
        tm1[5] = y[1];
        tm1[6] = z[1];
        tm1[7] = 0;
        tm1[8] = x[2];
        tm1[9] = y[2];
        tm1[10] = z[2];
        tm1[11] = 0;
        tm1[12] = 0;
        tm1[13] = 0;
        tm1[14] = 0;
        tm1[15] = 1;

        tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
        tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
        tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
        tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        return M4x4.mul(tm1, tm2, r);
    };

    /*
     * Function: M4x4.transposeSelf
     */
    M4x4.transposeSelf = function M4x4_transposeSelf (m) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        var tmp = m[1]; m[1] = m[4]; m[4] = tmp;
        tmp = m[2]; m[2] = m[8]; m[8] = tmp;
        tmp = m[3]; m[3] = m[12]; m[12] = tmp;
        tmp = m[6]; m[6] = m[9]; m[9] = tmp;
        tmp = m[7]; m[7] = m[13]; m[13] = tmp;
        tmp = m[11]; m[11] = m[14]; m[14] = tmp;
        return m;
    };
    /*
     * Function: M4x4.transpose
     */
    M4x4.transpose = function M4x4_transpose (m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (m == r) {
            var tmp = 0.0;
            tmp = m[1]; m[1] = m[4]; m[4] = tmp;
            tmp = m[2]; m[2] = m[8]; m[8] = tmp;
            tmp = m[3]; m[3] = m[12]; m[12] = tmp;
            tmp = m[6]; m[6] = m[9]; m[9] = tmp;
            tmp = m[7]; m[7] = m[13]; m[13] = tmp;
            tmp = m[11]; m[11] = m[14]; m[14] = tmp;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
        r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
        r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
        r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

        return r;
    };


    /*
     * Function: M4x4.transformPoint
     */
    M4x4.transformPoint = function M4x4_transformPoint (m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];

        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2 + m[12];
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2 + m[13];
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2 + m[14];
        var w = m[3] * v0 + m[7] * v1 + m[11] * v2 + m[15];

        if (w != 1.0) {
            r[0] /= w;
            r[1] /= w;
            r[2] /= w;
        }

        return r;
    };

    /*
     * Function: M4x4.transformLine
     */
    M4x4.transformLine = function M4x4_transformLine(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];
        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2;
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2;
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2;
        var w = m[3] * v0 + m[7] * v1 + m[11] * v2;

        if (w != 1.0) {
            r[0] /= w;
            r[1] /= w;
            r[2] /= w;
        }

        return r;
    };


    /*
     * Function: M4x4.transformPointAffine
     */
    M4x4.transformPointAffine = function M4x4_transformPointAffine (m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];

        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2 + m[12];
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2 + m[13];
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2 + m[14];

        return r;
    };

    /*
     * Function: M4x4.transformLineAffine
     */
    M4x4.transformLineAffine = function M4x4_transformLineAffine(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];
        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2;
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2;
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2;

        return r;
    };

    M4x4.makeBasis = function M4x4_makeBasis(vx,vy,vz) {
        
        var r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = vx[0];
        r[1] = vx[1];
        r[2] = vx[2];
        r[3] = 0;
        r[4] = vy[0];
        r[5] = vy[1];
        r[6] = vy[2];
        r[7] = 0;
        r[8] = vz[0];
        r[9] = vz[1];
        r[10] = vz[2];
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;

    };

    return { 
        vec3: F3(V3.$),
        v3getX: V3.getX,
        v3getY: V3.getY,
        v3getZ: V3.getZ,
        v3setX: F2(V3.setX),
        v3setY: F2(V3.setY),
        v3setZ: F2(V3.setZ),
        toTuple3: V3.toTuple3,
        toRecord3: V3.toRecord3,
        fromTuple3: V3.fromTuple3,
        fromRecord3: V3.fromRecord3,
        v3add: F2(V3.add),
        v3sub: F2(V3.sub),
        v3neg: V3.neg,
        v3direction: F2(V3.direction),
        v3length: V3.length,
        v3lengthSquared: V3.lengthSquared,
        v3distance: F2(V3.distance),
        v3distanceSquared: F2(V3.distanceSquared),
        v3normalize: V3.normalize,
        v3scale: F2(V3.scale),
        v3dot: F2(V3.dot),
        v3cross: F2(V3.cross),
        v3mul4x4: F2(V3.mul4x4),
        m4x4identity: M4x4.identity,
        m4x4topLeft3x3: M4x4.topLeft3x3,
        m4x4inverseOrthonormal: M4x4.inverseOrthonormal,
        m4x4inverseTo3x3: M4x4.inverseTo3x3,
        m4x4makeFrustum: F6(M4x4.makeFrustum),
        m4x4makePerspective: F4(M4x4.makePerspective),
        m4x4makeOrtho: F6(M4x4.makeOrtho),
        m4x4makeOrtho2D: F4(M4x4.makeOrtho2D),
        m4x4mul: F2(M4x4.mul),
        m4x4Affine: F2(M4x4.mulAffine),
        m4x4makeRotate: F2(M4x4.makeRotate),
        m4x4rotate: F3(M4x4.rotate),
        m4x4makeScale3: F3(M4x4.makeScale3),
        m4x4makeScale1: M4x4.makeScale1,
        m4x4makeScale: M4x4.makeScale,
        m4x4scale3: F4(M4x4.scale3),
        m4x4scale: F2(M4x4.scale),
        m4x4makeTranslate3: F3(M4x4.makeTranslate3),
        m4x4makeTranslate: M4x4.makeTranslate,
        m4x4translate3: F4(M4x4.translate3),
        m4x4translate: F2(M4x4.translate),
        m4x4makeLookAt: F3(M4x4.makeLookAt),
        m4x4transpose: M4x4.transpose,
        m4x4transformPoint: F2(M4x4.transformPoint),
        m4x4makeBasis: F3(M4x4.makeBasis)
    };

};

Elm.Native.Ports = {};
Elm.Native.Ports.make = function(localRuntime) {
    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Ports = localRuntime.Native.Ports || {};
    if (localRuntime.Native.Ports.values) {
        return localRuntime.Native.Ports.values;
    }

    var Signal;

    function incomingSignal(converter) {
        converter.isSignal = true;
        return converter;
    }

    function outgoingSignal(converter) {
        if (!Signal) {
            Signal = Elm.Signal.make(localRuntime);
        }
        return function(signal) {
            var subscribers = []
            function subscribe(handler) {
                subscribers.push(handler);
            }
            function unsubscribe(handler) {
                subscribers.pop(subscribers.indexOf(handler));
            }
            A2( Signal.map, function(value) {
                var val = converter(value);
                var len = subscribers.length;
                for (var i = 0; i < len; ++i) {
                    subscribers[i](val);
                }
            }, signal);
            return { subscribe:subscribe, unsubscribe:unsubscribe };
        }
    }

    function portIn(name, converter) {
        var jsValue = localRuntime.ports.incoming[name];
        if (jsValue === undefined) {
            throw new Error("Initialization Error: port '" + name +
                            "' was not given an input!");
        }
        localRuntime.ports.uses[name] += 1;
        try {
            var elmValue = converter(jsValue);
        } catch(e) {
            throw new Error("Initialization Error on port '" + name + "': \n" + e.message);
        }

        // just return a static value if it is not a signal
        if (!converter.isSignal) {
            return elmValue;
        }

        // create a signal if necessary
        if (!Signal) {
            Signal = Elm.Signal.make(localRuntime);
        }
        var signal = Signal.constant(elmValue);
        function send(jsValue) {
            try {
                var elmValue = converter(jsValue);
            } catch(e) {
                throw new Error("Error sending to port '" + name + "': \n" + e.message);
            }
            setTimeout(function() {
                localRuntime.notify(signal.id, elmValue);
            }, 0);
        }
        localRuntime.ports.outgoing[name] = { send:send };
        return signal;
    }

    function portOut(name, converter, value) {
        try {
            localRuntime.ports.outgoing[name] = converter(value);
        } catch(e) {
            throw new Error("Initialization Error on port '" + name + "': \n" + e.message);
        }
        return value;
    }

    return localRuntime.Native.Ports.values = {
        incomingSignal: incomingSignal,
        outgoingSignal: outgoingSignal,
        portOut: portOut,
        portIn: portIn
    };
};



if (!Elm.fullscreen) {

    (function() {
        'use strict';

        var Display = { FULLSCREEN: 0, COMPONENT: 1, NONE: 2 };

        Elm.fullscreen = function(module, ports) {
            var container = document.createElement('div');
            document.body.appendChild(container);
            return init(Display.FULLSCREEN, container, module, ports || {});
        };

        Elm.embed = function(module, container, ports) {
            var tag = container.tagName;
            if (tag !== 'DIV') {
                throw new Error('Elm.node must be given a DIV, not a ' + tag + '.');
            } else if (container.hasChildNodes()) {
                throw new Error('Elm.node must be given an empty DIV. No children allowed!');
            }
            return init(Display.COMPONENT, container, module, ports || {});
        };

        Elm.worker = function(module, ports) {
            return init(Display.NONE, {}, module, ports || {});
        };

        function init(display, container, module, ports, moduleToReplace) {
            // defining state needed for an instance of the Elm RTS
            var inputs = [];

            /* OFFSET
             * Elm's time traveling debugger lets you interrupt the smooth flow of time
             * by pausing and continuing program execution. To ensure the user sees a
             * program that moves smoothly through the pause/continue time gap,
             * we need to adjsut the value of Date.now().
             */
            var timer = function() {
                var inducedDelay = 0;

                var now = function() {
                    return Date.now() - inducedDelay;
                };

                var addDelay = function(d) {
                    inducedDelay += d;
                    return inducedDelay;
                };

                return {
                    now : now,
                    addDelay : addDelay
                }
            }();

            var updateInProgress = false;
            function notify(id, v) {
                if (updateInProgress) {
                    throw new Error(
                        'The notify function has been called synchronously!\n' +
                        'This can lead to frames being dropped.\n' +
                        'Definitely report this to <https://github.com/elm-lang/Elm/issues>\n');
                }
                updateInProgress = true;
                var timestep = timer.now();
                for (var i = inputs.length; i--; ) {
                    inputs[i].recv(timestep, id, v);
                }
                updateInProgress = false;
            }
            function setTimeout(func, delay) {
                window.setTimeout(func, delay);
            }

            var listeners = [];
            function addListener(relevantInputs, domNode, eventName, func) {
                domNode.addEventListener(eventName, func);
                var listener = {
                    relevantInputs: relevantInputs,
                    domNode: domNode,
                    eventName: eventName,
                    func: func
                };
                listeners.push(listener);
            }

            var portUses = {}
            for (var key in ports) {
                portUses[key] = 0;
            }
            // create the actual RTS. Any impure modules will attach themselves to this
            // object. This permits many Elm programs to be embedded per document.
            var elm = {
                notify: notify,
                setTimeout: setTimeout,
                node: container,
                addListener: addListener,
                inputs: inputs,
                timer: timer,
                ports: { incoming:ports, outgoing:{}, uses:portUses },

                isFullscreen: function() { return display === Display.FULLSCREEN; },
                isEmbed: function() { return display === Display.COMPONENT; },
                isWorker: function() { return display === Display.NONE; }
            };

            function swap(newModule) {
                removeListeners(listeners);
                var div = document.createElement('div');
                var newElm = init(display, div, newModule, ports, elm);
                inputs = [];
                // elm.swap = newElm.swap;
                return newElm;
            }

            function dispose() {
                removeListeners(listeners);
                inputs = [];
            }

            var Module = {};
            try {
                Module = module.make(elm);
                checkPorts(elm);
            } catch(e) {
                var code = document.createElement('code');

                var lines = e.message.split('\n');
                code.appendChild(document.createTextNode(lines[0]));
                code.appendChild(document.createElement('br'));
                code.appendChild(document.createElement('br'));
                for (var i = 1; i < lines.length; ++i) {
                    code.appendChild(document.createTextNode('\u00A0 \u00A0 ' + lines[i]));
                    code.appendChild(document.createElement('br'));
                }
                code.appendChild(document.createElement('br'));
                code.appendChild(document.createTextNode("Open the developer console for more details."));

                container.appendChild(code);
                throw e;
            }
            inputs = filterDeadInputs(inputs);
            filterListeners(inputs, listeners);
            addReceivers(elm.ports.outgoing);
            if (display !== Display.NONE) {
                var graphicsNode = initGraphics(elm, Module);
            }
            if (typeof moduleToReplace !== 'undefined') {
                hotSwap(moduleToReplace, elm);

                // rerender scene if graphics are enabled.
                if (typeof graphicsNode !== 'undefined') {
                    graphicsNode.recv(0, true, 0);
                }
            }

            return {
                swap:swap,
                ports:elm.ports.outgoing,
                dispose:dispose
            };
        };

        function checkPorts(elm) {
            var portUses = elm.ports.uses;
            for (var key in portUses) {
                var uses = portUses[key]
                if (uses === 0) {
                    throw new Error(
                        "Initialization Error: provided port '" + key +
                        "' to a module that does not take it as in input.\n" +
                        "Remove '" + key + "' from the module initialization code.");
                } else if (uses > 1) {
                    throw new Error(
                        "Initialization Error: port '" + key +
                        "' has been declared multiple times in the Elm code.\n" +
                        "Remove declarations until there is exactly one.");
                }
            }
        }


        //// FILTER SIGNALS ////

        // TODO: move this code into the signal module and create a function
        // Signal.initializeGraph that actually instantiates everything.

        function filterListeners(inputs, listeners) {
            loop:
            for (var i = listeners.length; i--; ) {
                var listener = listeners[i];
                for (var j = inputs.length; j--; ) {
                    if (listener.relevantInputs.indexOf(inputs[j].id) >= 0) {
                        continue loop;
                    }
                }
                listener.domNode.removeEventListener(listener.eventName, listener.func);
            }
        }

        function removeListeners(listeners) {
            for (var i = listeners.length; i--; ) {
                var listener = listeners[i];
                listener.domNode.removeEventListener(listener.eventName, listener.func);
            }
        }

        // add receivers for built-in ports if they are defined
        function addReceivers(ports) {
            if ('log' in ports) {
                ports.log.subscribe(function(v) { console.log(v) });
            }
            if ('stdout' in ports) {
                var process = process || {};
                var handler = process.stdout
                    ? function(v) { process.stdout.write(v); }
                    : function(v) { console.log(v); };
                ports.stdout.subscribe(handler);
            }
            if ('stderr' in ports) {
                var process = process || {};
                var handler = process.stderr
                    ? function(v) { process.stderr.write(v); }
                    : function(v) { console.log('Error:' + v); };
                ports.stderr.subscribe(handler);
            }
            if ('title' in ports) {
                if (typeof ports.title === 'string') {
                    document.title = ports.title;
                } else {
                    ports.title.subscribe(function(v) { document.title = v; });
                }
            }
            if ('redirect' in ports) {
                ports.redirect.subscribe(function(v) {
                    if (v.length > 0) window.location = v;
                });
            }
            if ('favicon' in ports) {
                if (typeof ports.favicon === 'string') {
                    changeFavicon(ports.favicon);
                } else {
                    ports.favicon.subscribe(changeFavicon);
                }
            }
            function changeFavicon(src) {
                var link = document.createElement('link');
                var oldLink = document.getElementById('elm-favicon');
                link.id = 'elm-favicon';
                link.rel = 'shortcut icon';
                link.href = src;
                if (oldLink) {
                    document.head.removeChild(oldLink);
                }
                document.head.appendChild(link);
            }
        }


        function filterDeadInputs(inputs) {
            var temp = [];
            for (var i = inputs.length; i--; ) {
                if (isAlive(inputs[i])) temp.push(inputs[i]);
            }
            return temp;
        }


        function isAlive(input) {
            if (!('defaultNumberOfKids' in input)) return true;
            var len = input.kids.length;
            if (len === 0) return false;
            if (len > input.defaultNumberOfKids) return true;
            var alive = false;
            for (var i = len; i--; ) {
                alive = alive || isAlive(input.kids[i]);
            }
            return alive;
        }


        ////  RENDERING  ////

        function initGraphics(elm, Module) {
            if (!('main' in Module)) {
                throw new Error("'main' is missing! What do I display?!");
            }

            var signalGraph = Module.main;

            // make sure the signal graph is actually a signal & extract the visual model
            var Signal = Elm.Signal.make(elm);
            if (!('recv' in signalGraph)) {
                signalGraph = Signal.constant(signalGraph);
            }
            var initialScene = signalGraph.value;

            // Add the initialScene to the DOM
            var Element = Elm.Native.Graphics.Element.make(elm);
            elm.node.appendChild(Element.render(initialScene));

            var _requestAnimationFrame =
                typeof requestAnimationFrame !== 'undefined'
                    ? requestAnimationFrame
                    : function(cb) { setTimeout(cb, 1000/60); }
                    ;

            // domUpdate is called whenever the main Signal changes.
            //
            // domUpdate and drawCallback implement a small state machine in order
            // to schedule only 1 draw per animation frame. This enforces that
            // once draw has been called, it will not be called again until the
            // next frame.
            //
            // drawCallback is scheduled whenever
            // 1. The state transitions from PENDING_REQUEST to EXTRA_REQUEST, or
            // 2. The state transitions from NO_REQUEST to PENDING_REQUEST
            //
            // Invariants:
            // 1. In the NO_REQUEST state, there is never a scheduled drawCallback.
            // 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly 1
            //    scheduled drawCallback.
            var NO_REQUEST = 0;
            var PENDING_REQUEST = 1;
            var EXTRA_REQUEST = 2;
            var state = NO_REQUEST;
            var savedScene = initialScene;
            var scheduledScene = initialScene;

            function domUpdate(newScene) {
                scheduledScene = newScene;

                switch (state) {
                    case NO_REQUEST:
                        _requestAnimationFrame(drawCallback);
                        state = PENDING_REQUEST;
                        return;
                    case PENDING_REQUEST:
                        state = PENDING_REQUEST;
                        return;
                    case EXTRA_REQUEST:
                        state = PENDING_REQUEST;
                        return;
                }
            }

            function drawCallback() {
                switch (state) {
                    case NO_REQUEST:
                        // This state should not be possible. How can there be no
                        // request, yet somehow we are actively fulfilling a
                        // request?
                        throw new Error(
                            "Unexpected draw callback.\n" +
                            "Please report this to <https://github.com/elm-lang/core/issues>."
                        );

                    case PENDING_REQUEST:
                        // At this point, we do not *know* that another frame is
                        // needed, but we make an extra request to rAF just in
                        // case. It's possible to drop a frame if rAF is called
                        // too late, so we just do it preemptively.
                        _requestAnimationFrame(drawCallback);
                        state = EXTRA_REQUEST;

                        // There's also stuff we definitely need to draw.
                        draw();
                        return;

                    case EXTRA_REQUEST:
                        // Turns out the extra request was not needed, so we will
                        // stop calling rAF. No reason to call it all the time if
                        // no one needs it.
                        state = NO_REQUEST;
                        return;
                }
            }

            function draw() {
                Element.updateAndReplace(elm.node.firstChild, savedScene, scheduledScene);
                if (elm.Native.Window) {
                    elm.Native.Window.values.resizeIfNeeded();
                }
                savedScene = scheduledScene;
            }

            var renderer = A2(Signal.map, domUpdate, signalGraph);

            // must check for resize after 'renderer' is created so
            // that changes show up.
            if (elm.Native.Window) {
                elm.Native.Window.values.resizeIfNeeded();
            }

            return renderer;
        }

        //// HOT SWAPPING ////

        // Returns boolean indicating if the swap was successful.
        // Requires that the two signal graphs have exactly the same
        // structure.
        function hotSwap(from, to) {
            function similar(nodeOld,nodeNew) {
                var idOkay = nodeOld.id === nodeNew.id;
                var lengthOkay = nodeOld.kids.length === nodeNew.kids.length;
                return idOkay && lengthOkay;
            }
            function swap(nodeOld,nodeNew) {
                nodeNew.value = nodeOld.value;
                return true;
            }
            var canSwap = depthFirstTraversals(similar, from.inputs, to.inputs);
            if (canSwap) {
                depthFirstTraversals(swap, from.inputs, to.inputs);
            }
            from.node.parentNode.replaceChild(to.node, from.node);

            return canSwap;
        }

        // Returns false if the node operation f ever fails.
        function depthFirstTraversals(f, queueOld, queueNew) {
            if (queueOld.length !== queueNew.length) return false;
            queueOld = queueOld.slice(0);
            queueNew = queueNew.slice(0);

            var seen = [];
            while (queueOld.length > 0 && queueNew.length > 0) {
                var nodeOld = queueOld.pop();
                var nodeNew = queueNew.pop();
                if (seen.indexOf(nodeOld.id) < 0) {
                    if (!f(nodeOld, nodeNew)) return false;
                    queueOld = queueOld.concat(nodeOld.kids);
                    queueNew = queueNew.concat(nodeNew.kids);
                    seen.push(nodeOld.id);
                }
            }
            return true;
        }
    }());

    function F2(fun) {
        function wrapper(a) { return function(b) { return fun(a,b) } }
        wrapper.arity = 2;
        wrapper.func = fun;
        return wrapper;
    }

    function F3(fun) {
        function wrapper(a) {
            return function(b) { return function(c) { return fun(a,b,c) }}
        }
        wrapper.arity = 3;
        wrapper.func = fun;
        return wrapper;
    }

    function F4(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return fun(a,b,c,d) }}}
        }
        wrapper.arity = 4;
        wrapper.func = fun;
        return wrapper;
    }

    function F5(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return fun(a,b,c,d,e) }}}}
        }
        wrapper.arity = 5;
        wrapper.func = fun;
        return wrapper;
    }

    function F6(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return fun(a,b,c,d,e,f) }}}}}
        }
        wrapper.arity = 6;
        wrapper.func = fun;
        return wrapper;
    }

    function F7(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return function(g) { return fun(a,b,c,d,e,f,g) }}}}}}
        }
        wrapper.arity = 7;
        wrapper.func = fun;
        return wrapper;
    }

    function F8(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return function(g) { return function(h) {
            return fun(a,b,c,d,e,f,g,h)}}}}}}}
        }
        wrapper.arity = 8;
        wrapper.func = fun;
        return wrapper;
    }

    function F9(fun) {
        function wrapper(a) { return function(b) { return function(c) {
            return function(d) { return function(e) { return function(f) {
            return function(g) { return function(h) { return function(i) {
            return fun(a,b,c,d,e,f,g,h,i) }}}}}}}}
        }
        wrapper.arity = 9;
        wrapper.func = fun;
        return wrapper;
    }

    function A2(fun,a,b) {
        return fun.arity === 2
            ? fun.func(a,b)
            : fun(a)(b);
    }
    function A3(fun,a,b,c) {
        return fun.arity === 3
            ? fun.func(a,b,c)
            : fun(a)(b)(c);
    }
    function A4(fun,a,b,c,d) {
        return fun.arity === 4
            ? fun.func(a,b,c,d)
            : fun(a)(b)(c)(d);
    }
    function A5(fun,a,b,c,d,e) {
        return fun.arity === 5
            ? fun.func(a,b,c,d,e)
            : fun(a)(b)(c)(d)(e);
    }
    function A6(fun,a,b,c,d,e,f) {
        return fun.arity === 6
            ? fun.func(a,b,c,d,e,f)
            : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun,a,b,c,d,e,f,g) {
        return fun.arity === 7
            ? fun.func(a,b,c,d,e,f,g)
            : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun,a,b,c,d,e,f,g,h) {
        return fun.arity === 8
            ? fun.func(a,b,c,d,e,f,g,h)
            : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun,a,b,c,d,e,f,g,h,i) {
        return fun.arity === 9
            ? fun.func(a,b,c,d,e,f,g,h,i)
            : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
}
Elm.Native.Show = {};
Elm.Native.Show.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.Show = elm.Native.Show || {};
    if (elm.Native.Show.values) return elm.Native.Show.values;

    var _Array;
    var Dict;
    var List;
    var Utils = Elm.Native.Utils.make(elm);

    var toString = function(v) {
        var type = typeof v;
        if (type === "function") {
            var name = v.func ? v.func.name : v.name;
            return '<function' + (name === '' ? '' : ': ') + name + '>';
        }
        else if (type === "boolean") {
            return v ? "True" : "False";
        }
        else if (type === "number") {
            return v + "";
        }
        else if ((v instanceof String) && v.isChar) {
            return "'" + addSlashes(v) + "'";
        }
        else if (type === "string") {
            return '"' + addSlashes(v) + '"';
        }
        else if (type === "object" && '_' in v && probablyPublic(v)) {
            var output = [];
            for (var k in v._) {
                for (var i = v._[k].length; i--; ) {
                    output.push(k + " = " + toString(v._[k][i]));
                }
            }
            for (var k in v) {
                if (k === '_') continue;
                output.push(k + " = " + toString(v[k]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        else if (type === "object" && 'ctor' in v) {
            if (v.ctor.substring(0,6) === "_Tuple") {
                var output = [];
                for (var k in v) {
                    if (k === 'ctor') continue;
                    output.push(toString(v[k]));
                }
                return "(" + output.join(",") + ")";
            }
            else if (v.ctor === "_Array") {
                if (!_Array) {
                    _Array = Elm.Array.make(elm);
                }
                var list = _Array.toList(v);
                return "Array.fromList " + toString(list);
            }
            else if (v.ctor === "::") {
                var output = '[' + toString(v._0);
                v = v._1;
                while (v.ctor === "::") {
                    output += "," + toString(v._0);
                    v = v._1;
                }
                return output + ']';
            }
            else if (v.ctor === "[]") {
                return "[]";
            }
            else if (v.ctor === "RBNode" || v.ctor === "RBEmpty") {
                if (!Dict) {
                    Dict = Elm.Dict.make(elm);
                }
                if (!List) {
                    List = Elm.List.make(elm);
                }
                var list = Dict.toList(v);
                var name = "Dict";
                if (list.ctor === "::" && list._0._1.ctor === "_Tuple0") {
                    name = "Set";
                    list = A2(List.map, function(x){return x._0}, list);
                }
                return name + ".fromList " + toString(list);
            }
            else {
                var output = "";
                for (var i in v) {
                    if (i === 'ctor') continue;
                    var str = toString(v[i]);
                    var parenless = str[0] === '{' || str[0] === '<' || str.indexOf(' ') < 0;
                    output += ' ' + (parenless ? str : '(' + str + ')');
                }
                return v.ctor + output;
            }
        }
        if (type === 'object' && 'recv' in v) {
            return '<signal>';
        }
        return "<internal structure>";
    };

    function addSlashes(str) {
        return str.replace(/\\/g, '\\\\')
                  .replace(/\n/g, '\\n')
                  .replace(/\t/g, '\\t')
                  .replace(/\r/g, '\\r')
                  .replace(/\v/g, '\\v')
                  .replace(/\0/g, '\\0')
                  .replace(/\'/g, "\\'")
                  .replace(/\"/g, '\\"');
    }

    function probablyPublic(v) {
        var keys = Object.keys(v);
        var len = keys.length;
        if (len === 3
            && 'props' in v
            && 'element' in v)
        {
            return false;
        }
        else if (len === 5
            && 'horizontal' in v
            && 'vertical' in v
            && 'x' in v
            && 'y' in v)
        {
            return false;
        }
        else if (len === 7
            && 'theta' in v
            && 'scale' in v
            && 'x' in v
            && 'y' in v
            && 'alpha' in v
            && 'form' in v)
        {
            return false;
        }
        return true;
    }

    return elm.Native.Show.values = {
        toString: toString
    };
};


Elm.Native.Signal = {};
Elm.Native.Signal.make = function(localRuntime) {

  localRuntime.Native = localRuntime.Native || {};
  localRuntime.Native.Signal = localRuntime.Native.Signal || {};
  if (localRuntime.Native.Signal.values) {
      return localRuntime.Native.Signal.values;
  }

  var Utils = Elm.Native.Utils.make(localRuntime);

  function broadcastToKids(node, timestep, changed) {
    var kids = node.kids;
    for (var i = kids.length; i--; ) {
      kids[i].recv(timestep, changed, node.id);
    }
  }

  function Input(base) {
    this.id = Utils.guid();
    this.value = base;
    this.kids = [];
    this.defaultNumberOfKids = 0;
    this.recv = function(timestep, eid, v) {
      var changed = eid === this.id;
      if (changed) {
        this.value = v;
      }
      broadcastToKids(this, timestep, changed);
      return changed;
    };
    localRuntime.inputs.push(this);
  }

  function LiftN(update, args) {
    this.id = Utils.guid();
    this.value = update();
    this.kids = [];

    var n = args.length;
    var count = 0;
    var isChanged = false;

    this.recv = function(timestep, changed, parentID) {
      ++count;
      if (changed) { isChanged = true; }
      if (count == n) {
        if (isChanged) { this.value = update(); }
        broadcastToKids(this, timestep, isChanged);
        isChanged = false;
        count = 0;
      }
    };
    for (var i = n; i--; ) { args[i].kids.push(this); }
  }

  function map(func, a) {
    function update() { return func(a.value); }
    return new LiftN(update, [a]);
  }
  function map2(func, a, b) {
    function update() { return A2( func, a.value, b.value ); }
    return new LiftN(update, [a,b]);
  }
  function map3(func, a, b, c) {
    function update() { return A3( func, a.value, b.value, c.value ); }
    return new LiftN(update, [a,b,c]);
  }
  function map4(func, a, b, c, d) {
    function update() { return A4( func, a.value, b.value, c.value, d.value ); }
    return new LiftN(update, [a,b,c,d]);
  }
  function map5(func, a, b, c, d, e) {
    function update() { return A5( func, a.value, b.value, c.value, d.value, e.value ); }
    return new LiftN(update, [a,b,c,d,e]);
  }

  function Foldp(step, state, input) {
    this.id = Utils.guid();
    this.value = state;
    this.kids = [];

    this.recv = function(timestep, changed, parentID) {
      if (changed) {
          this.value = A2( step, input.value, this.value );
      }
      broadcastToKids(this, timestep, changed);
    };
    input.kids.push(this);
  }

  function foldp(step, state, input) {
      return new Foldp(step, state, input);
  }

  function DropIf(pred,base,input) {
    this.id = Utils.guid();
    this.value = pred(input.value) ? base : input.value;
    this.kids = [];
    this.recv = function(timestep, changed, parentID) {
      var chng = changed && !pred(input.value);
      if (chng) { this.value = input.value; }
      broadcastToKids(this, timestep, chng);
    };
    input.kids.push(this);
  }

  function DropRepeats(input) {
    this.id = Utils.guid();
    this.value = input.value;
    this.kids = [];
    this.recv = function(timestep, changed, parentID) {
      var chng = changed && !Utils.eq(this.value,input.value);
      if (chng) { this.value = input.value; }
      broadcastToKids(this, timestep, chng);
    };
    input.kids.push(this);
  }

  function timestamp(a) {
    function update() { return Utils.Tuple2(localRuntime.timer.now(), a.value); }
    return new LiftN(update, [a]);
  }

  function SampleOn(s1,s2) {
    this.id = Utils.guid();
    this.value = s2.value;
    this.kids = [];

    var count = 0;
    var isChanged = false;

    this.recv = function(timestep, changed, parentID) {
      if (parentID === s1.id) isChanged = changed;
      ++count;
      if (count == 2) {
        if (isChanged) { this.value = s2.value; }
        broadcastToKids(this, timestep, isChanged);
        count = 0;
        isChanged = false;
      }
    };
    s1.kids.push(this);
    s2.kids.push(this);
  }

  function sampleOn(s1,s2) { return new SampleOn(s1,s2); }

  function delay(t,s) {
      var delayed = new Input(s.value);
      var firstEvent = true;
      function update(v) {
        if (firstEvent) {
            firstEvent = false; return;
        }
        setTimeout(function() {
            localRuntime.notify(delayed.id, v);
        }, t);
      }
      function first(a,b) { return a; }
      return new SampleOn(delayed, map2(F2(first), delayed, map(update,s)));
  }

  function Merge(s1,s2) {
      this.id = Utils.guid();
      this.value = s1.value;
      this.kids = [];

      var next = null;
      var count = 0;
      var isChanged = false;

      this.recv = function(timestep, changed, parentID) {
        ++count;
        if (changed) {
            isChanged = true;
            if (parentID == s2.id && next === null) { next = s2.value; }
            if (parentID == s1.id) { next = s1.value; }
        }

        if (count == 2) {
            if (isChanged) { this.value = next; next = null; }
            broadcastToKids(this, timestep, isChanged);
            isChanged = false;
            count = 0;
        }
      };
      s1.kids.push(this);
      s2.kids.push(this);
  }

  function merge(s1,s2) {
      return new Merge(s1,s2);
  }


    // SIGNAL INPUTS

    function input(initialValue) {
        return new Input(initialValue);
    }

    function send(input, value) {
        return function() {
            localRuntime.notify(input.id, value);
        };
    }

    function subscribe(input) {
        return input;
    }


  return localRuntime.Native.Signal.values = {
    constant : function(v) { return new Input(v); },
    map  : F2(map ),
    map2 : F3(map2),
    map3 : F4(map3),
    map4 : F5(map4),
    map5 : F6(map5),
    foldp : F3(foldp),
    delay : F2(delay),
    merge : F2(merge),
    keepIf : F3(function(pred,base,sig) {
      return new DropIf(function(x) {return !pred(x);},base,sig); }),
    dropIf : F3(function(pred,base,sig) { return new DropIf(pred,base,sig); }),
    dropRepeats : function(s) { return new DropRepeats(s);},
    sampleOn : F2(sampleOn),
    timestamp : timestamp,
    input: input,
    send: F2(send),
    subscribe: subscribe
  };
};

Elm.Native.String = {};
Elm.Native.String.make = function(elm) {
    elm.Native = elm.Native || {};
    elm.Native.String = elm.Native.String || {};
    if (elm.Native.String.values) return elm.Native.String.values;
    if ('values' in Elm.Native.String) {
        return elm.Native.String.values = Elm.Native.String.values;
    }

    var Char = Elm.Char.make(elm);
    var List = Elm.Native.List.make(elm);
    var Maybe = Elm.Maybe.make(elm);
    var Result = Elm.Result.make(elm);
    var Utils = Elm.Native.Utils.make(elm);

    function isEmpty(str) {
        return str.length === 0;
    }
    function cons(chr,str) {
        return chr + str;
    }
    function uncons(str) {
        var hd;
        return (hd = str[0])
            ? Maybe.Just(Utils.Tuple2(Utils.chr(hd), str.slice(1)))
            : Maybe.Nothing;
    }
    function append(a,b) {
        return a + b;
    }
    function concat(strs) {
        return List.toArray(strs).join('');
    }
    function length(str) {
        return str.length;
    }
    function map(f,str) {
        var out = str.split('');
        for (var i = out.length; i--; ) {
            out[i] = f(Utils.chr(out[i]));
        }
        return out.join('');
    }
    function filter(pred,str) {
        return str.split('').map(Utils.chr).filter(pred).join('');
    }
    function reverse(str) {
        return str.split('').reverse().join('');
    }
    function foldl(f,b,str) {
        var len = str.length;
        for (var i = 0; i < len; ++i) {
            b = A2(f, Utils.chr(str[i]), b);
        }
        return b;
    }
    function foldr(f,b,str) {
        for (var i = str.length; i--; ) {
            b = A2(f, Utils.chr(str[i]), b);
        }
        return b;
    }

    function split(sep, str) {
        return List.fromArray(str.split(sep));
    }
    function join(sep, strs) {
        return List.toArray(strs).join(sep);
    }
    function repeat(n, str) {
        var result = '';
        while (n > 0) {
            if (n & 1) result += str;
            n >>= 1, str += str;
        }
        return result;
    }

    function slice(start, end, str) {
        return str.slice(start,end);
    }
    function left(n, str) {
        return n < 1 ? "" : str.slice(0,n);
    }
    function right(n, str) {
        return n < 1 ? "" : str.slice(-n);
    }
    function dropLeft(n, str) {
        return n < 1 ? str : str.slice(n);
    }
    function dropRight(n, str) {
        return n < 1 ? str : str.slice(0,-n);
    }

    function pad(n,chr,str) {
        var half = (n - str.length) / 2;
        return repeat(Math.ceil(half),chr) + str + repeat(half|0,chr);
    }
    function padRight(n,chr,str) {
        return str + repeat(n - str.length, chr);
    }
    function padLeft(n,chr,str) {
        return repeat(n - str.length, chr) + str;
    }

    function trim(str) {
        return str.trim();
    }
    function trimLeft(str) {
        return str.trimLeft();
    }
    function trimRight(str) {
        return str.trimRight();
    }

    function words(str) {
        return List.fromArray(str.trim().split(/\s+/g));
    }
    function lines(str) {
        return List.fromArray(str.split(/\r\n|\r|\n/g));
    }

    function toUpper(str) {
        return str.toUpperCase();
    }
    function toLower(str) {
        return str.toLowerCase();
    }

    function any(pred, str) {
        for (var i = str.length; i--; ) {
            if (pred(Utils.chr(str[i]))) return true;
        }
        return false;
    }
    function all(pred, str) {
        for (var i = str.length; i--; ) {
            if (!pred(Utils.chr(str[i]))) return false;
        }
        return true;
    }

    function contains(sub, str) {
        return str.indexOf(sub) > -1;
    }
    function startsWith(sub, str) {
        return str.indexOf(sub) === 0;
    }
    function endsWith(sub, str) {
        return str.length >= sub.length &&
               str.lastIndexOf(sub) === str.length - sub.length;
    }
    function indexes(sub, str) {
        var subLen = sub.length;
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return List.fromArray(is);
    }

    function toInt(s) {
        var len = s.length;
        if (len === 0) {
            return Result.Err("could not convert string '" + s + "' to an Int" );
        }
        var start = 0;
        if (s[0] == '-') {
            if (len === 1) {
                return Result.Err("could not convert string '" + s + "' to an Int" );
            }
            start = 1;
        }
        for (var i = start; i < len; ++i) {
            if (!Char.isDigit(s[i])) {
                return Result.Err("could not convert string '" + s + "' to an Int" );
            }
        }
        return Result.Ok(parseInt(s, 10));
    }

    function toFloat(s) {
        var len = s.length;
        if (len === 0) {
            return Result.Err("could not convert string '" + s + "' to a Float" );
        }
        var start = 0;
        if (s[0] == '-') {
            if (len === 1) {
                return Result.Err("could not convert string '" + s + "' to a Float" );
            }
            start = 1;
        }
        var dotCount = 0;
        for (var i = start; i < len; ++i) {
            if (Char.isDigit(s[i])) {
                continue;
            }
            if (s[i] === '.') {
                dotCount += 1;
                if (dotCount <= 1) {
                    continue;
                }
            }
            return Result.Err("could not convert string '" + s + "' to a Float" );
        }
        return Result.Ok(parseFloat(s));
    }

    function toList(str) {
        return List.fromArray(str.split('').map(Utils.chr));
    }
    function fromList(chars) {
        return List.toArray(chars).join('');
    }

    return Elm.Native.String.values = {
        isEmpty: isEmpty,
        cons: F2(cons),
        uncons: uncons,
        append: F2(append),
        concat: concat,
        length: length,
        map: F2(map),
        filter: F2(filter),
        reverse: reverse,
        foldl: F3(foldl),
        foldr: F3(foldr),

        split: F2(split),
        join: F2(join),
        repeat: F2(repeat),

        slice: F3(slice),
        left: F2(left),
        right: F2(right),
        dropLeft: F2(dropLeft),
        dropRight: F2(dropRight),

        pad: F3(pad),
        padLeft: F3(padLeft),
        padRight: F3(padRight),

        trim: trim,
        trimLeft: trimLeft,
        trimRight: trimRight,

        words: words,
        lines: lines,

        toUpper: toUpper,
        toLower: toLower,

        any: F2(any),
        all: F2(all),

        contains: F2(contains),
        startsWith: F2(startsWith),
        endsWith: F2(endsWith),
        indexes: F2(indexes),

        toInt: toInt,
        toFloat: toFloat,
        toList: toList,
        fromList: fromList
    };
};

Elm.Native = Elm.Native || {};
Elm.Native.Utils = {};
Elm.Native.Utils.make = function(localRuntime) {

    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.Utils = localRuntime.Native.Utils || {};
    if (localRuntime.Native.Utils.values) {
        return localRuntime.Native.Utils.values;
    }

    function eq(l,r) {
        var stack = [{'x': l, 'y': r}]
        while (stack.length > 0) {
            var front = stack.pop();
            var x = front.x;
            var y = front.y;
            if (x === y) continue;
            if (typeof x === "object") {
                var c = 0;
                for (var i in x) {
                    ++c;
                    if (i in y) {
                        if (i !== 'ctor') {
                            stack.push({ 'x': x[i], 'y': y[i] });
                        }
                    } else {
                        return false;
                    }
                }
                if ('ctor' in x) {
                    stack.push({'x': x.ctor, 'y': y.ctor});
                }
                if (c !== Object.keys(y).length) {
                    return false;
                };
            } else if (typeof x === 'function') {
                throw new Error('Equality error: general function equality is ' +
                                'undecidable, and therefore, unsupported');
            } else {
                return false;
            }
        }
        return true;
    }

    // code in Generate/JavaScript.hs depends on the particular
    // integer values assigned to LT, EQ, and GT
    var LT = -1, EQ = 0, GT = 1, ord = ['LT','EQ','GT'];
    function compare(x,y) { return { ctor: ord[cmp(x,y)+1] } }
    function cmp(x,y) {
        var ord;
        if (typeof x !== 'object'){
            return x === y ? EQ : x < y ? LT : GT;
        }
        else if (x.isChar){
            var a = x.toString();
            var b = y.toString();
            return a === b ? EQ : a < b ? LT : GT;
        }
        else if (x.ctor === "::" || x.ctor === "[]") {
            while (true) {
                if (x.ctor === "[]" && y.ctor === "[]") return EQ;
                if (x.ctor !== y.ctor) return x.ctor === '[]' ? LT : GT;
                ord = cmp(x._0, y._0);
                if (ord !== EQ) return ord;
                x = x._1;
                y = y._1;
            }
        }
        else if (x.ctor.slice(0,6) === '_Tuple') {
            var n = x.ctor.slice(6) - 0;
            var err = 'cannot compare tuples with more than 6 elements.';
            if (n === 0) return EQ;
            if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
            if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
            if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
            if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
            if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
            if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
            if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
            return EQ;
        }
        else {
            throw new Error('Comparison error: comparison is only defined on ints, ' +
                            'floats, times, chars, strings, lists of comparable values, ' +
                            'and tuples of comparable values.');
        }
    }


    var Tuple0 = { ctor: "_Tuple0" };
    function Tuple2(x,y) {
        return {
            ctor: "_Tuple2",
            _0: x,
            _1: y
        };
    }

    function chr(c) {
        var x = new String(c);
        x.isChar = true;
        return x;
    }

    function txt(str) {
        var t = new String(str);
        t.text = true;
        return t;
    }

    function makeText(text) {
        var style = '';
        var href = '';
        while (true) {
            if (text.style) {
                style += text.style;
                text = text.text;
                continue;
            }
            if (text.href) {
                href = text.href;
                text = text.text;
                continue;
            }
            if (href) {
                text = '<a href="' + href + '">' + text + '</a>';
            }
            if (style) {
                text = '<span style="' + style + '">' + text + '</span>';
            }
            return text;
        }
    }

    var count = 0;
    function guid(_) {
        return count++
    }

    function copy(oldRecord) {
        var newRecord = {};
        for (var key in oldRecord) {
            var value = key === '_'
                ? copy(oldRecord._)
                : oldRecord[key]
                ;
            newRecord[key] = value;
        }
        return newRecord;
    }

    function remove(key, oldRecord) {
        var record = copy(oldRecord);
        if (key in record._) {
            record[key] = record._[key][0];
            record._[key] = record._[key].slice(1);
            if (record._[key].length === 0) {
                delete record._[key];
            }
        } else {
            delete record[key];
        }
        return record;
    }

    function replace(keyValuePairs, oldRecord) {
        var record = copy(oldRecord);
        for (var i = keyValuePairs.length; i--; ) {
            var pair = keyValuePairs[i];
            record[pair[0]] = pair[1];
        }
        return record;
    }

    function insert(key, value, oldRecord) {
        var newRecord = copy(oldRecord);
        if (key in newRecord) {
            var values = newRecord._[key];
            var copiedValues = values ? values.slice(0) : [];
            newRecord._[key] = [newRecord[key]].concat(copiedValues);
        }
        newRecord[key] = value;
        return newRecord;
    }

    function getXY(e) {
        var posx = 0;
        var posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        if (localRuntime.isEmbed()) {
            var rect = localRuntime.node.getBoundingClientRect();
            var relx = rect.left + document.body.scrollLeft + document.documentElement.scrollLeft;
            var rely = rect.top + document.body.scrollTop + document.documentElement.scrollTop;
            // TODO: figure out if there is a way to avoid rounding here
            posx = posx - Math.round(relx) - localRuntime.node.clientLeft;
            posy = posy - Math.round(rely) - localRuntime.node.clientTop;
        }
        return Tuple2(posx, posy);
    }


    //// LIST STUFF ////

    var Nil = { ctor:'[]' };

    function Cons(hd,tl) {
        return {
            ctor: "::",
            _0: hd,
            _1: tl
        };
    }

    function append(xs,ys) {
        // append Text
        if (xs.text || ys.text) {
            return txt(makeText(xs) + makeText(ys));
        }

        // append Strings
        if (typeof xs === "string") {
            return xs + ys;
        }

        // append Lists
        if (xs.ctor === '[]') {
            return ys;
        }
        var root = Cons(xs._0, Nil);
        var curr = root;
        xs = xs._1;
        while (xs.ctor !== '[]') {
            curr._1 = Cons(xs._0, Nil);
            xs = xs._1;
            curr = curr._1;
        }
        curr._1 = ys;
        return root;
    }

    //// RUNTIME ERRORS ////

    function indent(lines) {
        return '\n' + lines.join('\n');
    }

    function badCase(moduleName, span) { 
        var msg = indent([
            'Non-exhaustive pattern match in case-expression.',
            'Make sure your patterns cover every case!'
        ]);
        throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
    }

    function badIf(moduleName, span) { 
        var msg = indent([
            'Non-exhaustive pattern match in multi-way-if expression.',
            'It is best to use \'otherwise\' as the last branch of multi-way-if.'
        ]);
        throw new Error('Runtime error in module ' + moduleName + ' (' + span + ')' + msg);
    }


    function badPort(expected, received) { 
        var msg = indent([
            'Expecting ' + expected + ' but was given ',
            JSON.stringify(received)
        ]);
        throw new Error('Runtime error when sending values through a port.' + msg);
    }


    return localRuntime.Native.Utils.values = {
        eq:eq,
        cmp:cmp,
        compare:F2(compare),
        Tuple0:Tuple0,
        Tuple2:Tuple2,
        chr:chr,
        txt:txt,
        makeText:makeText,
        copy: copy,
        remove: remove,
        replace: replace,
        insert: insert,
        guid: guid,
        getXY: getXY,

        Nil: Nil,
        Cons: Cons,
        append: F2(append),

        badCase: badCase,
        badIf: badIf,
        badPort: badPort
    };
};

Elm.Native.WebGL = {};
Elm.Native.WebGL.make = function(elm) {

  elm.Native = elm.Native || {};
  elm.Native.Graphics = elm.Native.Graphics || {};
  elm.Native.WebGL = elm.Native.WebGL || {};
  if (elm.Native.WebGL.values) {
      return elm.Native.WebGL.values;
  }

  // setup logging
  function LOG(msg) {
    // console.log(msg);
  }

  var createNode = Elm.Native.Graphics.Element.make(elm).createNode;
  var newElement = Elm.Graphics.Element.make(elm).newElement;

  var List = Elm.Native.List.make(elm);
  var MJS = Elm.Native.MJS.make(elm);
  var Utils = Elm.Native.Utils.make(elm);
  var Signal = Elm.Signal.make(elm);
  var Tuple2 = Utils.Tuple2;

  function unsafeCoerceGLSL(src) {
    return { src : src };
  }

  function loadTex(source) {

    var response = Signal.constant(elm.Http.values.Waiting);

    var img = new Image();

    img.onload = function() {
      var success = elm.Http.values.Success({img:img});
      elm.notify(response.id, success);
    }

    img.onerror = function(e) {
      var failure = A2(elm.Http.values.Failure,0,"Failed");
      elm.notify(response.id, failure);
    }

    img.src = source;

    return response;

  }

  function entity(vert, frag, buffer, uniforms) {

    if (!buffer.guid) {
      buffer.guid = Utils.guid();
    }

    return {
      vert: vert,
      frag: frag,
      buffer: buffer,
      uniforms: uniforms
    };

  }

  function do_texture (gl, img) {

    var tex = gl.createTexture();
    LOG("Created texture");
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D);
    //gl.bindTexture(gl.TEXTURE0, null);
    return tex;

  }

  function do_compile (gl, src, tipe) {

    var shader = gl.createShader(tipe);
    LOG("Created shader");

    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    var compile = gl.COMPILE_STATUS;
    if (!gl.getShaderParameter(shader,compile)) {
      throw gl.getShaderInfoLog(shader);
    }

    return shader;

  }

  function do_link (gl, vshader, fshader) {

    var program = gl.createProgram();
    LOG("Created program");

    gl.attachShader(program, vshader);
    gl.attachShader(program, fshader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw gl.getProgramInfoLog(program);
    }

    return program;

  }

  function do_bind (gl, program, bufferElems) {

    var buffers = {};

    var attributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (var i = 0; i < attributes; i += 1) {
      var attribute = gl.getActiveAttrib(program, i);
      switch (attribute.type) {
        case gl.FLOAT_VEC2:

          // Might want to invert the loop
          // to build the array buffer first
          // and then bind each one-at-a-time
          var data = [];
          A2(List.map, function(elem){
            data.push(elem._0[attribute.name][0]);
            data.push(elem._0[attribute.name][1]);
            data.push(elem._1[attribute.name][0]);
            data.push(elem._1[attribute.name][1]);
            data.push(elem._2[attribute.name][0]);
            data.push(elem._2[attribute.name][1]);
          }, bufferElems);
          var array = new Float32Array(data);

          var buffer = gl.createBuffer();
          LOG("Created attribute buffer " + attribute.name);
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);

          buffers[attribute.name] = buffer;

          break;

        case gl.FLOAT_VEC3:

          // Might want to invert the loop
          // to build the array buffer first
          // and then bind each one-at-a-time
          var data = [];
          A2(List.map, function(elem){
            data.push(elem._0[attribute.name][0]);
            data.push(elem._0[attribute.name][1]);
            data.push(elem._0[attribute.name][2]);
            data.push(elem._1[attribute.name][0]);
            data.push(elem._1[attribute.name][1]);
            data.push(elem._1[attribute.name][2]);
            data.push(elem._2[attribute.name][0]);
            data.push(elem._2[attribute.name][1]);
            data.push(elem._2[attribute.name][2]);
          }, bufferElems);
          var array = new Float32Array(data);

          var buffer = gl.createBuffer();
          LOG("Created attribute buffer " + attribute.name);
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);

          buffers[attribute.name] = buffer;

          break;

        case gl.FLOAT_VEC4:

          // Might want to invert the loop
          // to build the array buffer first
          // and then bind each one-at-a-time
          var data = [];
          A2(List.map, function(elem){
            data.push(elem._0[attribute.name][0]);
            data.push(elem._0[attribute.name][1]);
            data.push(elem._0[attribute.name][2]);
            data.push(elem._0[attribute.name][3]);
            data.push(elem._1[attribute.name][0]);
            data.push(elem._1[attribute.name][1]);
            data.push(elem._1[attribute.name][2]);
            data.push(elem._1[attribute.name][3]);
            data.push(elem._2[attribute.name][0]);
            data.push(elem._2[attribute.name][1]);
            data.push(elem._2[attribute.name][2]);
            data.push(elem._2[attribute.name][3]);
          }, bufferElems);
          var array = new Float32Array(data);

          var buffer = gl.createBuffer();
          LOG("Created attribute buffer " + attribute.name);
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);

          buffers[attribute.name] = buffer;

          break;

        default:
          LOG("Bad buffer type");
          break;
      }

    }

    var numIndices = 3 * List.length(bufferElems);
    var indices = List.toArray(List.range(0, numIndices - 1));
    LOG("Created index buffer");
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    var bufferObject = {
      numIndices: numIndices,
      indexBuffer: indexBuffer,
      buffers: buffers
    };

    return bufferObject;

  }

  function drawGL(model) {

    var gl = model.cache.gl;

    gl.viewport(0, 0, model.w, model.h);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    LOG("Drawing");

    function drawEntity(entity) {

      var program;
      if (entity.vert.id && entity.frag.id) {
        var progid = entity.vert.id + '#' + entity.frag.id;
        program = model.cache.programs[progid];
      }

      if (!program) {

        var vshader = undefined;
        if (entity.vert.id) {
          vshader = model.cache.shaders[entity.vert.id];
        } else {
          entity.vert.id = Utils.guid();
        }

        if (!vshader) {
          vshader = do_compile(gl, entity.vert.src, gl.VERTEX_SHADER);
          model.cache.shaders[entity.vert.id] = vshader;
        }

        var fshader = undefined;
        if (entity.frag.id) {
          fshader = model.cache.shaders[entity.frag.id];
        } else {
          entity.frag.id = Utils.guid();
        }

        if (!fshader) {
          fshader = do_compile(gl, entity.frag.src, gl.FRAGMENT_SHADER);
          model.cache.shaders[entity.frag.id] = fshader;
        }

        program = do_link(gl, vshader, fshader);
        var progid = entity.vert.id + '#' + entity.frag.id;
        model.cache.programs[progid] = program;

      }

      gl.useProgram(program);

      var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      var textureCounter = 0;
      for (var i = 0; i < numUniforms; i += 1) {
        var uniform = gl.getActiveUniform(program, i);
        var uniformLocation = gl.getUniformLocation(program, uniform.name);
        switch (uniform.type) {
          case gl.INT:
            gl.uniform1i(uniformLocation, entity.uniforms[uniform.name]);
            break;
          case gl.FLOAT:
            gl.uniform1f(uniformLocation, entity.uniforms[uniform.name]);
            break;
          case gl.FLOAT_VEC2:
            gl.uniform2fv(uniformLocation, entity.uniforms[uniform.name]);
            break;            
          case gl.FLOAT_VEC3:
            gl.uniform3fv(uniformLocation, entity.uniforms[uniform.name]);
            break;
          case gl.FLOAT_VEC4:
            gl.uniform4fv(uniformLocation, entity.uniforms[uniform.name]);
            break;
          case gl.FLOAT_MAT4:
            gl.uniformMatrix4fv(uniformLocation, false, entity.uniforms[uniform.name]);
            break;
          case gl.SAMPLER_2D:
            var texture = entity.uniforms[uniform.name];
            var tex = undefined;
            if (texture.id) {
              tex = model.cache.textures[texture.id];
            } else {
              texture.id = Utils.guid();
            }
            if (!tex) {
              tex = do_texture(gl, texture.img);
              model.cache.textures[texture.id] = tex;
            }
            var activeName = 'TEXTURE' + textureCounter;
            gl.activeTexture(gl[activeName]);
            gl.bindTexture(gl.TEXTURE_2D,tex);
            gl.uniform1i(uniformLocation, textureCounter);
            textureCounter += 1;
            break;
          default:
            LOG("Unsupported uniform type: " + uniform.type);
            break;
        }
      }

      var buffer = model.cache.buffers[entity.buffer.guid];
      if (!buffer) {
        buffer = do_bind(gl, program, entity.buffer);
        model.cache.buffers[entity.buffer.guid] = buffer;
      }

      var numIndices = buffer.numIndices;
      var indexBuffer = buffer.indexBuffer;
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

      var numAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
      for (var i = 0; i < numAttributes; i += 1) {
        var attribute = gl.getActiveAttrib(program, i);
        var attribLocation = gl.getAttribLocation(program, attribute.name);
        gl.enableVertexAttribArray(attribLocation);
        var attributeBuffer = buffer.buffers[attribute.name];

        switch (attribute.type) {
          case gl.FLOAT_VEC2:
            gl.bindBuffer(gl.ARRAY_BUFFER, attributeBuffer);
            gl.vertexAttribPointer(attribLocation, 2, gl.FLOAT, false, 0, 0);
            break;
          case gl.FLOAT_VEC3:
            gl.bindBuffer(gl.ARRAY_BUFFER, attributeBuffer);
            gl.vertexAttribPointer(attribLocation, 3, gl.FLOAT, false, 0, 0);
            break;
          case gl.FLOAT_VEC4:
            gl.bindBuffer(gl.ARRAY_BUFFER, attributeBuffer);
            gl.vertexAttribPointer(attribLocation, 4, gl.FLOAT, false, 0, 0);
            break;
          default:
            LOG("Unsupported attribute type: " + attribute.type);
            break;
        }
      }

      gl.drawElements(gl.TRIANGLES, numIndices, gl.UNSIGNED_SHORT, 0);

    }

    A2(List.map, drawEntity, model.models);

  }

  function webgl(dimensions, models) {

    var w = dimensions._0;
    var h = dimensions._1;

    function render(model) {

      var div = createNode('div');
      div.style.overflow = 'hidden';
      var canvas = createNode('canvas');
      var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

      if (gl) {
        gl.enable(gl.DEPTH_TEST);
      } else {
        div.innerHTML =
          '<div style="display: table-cell; text-align: center; width: ' + w + 'px; height: ' + h +
          'px; vertical-align: middle;"><a href="http://get.webgl.org/">Enable WebGL</a> to see this content!</div>';
      }

      model.cache.gl = gl;
      model.cache.canvas = canvas;
      model.cache.shaders = [];
      model.cache.programs = {};
      model.cache.buffers = [];
      model.cache.textures = [];

      update(div, model, model);

      return div;

    }

    function update(div, oldModel, newModel) {

      newModel.cache = oldModel.cache;

      var canvas = newModel.cache.canvas;

      canvas.style.width = oldModel.w + 'px';
      canvas.style.height = oldModel.h + 'px';
      canvas.style.display = "block";
      canvas.style.position = "absolute";
      canvas.width = oldModel.w;
      canvas.height = oldModel.h;

      if (newModel.cache.gl) {
        drawGL(newModel);
      } else {
        div.firstChild.width = newModel.w + 'px';
        div.firstChild.height = newModel.h + 'px';
      }

      div.appendChild(canvas);

      return div;
    }

    var elem = {
      ctor: 'Custom',
      type: 'WebGL',
      render: render,
      update: update,
      model: {
        models: models,
        cache: {},
        w: w,
        h: h
      }
    };

    return A3(newElement, w, h, elem);

  }

  return elm.Native.WebGL.values = {
    unsafeCoerceGLSL:unsafeCoerceGLSL,
    loadTex:loadTex,
    entity:F4(entity),
    webgl:F2(webgl)
  };

};

Elm.Result = Elm.Result || {};
Elm.Result.make = function (_elm) {
   "use strict";
   _elm.Result = _elm.Result || {};
   if (_elm.Result.values)
   return _elm.Result.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Result",
   $Maybe = Elm.Maybe.make(_elm);
   var toMaybe = function (result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return $Maybe.Nothing;
            case "Ok":
            return $Maybe.Just(result._0);}
         _U.badCase($moduleName,
         "between lines 110 and 123");
      }();
   };
   var Err = function (a) {
      return {ctor: "Err",_0: a};
   };
   var andThen = F2(function (result,
   callback) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(result._0);
            case "Ok":
            return callback(result._0);}
         _U.badCase($moduleName,
         "between lines 72 and 91");
      }();
   });
   var Ok = function (a) {
      return {ctor: "Ok",_0: a};
   };
   var map = F2(function (f,
   result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(result._0);
            case "Ok":
            return Ok(f(result._0));}
         _U.badCase($moduleName,
         "between lines 32 and 69");
      }();
   });
   var formatError = F2(function (f,
   result) {
      return function () {
         switch (result.ctor)
         {case "Err":
            return Err(f(result._0));
            case "Ok":
            return Ok(result._0);}
         _U.badCase($moduleName,
         "between lines 94 and 107");
      }();
   });
   var fromMaybe = F2(function (err,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Ok(maybe._0);
            case "Nothing":
            return Err(err);}
         _U.badCase($moduleName,
         "between lines 126 and 128");
      }();
   });
   _elm.Result.values = {_op: _op
                        ,Ok: Ok
                        ,Err: Err
                        ,map: map
                        ,andThen: andThen
                        ,formatError: formatError
                        ,toMaybe: toMaybe
                        ,fromMaybe: fromMaybe};
   return _elm.Result.values;
};
Elm.Signal = Elm.Signal || {};
Elm.Signal.make = function (_elm) {
   "use strict";
   _elm.Signal = _elm.Signal || {};
   if (_elm.Signal.values)
   return _elm.Signal.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "Signal",
   $Basics = Elm.Basics.make(_elm),
   $List = Elm.List.make(_elm),
   $Native$Signal = Elm.Native.Signal.make(_elm);
   var subscribe = $Native$Signal.subscribe;
   var send = $Native$Signal.send;
   var channel = $Native$Signal.input;
   var Message = {ctor: "Message"};
   var Channel = {ctor: "Channel"};
   _op["~"] = F2(function (sf,s) {
      return A3($Native$Signal.map2,
      F2(function (f,x) {
         return f(x);
      }),
      sf,
      s);
   });
   _op["<~"] = F2(function (f,s) {
      return A2($Native$Signal.map,
      f,
      s);
   });
   var sampleOn = $Native$Signal.sampleOn;
   var dropRepeats = $Native$Signal.dropRepeats;
   var dropIf = $Native$Signal.dropIf;
   var keepIf = $Native$Signal.keepIf;
   var keepWhen = F3(function (bs,
   def,
   sig) {
      return A2(_op["<~"],
      $Basics.snd,
      A3(keepIf,
      $Basics.fst,
      {ctor: "_Tuple2"
      ,_0: false
      ,_1: def},
      A2(_op["~"],
      A2(_op["<~"],
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      A2(sampleOn,sig,bs)),
      sig)));
   });
   var dropWhen = function (bs) {
      return keepWhen(A2(_op["<~"],
      $Basics.not,
      bs));
   };
   var merge = $Native$Signal.merge;
   var mergeMany = function (signals) {
      return A2($List.foldr1,
      merge,
      signals);
   };
   var foldp = $Native$Signal.foldp;
   var map5 = $Native$Signal.map5;
   var map4 = $Native$Signal.map4;
   var map3 = $Native$Signal.map3;
   var map2 = $Native$Signal.map2;
   var map = $Native$Signal.map;
   var constant = $Native$Signal.constant;
   var Signal = {ctor: "Signal"};
   _elm.Signal.values = {_op: _op
                        ,Signal: Signal
                        ,constant: constant
                        ,map: map
                        ,map2: map2
                        ,map3: map3
                        ,map4: map4
                        ,map5: map5
                        ,foldp: foldp
                        ,merge: merge
                        ,mergeMany: mergeMany
                        ,keepIf: keepIf
                        ,dropIf: dropIf
                        ,keepWhen: keepWhen
                        ,dropWhen: dropWhen
                        ,dropRepeats: dropRepeats
                        ,sampleOn: sampleOn
                        ,Channel: Channel
                        ,Message: Message
                        ,channel: channel
                        ,send: send
                        ,subscribe: subscribe};
   return _elm.Signal.values;
};
Elm.String = Elm.String || {};
Elm.String.make = function (_elm) {
   "use strict";
   _elm.String = _elm.String || {};
   if (_elm.String.values)
   return _elm.String.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "String",
   $Maybe = Elm.Maybe.make(_elm),
   $Native$String = Elm.Native.String.make(_elm),
   $Result = Elm.Result.make(_elm);
   var fromList = $Native$String.fromList;
   var toList = $Native$String.toList;
   var toFloat = $Native$String.toFloat;
   var toInt = $Native$String.toInt;
   var indices = $Native$String.indexes;
   var indexes = $Native$String.indexes;
   var endsWith = $Native$String.endsWith;
   var startsWith = $Native$String.startsWith;
   var contains = $Native$String.contains;
   var all = $Native$String.all;
   var any = $Native$String.any;
   var toLower = $Native$String.toLower;
   var toUpper = $Native$String.toUpper;
   var lines = $Native$String.lines;
   var words = $Native$String.words;
   var trimRight = $Native$String.trimRight;
   var trimLeft = $Native$String.trimLeft;
   var trim = $Native$String.trim;
   var padRight = $Native$String.padRight;
   var padLeft = $Native$String.padLeft;
   var pad = $Native$String.pad;
   var dropRight = $Native$String.dropRight;
   var dropLeft = $Native$String.dropLeft;
   var right = $Native$String.right;
   var left = $Native$String.left;
   var slice = $Native$String.slice;
   var repeat = $Native$String.repeat;
   var join = $Native$String.join;
   var split = $Native$String.split;
   var foldr = $Native$String.foldr;
   var foldl = $Native$String.foldl;
   var reverse = $Native$String.reverse;
   var filter = $Native$String.filter;
   var map = $Native$String.map;
   var length = $Native$String.length;
   var concat = $Native$String.concat;
   var append = $Native$String.append;
   var uncons = $Native$String.uncons;
   var cons = $Native$String.cons;
   var fromChar = function ($char) {
      return A2(cons,$char,"");
   };
   var isEmpty = $Native$String.isEmpty;
   _elm.String.values = {_op: _op
                        ,isEmpty: isEmpty
                        ,cons: cons
                        ,fromChar: fromChar
                        ,uncons: uncons
                        ,append: append
                        ,concat: concat
                        ,length: length
                        ,map: map
                        ,filter: filter
                        ,reverse: reverse
                        ,foldl: foldl
                        ,foldr: foldr
                        ,split: split
                        ,join: join
                        ,repeat: repeat
                        ,slice: slice
                        ,left: left
                        ,right: right
                        ,dropLeft: dropLeft
                        ,dropRight: dropRight
                        ,pad: pad
                        ,padLeft: padLeft
                        ,padRight: padRight
                        ,trim: trim
                        ,trimLeft: trimLeft
                        ,trimRight: trimRight
                        ,words: words
                        ,lines: lines
                        ,toUpper: toUpper
                        ,toLower: toLower
                        ,any: any
                        ,all: all
                        ,contains: contains
                        ,startsWith: startsWith
                        ,endsWith: endsWith
                        ,indexes: indexes
                        ,indices: indices
                        ,toInt: toInt
                        ,toFloat: toFloat
                        ,toList: toList
                        ,fromList: fromList};
   return _elm.String.values;
};
Elm.WebGL = Elm.WebGL || {};
Elm.WebGL.make = function (_elm) {
   "use strict";
   _elm.WebGL = _elm.WebGL || {};
   if (_elm.WebGL.values)
   return _elm.WebGL.values;
   var _op = {},
   _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _P = _N.Ports.make(_elm),
   $moduleName = "WebGL",
   $Graphics$Element = Elm.Graphics.Element.make(_elm),
   $Http = Elm.Http.make(_elm),
   $Native$WebGL = Elm.Native.WebGL.make(_elm),
   $Signal = Elm.Signal.make(_elm);
   var webgl = $Native$WebGL.webgl;
   var entity = $Native$WebGL.entity;
   var Entity = {ctor: "Entity"};
   var loadTexture = $Native$WebGL.loadTex;
   var Texture = {ctor: "Texture"};
   var unsafeShader = $Native$WebGL.unsafeCoerceGLSL;
   var Shader = {ctor: "Shader"};
   var map2 = F3(function (f,
   _v0,
   _v1) {
      return function () {
         switch (_v1.ctor)
         {case "_Tuple3":
            return function () {
                 switch (_v0.ctor)
                 {case "_Tuple3":
                    return {ctor: "_Tuple3"
                           ,_0: A2(f,_v0._0,_v1._0)
                           ,_1: A2(f,_v0._1,_v1._1)
                           ,_2: A2(f,_v0._2,_v1._2)};}
                 _U.badCase($moduleName,
                 "on line 56, column 6 to 28");
              }();}
         _U.badCase($moduleName,
         "on line 56, column 6 to 28");
      }();
   });
   var map = F2(function (f,_v10) {
      return function () {
         switch (_v10.ctor)
         {case "_Tuple3":
            return {ctor: "_Tuple3"
                   ,_0: f(_v10._0)
                   ,_1: f(_v10._1)
                   ,_2: f(_v10._2)};}
         _U.badCase($moduleName,
         "on line 48, column 6 to 19");
      }();
   });
   _elm.WebGL.values = {_op: _op
                       ,map: map
                       ,map2: map2
                       ,Shader: Shader
                       ,unsafeShader: unsafeShader
                       ,Texture: Texture
                       ,loadTexture: loadTexture
                       ,Entity: Entity
                       ,entity: entity
                       ,webgl: webgl};
   return _elm.WebGL.values;
};
