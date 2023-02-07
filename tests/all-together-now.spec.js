const {
  greeting,
  doYouPlayTheTheremin,
} = require("../practice-questions/all-together-now");

describe("greeting", () => {
  it("is a function", () => {
    expect(typeof greeting).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = greeting();
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a personalized greeting, given a name", () => {
    let returnedValue = greeting("Layla");
    expect(returnedValue).toEqual("Hello Layla!");
  });

  it("returns an anonymous greeting if no name is provided", () => {
    let returnedValue = greeting();
    expect(returnedValue).toEqual("Hello!");
  });
});

describe("doYouPlayTheTheremin", () => {
  it("is a function", () => {
    expect(typeof doYouPlayTheTheremin).toEqual("function");
  });

  it("returns an boolean", () => {
    let returnedValue = doYouPlayTheTheremin("Mark");
    expect(typeof returnedValue).toEqual("boolean");
  });

  it("returns true if the first letter of the name starts with s", () => {
    let returnedValue = doYouPlayTheTheremin("sarah");
    expect(returnedValue).toEqual(true);
  });

  it("returns true if the first letter of the name starts with S", () => {
    let returnedValue = doYouPlayTheTheremin("Sarah");
    expect(returnedValue).toEqual(true);
  });

  it("returns false given any other input", () => {
    let returnedValue = doYouPlayTheTheremin("Frank");
    expect(returnedValue).toEqual(false);
  });
});
