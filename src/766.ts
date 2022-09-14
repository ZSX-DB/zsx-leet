// const isToeplitzMatrix = (matrix: number[][]): boolean => {
//     for (let i = 1; i < matrix.length; i++) {
//         for (let j = 1; j < matrix[0].length; j++) {
//             if (matrix[i][j] !== matrix[i - 1][j - 1]) {
//                 return false
//             }
//         }
//     }
//     return true
// }

const isToeplitzMatrix = (matrix: number[][]): boolean => {
    const m = matrix.length
    const n = matrix[0].length
    const memo = new Set<string>()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (memo.has(`${i}_${j}`)) {
                continue
            }
            memo.add(`${i}_${j}`)
            let copyI = i
            let copyJ = j
            while (copyI < m && copyJ < n) {
                if (matrix[copyI][copyJ] !== matrix[i][j]) {
                    return false
                }
                memo.add(`${copyI}_${copyJ}`)
                copyI++
                copyJ++
            }
        }
    }
    return true
}

export default isToeplitzMatrix
