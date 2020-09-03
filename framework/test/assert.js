function assert(expect) {
  if (!expect) {
    throw Error("Expected true but, false inputed.");
  }
}

function assertEqual(expected, actual) {
  if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    throw Error(`Expected, actual parameter is not equal.\n${JSON.stringify(expected, "", "  ")}\n${JSON.stringify(actual, "", "  ")}`);
  }
}

module.exports.assert = assert;
module.exports.assertEqual = assertEqual;