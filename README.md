# @unction/dropLast

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> number => OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Returns all but the last N of a list of ordered values.

``` javascript
dropLast(2)([1, 2, 3]) // [1]
dropLast(1)([1, 2, 3]) // [1, 2]
dropLast(2)("abc") // "a"
dropLast(1)("abc") // "ab"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/dropLast.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/dropLast.svg?maxAge=2592000&style=flat-square
