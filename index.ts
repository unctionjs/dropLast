/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import append from "@unction/append";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import length from "@unction/length";
import fresh from "@unction/fresh";
import {OrderedEnumerableType} from "./types";

export default function dropLast<A> (count: number) {
  return function dropLastCount (orderedList: OrderedEnumerableType<A>): OrderedEnumerableType<A> {
    return reduceWithValueKey(
      (accumulated: OrderedEnumerableType<A>) =>
        (value: A) =>
          (index: number) => {
            if (greaterThan(index)(length(orderedList) - count - 1)) {
              return accumulated;
            }

            return append(value)(accumulated);
          }
    )(
      fresh(orderedList)
    )(
      orderedList
    );
  };
}
