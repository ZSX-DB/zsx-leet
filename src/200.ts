type IslandBlock = '0' | '1'

const numIslands = (grid: IslandBlock[][]): number => {
    let counter = 0
    const rowLen = grid.length
    const colLen = grid[0].length
    const sinkIsLand = (i: number, j: number) => {
        if (i < 0 || i >= rowLen) {
            return
        }
        if (j < 0 || j >= colLen) {
            return
        }
        if (grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        sinkIsLand(i - 1, j)
        sinkIsLand(i + 1, j)
        sinkIsLand(i, j - 1)
        sinkIsLand(i, j + 1)
    }
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === '1') {
                counter++
                sinkIsLand(i, j)
            }
        }
    }
    return counter
}

export default numIslands
