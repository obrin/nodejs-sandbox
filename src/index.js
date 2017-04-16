async function hello() {
  return 'hello---'
}


// hello().then(res => console.log(res))

function asyncPluOne(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 1)
    }, 100)
  })
}


const data = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]


async function main() {
  console.log('------')
  const results =
    await Promise.all(
      data.map(moreData => {
        console.log(moreData)
        return Promise.all(
          moreData.map(async (i) => {
            const res = await asyncPluOne(i)
            return res + 1
          })
        )
      })
    )

  console.log(results)
}

// main()

// async function main2() {
//
//   [1, 2, 3].forEach(async function(i) {
//
//   })
// }

// const diskCheckPromises = cdsList.map(async (cds) => {
//   console.log('Checking disk status')
//   let diskId = util.getDiskFromVideoId(data.videoId, cds.diskCount)
//   let diskInfo = await db.oneOrNone(`SELECT * FROM cds_disk WHERE cds_id = $1 AND disk_id = $1 AND type = 'disk'`,
//     [cds.cds_id, diskId])
//   if (diskInfo && diskInfo.status !== 'online') {
//     let videoInfo = await db.oneOrNone(`SELECT ssd_disk_id FROM cds_video WHERE cds_id = $1 AND manifest = $2`,
//       [cds.cds_id, data.manifest])
//     if (videoInfo && videoInfo.ssd_disk_id !== 0) {
//       let ssdDiskStatus = await db.oneOrNone(`SELECT * FROM cds_disk WHERE cds_id = $1 AND disk_id = $2 AND disk_type = 'ssd'`,
//         [cds.cds_id, videoInfo.ssd_disk_id])
//       if (ssdDiskStatus === 'offline') {
//         console.log('Removing CDS as disk(s) are offline')
//         cdsList.splice()
//       }
//     }
//   }
// })
//
// await Promise.all(diskCheckPromises)

// const args = ['hello', 'food']

const argv = {
  hello: 'word',
  // food: 'bacon'
}

function verifyCommandArgs(...args) {
  console.log('------', args)
  const message = args.reduce((arg, msg) => {
    console.log('-------', arg, msg)
    const exists = argv[arg]
    return !exists ? `${msg} --${arg} <value>` : msg
  }, '')

  console.log(message)

  // if (message) {
  //   console.error(`Please pass ${message}`)
  //   process.exit(1)
  // }
}



// verifyCommandArgs('hello', 'food')


