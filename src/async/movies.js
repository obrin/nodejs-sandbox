function getMostPopularMovies (callback) {
  const ids = [
    1,
    2,
    3,
    4,
    5
  ]

  setTimeout(() => {
    callback(null, ids)
  }, 1000)
}

function getMovieTitlesAPI (id, callback) {
  const dictionary = {
    1: 'movie1',
    2: 'movie2',
    3: 'movie3',
    4: 'movie4',
    5: 'movie5'
  }

  setTimeout(() => {
    callback(null, dictionary[id])
  }, 1000)
}

// expected output
const ans = [
  {
    id: 1,
    title: 'movie1'
  },
  {
    id: 2,
    title: 'movie2'
  },
  {
    id: 3,
    title: 'movie3'
  },
  {
    id: 4,
    title: 'movie4'
  },
  {
    id: 5,
    title: 'movie5'
  }
]

function getMoviesMetadata (callback) {
  getMostPopularMovies((err, mostPopularIds) => {
    const dict = []
    mostPopularIds.forEach((id, index, arr) => {
      getMovieTitlesAPI(id, (err, title) => {
        dict.push({ id, title })

        if (index === arr.length - 1) {
          callback(null, dict)
        }
      })
    })
  })
}

// function getMoviesMetadata (callback) {
//   // write your code here
// }

getMoviesMetadata((err, res) => {
  // this should produce the answer
  console.log(res)
})
