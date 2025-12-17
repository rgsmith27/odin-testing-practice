import { capitalize, reverse, calculator } from "./code.js";

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
