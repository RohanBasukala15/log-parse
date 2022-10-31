const parseFile = require("./index");

test("Testing the top 3 value in an array", () => {
  expect(
    parseFile.findTopThreeData([
      "a",
      "a",
      "a",
      "b",
      "b",
      "b",
      "b",
      "c",
      "c",
      "c",
      "d",
    ])
  ).toStrictEqual({ a: 3, b: 4, c: 3 });
});