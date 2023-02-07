const {
  found,
  name,
  result,
  boolean1,
  boolean2,
} = require("../practice-questions/control-flow");

describe("found", () => {
  it("is of type boolean", () => {
    expect(typeof found).toEqual("boolean");
  });

  it("is true only if name is David or Nimit", () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let foundValues = {
      David: true,
      Nimit: true,
      "Someone else": false,
    };

    expect(found).toEqual(foundValues[name]);
  });
});

// --

describe("lastWord", () => {
  it("should be of type string", () => {
    expect(typeof lastWord).toEqual("string");
  });

  it("should be uppercased if word starts with p and has length of 7", () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let lastWordValues = {
      carrots: "carrots",
      pacific: "PACIFIC",
      perfecto: "perfecto",
      perfect: "PERFECT",
    };

    expect(lastWord).toEqual(lastWordValues[word]);
  });
});

describe("result", () => {
  it("should be of type string", () => {
    expect(typeof result).toEqual("string");
  });

  it("should be both, one, or none depending on the boolean1 and boolean2 values", () => {
    // this test is intentionally harder to read; otherwise the test may give away the answer!
    let resultValues = {
      truetrue: "both",
      truefalse: "one",
      falsetrue: "one",
      falsefalse: "none",
    };

    expect(result).toEqual(resultValues[String(boolean1) + String(boolean2)]);
  });
});
