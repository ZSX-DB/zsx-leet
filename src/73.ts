// const setZeroes = (matrix: number[][]): void => {
//     const m = matrix[0].length
//     const n = matrix.length
//     const rows: Set<number> = new Set<number>()
//     const cols: Set<number> = new Set<number>()
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (matrix[i][j] === 0) {
//                 rows.add(i)
//                 cols.add(j)
//             }
//         }
//     }
//     rows.forEach(row => {
//         for (let i = 0; i < m; i++) {
//             matrix[row][i] = 0
//         }
//     })
//     cols.forEach(col => {
//         for (let i = 0; i < n; i++) {
//             matrix[i][col] = 0
//         }
//     })
// }

const setZeroes = (matrix: number[][]): void => {
    const cols: Set<number> = new Set<number>()
    matrix.forEach(row => {
        if (row.includes(0)) {
            for (let i = 0; i < row.length; i++) {
                if(row[i] === 0) {
                    cols.add(i)
                } else {
                    row[i] = 0
                }
            }
        }
    })
    cols.forEach(col => {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0
        }
    })
}

export default setZeroes
