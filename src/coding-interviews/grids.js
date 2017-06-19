// matrix represented as a single array
// 8x4 row x column
function matrix1d () {
  const ROW = 3
  const COLUMN = 4
  const grid = new Array(ROW * COLUMN).fill(0)

  grid[5] = 10

  function getValue (row, column) {
    const index = (row - 1) * ROW + column
    return grid[index]
  }

  function getRowColumn (i) {
    const index = i
    const column = index % COLUMN + 1
    const row = Math.ceil(index / COLUMN)
    return [row, column]
  }

  console.log(getValue(2, 2))
  console.log(getRowColumn(5))
  // console.log(grid)
}

// matrix1d()

function matrix2d () {
  const ROW = 3
  const COLUMN = 4

  const grid = Array(ROW).fill(0).map(() => Array(COLUMN).fill(0))
  // console.log(grid)
}

matrix2d()
