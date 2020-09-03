const { assertEqual } = require("../test/assert");
const { glob } = require("./file-filter");

const cwd = process.cwd();
assertEqual(
  glob("./file-filter-test/**/*.js"),
  [
    `${cwd}/file-filter-test/bar/foo.js`,
    `${cwd}/file-filter-test/foo.js`,
    `${cwd}/file-filter-test/xxx/bar.spec.js`,
  ]
);
