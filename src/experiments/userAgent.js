const userAgent = '';

export const isMobile = {
  windows (agent = userAgent) {
    return /IEMobile/i.test(agent)
  },

  android () {
    return /Android/i.test(userAgent)
  },

  blackBerry () {
    return /BlackBerry/i.test(userAgent)
  },

  iOS () {
    return /iPhone|iPad|iPod/i.test(userAgent)
  },

  any () {
    console.log(isMobile)
    return (isMobile.android() || isMobile.blackBerry() || isMobile.iOS() || isMobile.windows())
  }
}
