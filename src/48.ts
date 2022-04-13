// const rotate = (matrix: number[][]): void => {
//     const len: number = matrix.length
//     const copy: number[][] = Array.from({length: len}, () => Array(len).fill(0))
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             copy[j][len - i - 1] = matrix[i][j]
//         }
//     }
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             matrix[i][j] = copy[i][j]
//         }
//     }
// }

const rotate = (matrix: number[][]): void => {
    const len: number = matrix.length
    const vis: boolean[][] = Array.from({length: len}, () => Array(len).fill(false))
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (vis[i][j]) {
                continue
            }
            [matrix[i][j], matrix[j][len - i - 1]] = [matrix[j][len - i - 1], matrix[i][j]];
            vis[i][j] = true
            vis[j][len - i - 1] = true
        }
    }
}

export default rotate
