
function stub(impl) {
  const calls = [];
  const fn = (...args) => {
    calls.push(args);
    return impl && impl(...args);
  };
  fn.calls = calls;
  return fn;
}

module.exports.stub = stub;