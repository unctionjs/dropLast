/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import length from "@unction/length";
import fresh from "@unction/fresh";
export default function dropLast(count) {
  return function dropLastCount(orderedList) {
    const total = length(orderedList);
    return reduceWithValueKey(accumulated => value => index => {
      if (greaterThan(index)(total - count - 1)) {
        return accumulated;
      }

      return append(value)(accumulated);
    })(fresh(orderedList))(orderedList);
  };
}
