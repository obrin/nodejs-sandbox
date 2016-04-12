import './promisify';

function fakeApiCb(data, cb) {
  setTimeout(() => {
    cb(null, data)
  }, 1000)
}

export function fakeApi(data, cb) {
  return cb instanceof Function ? fakeApiCb(data, cb) : promisify(fakeApiCb)(data)
}
