import { capitalize } from "./code.js";

test("turns apple to Apple", () => {
  expect(capitalize("apple")).toBe("Apple");
});
