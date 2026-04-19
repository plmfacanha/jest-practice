import main from "./main";

test("capitalize first character", () => {
  expect(main.capitalize("hello")).toBe("Hello");
});

test("capitalize keeps rest of string", () => {
  expect(main.capitalize("pedro")).toBe("Pedro");
});

test("capitalize empty string", () => {
  expect(main.capitalize("")).toBe("");
});

test("reverse a string", () => {
  expect(main.reverseString("hello")).toBe("olleh");
});

test("reverse another string", () => {
  expect(main.reverseString("Pedro")).toBe("ordeP");
});

test("calculator add", () => {
  expect(main.calculator.add(2, 3)).toBe(5);
});

test("calculator subtract", () => {
  expect(main.calculator.subtract(10, 4)).toBe(6);
});

test("calculator divide", () => {
  expect(main.calculator.divide(12, 3)).toBe(4);
});

test("calculator multiply", () => {
  expect(main.calculator.multiply(6, 7)).toBe(42);
});

// test("caesarCipher basic shift", () => {
//   expect(main.caesarCipher("abc", 3)).toBe("def");
// });

// test("caesarCipher wraps from z to a", () => {
//   expect(main.caesarCipher("xyz", 3)).toBe("abc");
// });

// test("caesarCipher preserves case", () => {
//   expect(main.caesarCipher("HeLLo", 3)).toBe("KhOOr");
// });

// test("caesarCipher keeps punctuation and spaces", () => {
//   expect(main.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
// });

test("analyzeArray returns correct object", () => {
  expect(main.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
