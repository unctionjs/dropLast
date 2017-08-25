/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import {test} from "tap"

import dropLast from "./source.js"

test(({same, end}) => {
  console.log({example: dropLast(2)(["a", "b", "c"])})
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
