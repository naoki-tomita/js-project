const tests = [{ name: "", before: [], it: [], after: [], children: [] }];
let current = tests[0];

function describe(name, cb) {
  const context = { name: `${current.name} ${name}`.trim(), before: [], it: [], after: [], children: [] };
  const last = current;
  current.children.push(context);
  current = context;
  try {
    cb();
  } catch (e) {
    console.error(e);
  }
  current = last;
}

function it(name, cb) {
  current.it.push({ name, cb });
}

function before(cb) {
  current.before.push(cb);
}

function after(cb) {
  current.after.push(cb);
}

function run(tests) {
  tests.forEach(test => {
    try {
      test.before.forEach(x => x());
      test.it.forEach(x => {
        try {
          x.cb()
        } catch (e) {
          console.error(e);
        }
      });
      run(test.children);
      test.after.forEach(x => x());
    } catch (e) {
      console.error(e);
    }
  });
}

module.exports.deescribe = global.describe = describe;
module.exports.before = global.before = before;
module.exports.it = global.it = it;
module.exports.after = global.after = after;
module.exports.run = () => {
  run(tests);
};