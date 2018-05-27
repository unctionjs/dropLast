/* eslint-disable no-magic-numbers */
import {test} from "tap"

import dropLast from "./index"

test(({same, end}) => {
  same(
    dropLast(2)(["a", "b", "c"]),
    ["a"]
  )

  end()
})

test(({same, end}) => {
  same(
    dropLast(1)(["a", "b", "c"]),
    ["a", "b"]
  )

  end()
})


test(({same, end}) => {
  same(
    dropLast(2)("abc"),
    "a"
  )

  end()
})

test(({same, end}) => {
  same(
    dropLast(1)("abc"),
    "ab"
  )

  end()
})
