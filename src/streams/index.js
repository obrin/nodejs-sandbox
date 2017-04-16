import fs from 'fs'

const bears = fs.createReadStream(`${__dirname}/bears.txt`)
bears.pipe(process.stdout)

const actualBears = fs.createWriteStream(`${__dirname}/actualbears.txt`)

bears.pipe(actualBears)
