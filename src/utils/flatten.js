export default function flatten(target, opts) {
  opts = opts || {}

  const delimiter = opts.delimiter || '.'
  let maxDepth = opts.maxDepth
  let currentDepth = 1
  const output = {}

  function step(object, prev) {
    Object.keys(object).forEach(function(key) {
      const value = object[key]
      const isarray = opts.safe && Array.isArray(value)
      const type = Object.prototype.toString.call(value)
      const isobject = (
        type === "[object Object]" ||
        type === "[object Array]"
      )

      const newKey = prev
        ? prev + delimiter + key
        : key

      if (!opts.maxDepth) {
        maxDepth = currentDepth + 1;
      }

      if (!isarray && isobject && Object.keys(value).length && currentDepth < maxDepth) {
        ++currentDepth
        return step(value, newKey)
      }

      output[newKey] = value
    })
  }

  step(target)

  return output
}
