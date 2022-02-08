const older_than_eighteen = require("../scripts/age.js");

test("older than 18", () => {
  expect(older_than_eighteen(18)).toBe(true);
});

test("not older than 18", () => {
  expect(older_than_eighteen(10)).toBe(false);
});
