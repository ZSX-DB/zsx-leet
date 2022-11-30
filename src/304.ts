// class NumMatrix {
//     private readonly prefixSumMatrix: number[][]
//     constructor(matrix: number[][]) {
//         const m = matrix.length
//         const n = matrix[0].length
//         this.prefixSumMatrix = Array.from(Array(m)).map(() => Array(n + 1).fill(0))
//         for (let i = 0; i < m; i++) {
//             for (let j = 0; j < n; j++) {
//                 this.prefixSumMatrix[i][j + 1] = this.prefixSumMatrix[i][j] + matrix[i][j]
//             }
//         }

//     }

//     sumRegion(row1: number, col1: number, row2: number, col2: number): number {
//         let ret = 0
//         for (let i = row1; i <= row2; i++) {
//             ret += this.prefixSumMatrix[i][col2 + 1] - this.prefixSumMatrix[i][col1]
//         }
//         return ret
//     }
// }

class NumMatrix {
    private readonly prefixSumMatrix: number[][] = []
    constructor(matrix: number[][]) {
        matrix.forEach(row => {
            const temp: number[] = [0]
            for (let j = 0; j < matrix[0].length; j++) {
                temp.push(row[j] + temp[j])
            }
            this.prefixSumMatrix.push(temp)
        })
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let ret = 0
        for (let i = row1; i <= row2; i++) {
            ret += (this.prefixSumMatrix[i][col2 + 1] - this.prefixSumMatrix[i][col1])
        }
        return ret
    }
}

export default NumMatrix    
