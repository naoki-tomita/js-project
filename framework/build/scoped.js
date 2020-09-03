function scoped(script) {
  return (
    `(function() {
      const module = {};
      const exports = module.exports = {};
      ${script}
      return module.exports;
    })()`
  );
}

module.exports.scoped = scoped;