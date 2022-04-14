// const spiralOrder = (matrix: number[][]): number[] => {
//     type Coordinate = readonly [number, number]
//     const result: number[] = []
//     const getOuter = (leftTop: Coordinate, rightBottom: Coordinate): void => {
//         const [r1, c1] = leftTop
//         const [r2, c2] = rightBottom
//         if (r1 > r2 || c1 > c2) {
//             return
//         }
//         if (r1 === r2 && c1 === c2) {
//             result.push(matrix[r1][c1])
//         } else if (r1 === r2 && c1 !== c2) {
//             result.push(...matrix[r1].filter((_, idx) => idx >= c1 && idx <= c2))
//         } else if (r1 !== r2 && c1 === c2) {
//             result.push(...matrix.map(row => row[c1]).filter((_, idx) => idx >= r1 && idx <= r2))
//         } else {
//             result.push(...matrix[r1].filter((_, idx) => idx >= c1 && idx <= c2)
//                 .concat(matrix.map(row => row[c2]).filter((_, idx) => idx > r1 && idx < r2))
//                 .concat(matrix[r2].filter((_, idx) => idx >= c1 && idx <= c2).reverse())
//                 .concat(matrix.map(row => row[c1]).filter((_, idx) => idx > r1 && idx < r2).reverse())
//             )
//             getOuter([r1 + 1, c1 + 1], [r2 - 1, c2 - 1])
//         }
//     }
//     getOuter([0, 0], [matrix.length - 1, matrix[0].length - 1])
//     return result
// }

// const spiralOrder = (matrix: number[][]): number[] => {
//     const result: number[] = []
//     const rowLen: number = matrix.length
//     const colLen: number = matrix[0].length
//     let left: number = 0
//     let right: number = colLen - 1
//     let top: number = 0
//     let bottom: number = rowLen - 1
//     while (left <= right && top <= bottom) {
//         for (let col = left; col <= right; col++) {
//             result.push(matrix[top][col])
//         }
//         for (let row = top + 1; row <= bottom; row++) {
//             result.push(matrix[row][right])
//         }
//         if (left < right && top < bottom) {
//             for (let col = right - 1; col >= left; col--) {
//                 result.push(matrix[bottom][col])
//             }
//             for (let row = bottom - 1; row > top; row--) {
//                 result.push(matrix[row][left])
//             }
//         }
//         [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
//     }
//     return result
// }

const spiralOrder = (matrix: number[][]): number[] => {
    if (matrix[0].length === 0) {
        return []
    } else if (matrix[0].length === 1) {
        return matrix.map(row => row[0])
    }
    if (matrix.length === 1) {
        return matrix[0]
    } else if (matrix.length === 2) {
        return matrix[0].concat(matrix[1].reverse())
    } else {
        const top: number[] = matrix.shift() as number[]
        const right: number[] = []
        const bottom: number[] = matrix.pop() as number[]
        const left: number[] = []
        matrix.forEach(row => {
            left.push(row.shift() as number)
            right.push(row.pop() as number)
        })
        return top.concat(right).concat(bottom.reverse()).concat(left.reverse()).concat(spiralOrder(matrix))
    }
}

export default spiralOrder
