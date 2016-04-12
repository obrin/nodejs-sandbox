const tvSeries = [
  {
    series: {
      title: 'Arrow',
    },
    season: [
      {
        title: 'Arrow Season 1'
      },
      {
        title: 'Arrow Season 2'
      }
    ]
  },
  {
    series: {
      title: 'Arrow 2',
    },
    season: [
      {
        title: 'Arrow Season 1'
      },
      {
        title: 'Arrow Season 2'
      }
    ]
  }
]

function bulkSave(tvShow) {
  tvShow.forEach(async data => {
    const { series, season } = data
    // console.log('================'); // TODO: REMOVE CONSOLE LOG
    const savedSeries = await save(series)

    // console.log('------------'); // TODO: REMOVE CONSOLE LOG
    // console.log(savedSeries); // TODO: REMOVE CONSOLE LOG
    const parentId = savedSeries._id

    season.forEach(item => {
      console.log(' season---============-', parentId); // TODO: REMOVE CONSOLE LOG
      item.parentId = parentId
      save(item)
    })
  })
}

// bulkSave(tvSeries)

function save(data) {
  const id = Math.floor(1000 + Math.random() * 9000)
  // console.log('SAVING DATA', data); // TODO: REMOVE CONSOLE LOG
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        _id: id,
        ...data
      })
    }, 2000)
  })
}

function generateId() {
  return Math.floor(1000 + Math.random() * 9000)
}


const tv = [
  {
    series: {
      title: 'Arrow',
    },
    seasons: {
      title: 'Arrow Season 1'
    }
  },
  {
    series: {
      title: 'Arrow',
    },
    seasons: {
      title: 'Arrow Season 2'
    }
  },
  {
    series: {
      title: 'Arrow',
    },
    seasons: {
      title: 'Arrow Season 3'
    }
  },
  {
    series: {
      title: 'Flash',
    },
    seasons: {
      title: 'Flash Season 3'
    }
  }
]


function groupSeries(data) {
  const reduced = data.reduce((acc, item) => {
    const series = item.series || {}
    const seasons = item.seasons || []
    const key = item.series && item.series.title

    if (!acc[key]) {
      acc[key] = { seasons: [] }
    }
    acc[key] = {
      series,
      seasons: [...acc[key].seasons, seasons]
    }
    return acc
  }, {})

  return _.map(reduced)
}


function doSomething(input) {
  setTimeP(input)
    .then(setTimeP)
    .then(compose(addOne, addOne, addOne, addOne, addOne))
    .then(setTimeP)
    .then(setTimeP)
    .then((res) => console.log('-=-=-=-=',res))

}

import { normalize, Schema, arrayOf } from 'normalizr';


const nestedData =
{
  id: 1,
  title: 'Some Article',
  author: {
    id: 7,
    name: 'Dan'
  },
  contributors: [{
    id: 10,
    name: 'Abe'
  }, {
    id: 15,
    name: 'Fred'
  }]
}


const article = new Schema('articles');
const user = new Schema('users');


article.define({
  author: user,
  contributors: arrayOf(user)
});

const norm = normalize(nestedData, article)

const response = normalize(norm, {
  articles: arrayOf(article)
});

console.log(JSON.stringify(norm, 0 , 2)); // TODO: REMOVE CONSOLE LOG

