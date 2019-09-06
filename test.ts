/* eslint-disable no-magic-numbers */
import dropLast from "./index.ts";

test(() => {
  expect(dropLast(2)(["a", "b", "c"])).toEqual(["a"]);
});

test(() => {
  expect(dropLast(1)(["a", "b", "c"])).toEqual(["a", "b"]);
});


test(() => {
  expect(dropLast(2)("abc")).toEqual("a");
});

test(() => {
  expect(dropLast(1)("abc")).toEqual("ab");
});
