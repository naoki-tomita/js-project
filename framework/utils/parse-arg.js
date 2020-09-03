
function parse() {
  const arguments = process.argv;
  const parsedArg = {};
  for (i = 0; i < arguments.length; i += 2) {
    const key = arguments[i];
    if (key.startsWith("-")) {
      const value = arguments[i + 1];
      parsedArg[key] = value;
    } else {
      i--;
    }
  }
  return parsedArg;
}

module.exports.parse = parse;