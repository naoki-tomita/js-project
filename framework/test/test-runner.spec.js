let counter = 0;
function call(time) {
  return function() {
    counter++;
    if (counter !== time) {
      throw Error(`Expected call timing is ${time}. but, called at ${counter}`);
    }
  };
}

describe("describe", () => {
  before(call(1));
  after(call(8));
  it("it1", call(2));
  it("it2", call(3));
  it("it3", call(4));
  describe("inner describe", () => {
    before(call(5));
    after(call(7));
    it("inner it", call(6));
  });
});

describe("when error then write error.", () => {
  throw Error("Error");
});

describe("Error when it running", () => {
  it("no error", () => {
    console.log("No error1");
  });

  it("error", () => {
    throw Error("ERROR");
  });

  it("no error2", () => {
    console.log("No error2");
  });
});
