const { readdirSync, statSync } = require("fs");
const { join } = require("path");

function filterFile(root, filter) {
  const dirs = readdirRecursively(root);
  const result = dirs.filter(d => filter.test(d));
  return result;
}

function readdirRecursively(root) {
  const dirs = readdirSync(root);
  return [].concat(...dirs.map(d => {
    const dir = join(root, d);
    if (statSync(dir).isFile()) {
      return [dir];
    }
    return readdirRecursively(dir);
  }));
}

function replace(globString) {
  return globString
    .replace("**/", "__ASTER2__")
    .replace("*", "__ASTER__")
    .replace("__ASTER2__", ".*")
    .replace("__ASTER__", "[^/]*")
}

function glob(globString) {
  const root = globString.substring(0, globString.indexOf("/"));
  const finallyRoot = root === "." ? process.cwd() : root;
  const regex = new RegExp(replace(globString.replace("./", `${finallyRoot}/`)), "i");
  const filteredFiles = filterFile(finallyRoot, regex);
  return filteredFiles;
}

module.exports.glob = glob;