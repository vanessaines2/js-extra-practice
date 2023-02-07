const { favoriteActivity } = require("./favorite-activity");

describe("favoriteActivity", function () {
  it("should be coding", function () {
    expect(favoriteActivity).toEqual("coding");
  });
});
