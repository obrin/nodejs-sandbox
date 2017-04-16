const exec = require('child_process').exec

exec(`cat ${__filename}`, (err, stdout, stderr) => {
  console.log('file', stdout)
})

