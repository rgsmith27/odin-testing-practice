import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./code.js";

test("turns apple to Apple", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("reverses apple", () => {
  expect(reverse("apple")).toBe("elppa");
});

test("add 1 and 1", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("subtract 1 from 2", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("multiply 2 by 2", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("divide 4 by 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("shift xyz by 3", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shift HeLLo by 3", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("shift Hello, World! by 3", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  const obj = analyzeArray(arr);
  expect(obj).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
