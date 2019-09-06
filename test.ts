/* eslint-disable no-magic-numbers */
import dropLast from "./index";

test("works", () => {
  expect(dropLast(2)(["a", "b", "c"])).toEqual(["a"]);
});

test("works", () => {
  expect(dropLast(1)(["a", "b", "c"])).toEqual(["a", "b"]);
});


test("works", () => {
  expect(dropLast(2)("abc")).toEqual("a");
});

test("works", () => {
  expect(dropLast(1)("abc")).toEqual("ab");
});
