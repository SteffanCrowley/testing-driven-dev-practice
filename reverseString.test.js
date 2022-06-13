const reverseString = require("./reverseString");

test("reverse single word", () => {
  expect(reverseString("hello")).toMatch(/olleh/);
});

test("reverse entire sentance", () => {
  expect(reverseString("flamenco is gone")).toMatch(/enog si ocnemalf/);
});
