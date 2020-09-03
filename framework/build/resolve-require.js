function resolve(script) {
  const regex = /require\("(.+)"\)/g;
  const foundPaths = regex.exec(script);
  console.log(foundPaths);
}

module.exports.resolve = resolve;