const capitalize = require("./capitalize");

test("first letter is capitalized", () => {
  expect(capitalize("firstname")).toMatch(/Firstname/);
});

test("two words first letter", () => {
  expect(capitalize("flamenco is gone")).toMatch(/Flamenco is gone/);
});

test("ONLY first letter is capitalized", () => {
  expect(capitalize("fLAMENCO")).toMatch(/Flamenco/);
});
