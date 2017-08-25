/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan"
import append from "@unction/append"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import length from "@unction/length"

export default function dropLast (count: number): mixed {
  return function dropLastCount (array: ArrayType): ArrayType {
    const total = length(array)

    return reduceWithValueKey(
      (accumulated: ArrayType): Function =>
        (value: ValueType): Function =>
          (index: number): ArrayType => {
            if (greaterThan(index)(total - count - 1)) {
              return accumulated
            }

            return append(value)(accumulated)
          }
    )(
      []
    )(
      array
    )
  }
}
