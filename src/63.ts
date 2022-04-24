const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
    const firstRow = obstacleGrid[0]
    const firstCol = obstacleGrid.map(item => item[0])
    const m = firstRow.length
    const n = firstCol.length
    const memo: Map<string, number> = new Map<string, number>()
    const helper = (i: number, j: number): number => {
        const key: string = `${i}_${j}`
        if (memo.has(key)) {
            return memo.get(key) as number
        }
        if (obstacleGrid[i][j] === 1) {
            memo.set(key, 0)
            return 0
        }
        const result: number = helper(i - 1, j) + helper(i, j - 1)
        memo.set(key, result)
        return result
    }
    for (let y = 0; y < m; y++) {
        if (firstRow[y] === 1) {
            for (let y1 = y; y1 < m; y1++) {
                memo.set(`0_${y1}`, 0)
            }
            break
        }
        memo.set(`0_${y}`, 1)
    }
    for (let x = 0; x < n; x++) {
        if (firstCol[x] === 1) {
            for (let x1 = x; x1 < n; x1++) {
                memo.set(`${x1}_0`, 0)
            }
            break
        }
        memo.set(`${x}_0`, 1)
    }
    return helper(n - 1, m - 1)
}

// const uniquePathsWithObstacles = (obstacleGrid: number[][]): number => {
//     const n: number = obstacleGrid.length
//     const m: number = obstacleGrid[0].length
//     const dp: number[][] = Array.from({length: n}, () => Array(m).fill(0))
//     for (let i = 0; i < n; i++) {
//         if (obstacleGrid[i][0] === 1) {
//             break
//         }
//         dp[i][0] = 1
//     }
//     for (let i = 0; i < m; i++) {
//         if (obstacleGrid[0][i] === 1) {
//             break
//         }
//         dp[0][i] = 1
//     }
//     for (let i = 1; i < n; i++) {
//         for (let j = 1; j < m; j++) {
//             dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : (dp[i - 1][j] + dp[i][j - 1])
//         }
//     }
//     return dp[n - 1][m - 1]
// }

export default uniquePathsWithObstacles
