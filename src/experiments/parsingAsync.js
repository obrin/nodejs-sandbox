function fakeApi(payload) {
  return new Promise((resolve, reject) => {
    resolve(payload)
  })
}

async function attachHello(data) {
  data.hello = await fakeApi('world')
  return data
}

const layer = [[{}],[{}]]

async function init() {
  function sliceLayers(firstLayer) {
    return Promise.all(firstLayer.map(secondLayer =>
      Promise.all(secondLayer.map(attachHello)))
    )
  }

  const layer = await sliceLayers(layer).then(console.log)
  console.log(layer)
}

init()
