/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan"
import append from "@unction/append"
import reduceWithValueKey from "@unction/reducewithvaluekey"
import length from "@unction/length"
import fresh from "@unction/fresh"

export default function dropLast (count: number): mixed {
  return function dropLastCount (orderedList: ArrayType | string): ArrayType | string {
    const total = length(orderedList)

    return reduceWithValueKey(
      (accumulated: ArrayType | string): Function =>
        (value: ValueType): Function =>
          (index: number): ArrayType | string => {
            if (greaterThan(index)(total - count - 1)) {
              return accumulated
            }

            return append(value)(accumulated)
          }
    )(
      fresh(orderedList)
    )(
      orderedList
    )
  }
}
