const spawn = require('child_process').spawn

/*
if (process.argv.includes('child')) {
  console.log('this is the child')
} else {
  const path = `${__dirname}/exec.js`

  const child = spawn(process.execPath, [path, 'child'], {
    stdio: 'inherit'
  })

  // child.stdout.on('data', (data) => {
  //   console.log('from child', data.toString())
  // })

  // child.stdout.pipe(process.stdout)
}
*/

/**
 * Passing messages from child to parent
 */
if (process.argv.includes('child')) {
  const net = require('net')
  const pipe = new net.Socket({ fd: 3 })

  pipe.write('killme')
} else {
  const child = spawn(process.execPath, [__filename, 'child'], {

    // stdin, stout, stderr, pipe
    stdio: [null, null, null, 'pipe']
  })

  child.stdio[3].on('data', (data) => {
    if (data.toString() === 'killme') {
      console.log('RIP')
      child.kill()
    }
  })
}



// // import './child-process/spawn.js'
// // import './streams'
//
// const os = require('os')
// const cluster = require('cluster')
//
// const cpuCount = os.cpus().length
//
// console.log('cpu count: ', cpuCount)
//
// console.log('is master: ', cluster.isMaster)
//
// if (cluster.isMaster) {
//   // cluster.fork()
//   // cluster.fork()
// } else {
//   console.log('========')
//   require('./console.js')
// }


