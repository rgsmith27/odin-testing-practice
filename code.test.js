import { capitalize, reverse } from "./code.js";

test("turns apple to Apple", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("reverses apple", () => {
  expect(reverse("apple")).toBe("elppa");
});
