// const judgeSquareSum = (c: number): boolean => {
//     let i = 0
//     let j = Math.floor(Math.sqrt(c))
//     let sum = i ** 2 + j ** 2
//     while (i <= j) {
//         if (sum > c) {
//             j--
//         } else if (sum < c) {
//             i++
//         } else {
//             return true
//         }
//         sum = i ** 2 + j ** 2
//     }
//     return false
// }

const judgeSquareSum = (c: number): boolean => {
    for (let i = 0; i * i <= c; i++) {
        const num = Math.sqrt(c - i * i)
        if (num === Math.floor(num)) {
            return true
        }
    }
    return false
}

export default judgeSquareSum
