export function promisify(context, fn) {
  if (context instanceof Function) {
    fn = arguments[0];
    context = this;
  }

  return (...arg) => {
    return new Promise((resolve, reject) => {
      fn.call(context, ...arg, (err, res) =>
        err ? reject(err) : resolve(res))
    })
  }
}
