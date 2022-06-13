const calculator = require("./calculator");

test("add 2 nummbers", () => {
  expect(calculator.add(3, 5)).toBe(8);
});

test("sub 2 nummbers", () => {
  expect(calculator.sub(5, 2)).toBe(3);
});

test("mul 2 nummbers", () => {
  expect(calculator.mul(3, 5)).toBe(15);
});

test("div 2 nummbers", () => {
  expect(calculator.div(15, 5)).toBe(3);
});
