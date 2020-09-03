const { run } = require("./test-runner");
const { glob } = require("../utils/file-filter");

const specs = glob("./framework/test/*.spec.js");
specs.forEach(spec => require(spec));
run();