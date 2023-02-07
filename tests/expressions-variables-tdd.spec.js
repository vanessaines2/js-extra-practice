const {
  favoriteActivity,
  myFirstName,
  myFavoriteNum,
  havingFun,
  myGuess,
} = require("../practice-questions/expressions-variables-and-TDD");

describe("favoriteActivity", function () {
  it("should be coding", function () {
    expect(favoriteActivity).toEqual("coding");
  });
});

describe("variable-assignment", function () {
  describe("myFirstName", function () {
    it("should be a string value", function () {
      expect(typeof myFirstName).toEqual("string");
    });
  });

  describe("myFavoriteNum", function () {
    it("should be a number value", function () {
      expect(typeof myFavoriteNum).toEqual("number");
    });
  });

  describe("havingFun", function () {
    it("should be a boolean value", function () {
      expect(typeof havingFun).toEqual("boolean");
    });
  });
});

describe("myFirstSum", function () {
  it("should be a number", function () {
    expect(typeof myFirstSum).toEqual("number");
  });

  it("should be equal to 2018", function () {
    expect(myFirstSum).toEqual(2018);
  });
});

describe("myGuess", function () {
  it("should be a number", function () {
    expect(typeof myGuess).toEqual("number");
  });

  it("should be the right value", function () {
    expect(myGuess).toEqual(400);
  });
});
