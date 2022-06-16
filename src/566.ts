// const matrixReshape = (mat: number[][], r: number, c: number): number[][] => {
//     const m = mat.length
//     const n = mat[0].length
//     if ((m === r && n === c) || (m * n !== r * c)) {
//         return mat
//     }
//     let idx: number = 0
//     const nums: number[] = mat.flat(1)
//     const items: number[][] = []
//     for (let i = 0; i < r; i++) {
//         const item: number[] = []
//         for (let j = 0; j < c; j++) {
//             item.push(nums[idx])
//             idx++
//         }
//         items.push(item)
//     }
//     return items
// }

const matrixReshape = (mat: number[][], r: number, c: number): number[][] => {
    const m = mat.length
    const n = mat[0].length
    if ((m === r && n === c) || (m * n !== r * c)) {
        return mat
    }
    const nums: number[] = mat.flat(1)
    const result: number[][] = []
    for (let i = 0; i < nums.length; i += c) {
        result.push(nums.slice(i, i + c))
    }
    return result
}


export default matrixReshape
