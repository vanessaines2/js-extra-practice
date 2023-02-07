const {
  simpleSum,
  defaultGreet,
  taxCalculator,
} = require("../practice-questions/functions");

describe("simpleSum", () => {
  it("is a function", () => {
    expect(typeof simpleSum).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = simpleSum(1, 2);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the sum of two positive numbers", () => {
    let returnedValue = simpleSum(1, 2);
    expect(returnedValue).toEqual(3);
  });

  it("returns the sum of two negative numbers", () => {
    let returnedValue = simpleSum(-10, -20);
    expect(returnedValue).toEqual(-30);
  });
});

describe("defaultGreet", () => {
  it("is a function", () => {
    expect(typeof defaultGreet).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = defaultGreet("Natalie", "Cole");
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns the correct greeting if the first and last name is defined", () => {
    let returnedValue = defaultGreet("Natalie", "Cole");
    expect(returnedValue).toEqual("Hi Natalie Cole!");
  });

  it("returns the correct greeting if the last name is undefined", () => {
    let returnedValue = defaultGreet("Jane");
    expect(returnedValue).toEqual("Hi Jane Doe!");
  });
});

describe("taxCalculator", () => {
  it("is a function", () => {
    expect(typeof taxCalculator).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = taxCalculator(100, "NY");
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the correct price for NY", () => {
    let returnedValue = taxCalculator(50, "NY");
    expect(returnedValue).toEqual(52);
  });

  it("returns the correct price for NJ", () => {
    let returnedValue = taxCalculator(10, "NJ");
    expect(returnedValue).toEqual(10.6625);
  });
});

describe("myMnemonic", () => {
  it("is a function", () => {
    expect(typeof myMnemonic).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = myMnemonic("");
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a mnemonic if all four strings are defined", () => {
    let returnedValue = myMnemonic("Frankly", "Umbrellas", "Love", "Leather");
    expect(returnedValue).toEqual("FULL");
  });

  it("returns a mnemonic if only three string are defined", () => {
    let returnedValue = myMnemonic("Super", "Tacos", "Apples");
    expect(returnedValue).toEqual("STA");
  });

  it("returns a mnemonic if only two string are defined", () => {
    let returnedValue = myMnemonic("Candy", "Kringles");
    expect(returnedValue).toEqual("CK");
  });
});
