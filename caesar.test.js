const caesar = require("./caesar");

test("basic cipher test", () => {
  expect(caesar("abc")).toMatch(/bcd/);
});

test("longer cipher test", () => {
  expect(caesar("defend the east wall of the castle")).toMatch(
    /efgfoe uif fbtu xbmm pg uif dbtumf/
  );
});
