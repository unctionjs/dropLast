/* eslint-disable no-magic-numbers */

import reverse from "@unction/reverse"
import ifThenElse from "@unction/ifthenelse"
import lessThan from "@unction/lessthan"
import append from "@unction/append"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import always from "@unction/always"

export default function dropLast (count: number): mixed {
  return function dropLastCount (array: ArrayType): ArrayType {
    return reverse(
      reduceWithValueKey(
        (accumulated: ArrayType): Function =>
          (value: ValueType): Function =>
            ifThenElse(lessThan(count - 1))((): ArrayType => append(value)(accumulated))(always(accumulated))
      )(
        []
      )(
        reverse(array)
      )
    )
  }
}
