const container = {}

export default {
  set(type, instance) {
    container[type] = instance
  },

  get(type) {
    return container[type]
  }
}
