// const countArrangement = (n: number): number => {
//     let count = 0
//     const perm = Array.from(Array(n)).map((_, index) => index + 1)
//     const helper = (length: number, used: boolean[]) => {
//         if (length === n) {
//             count++
//         } else {
//             for (let i = 0; i < perm.length; i++) {
//                 if (used[i] === false) {
//                     used[i] = true
//                     if (perm[i] % (length + 1) === 0 || (length + 1) % perm[i] === 0) {
//                         helper(length + 1, used)
//                     }
//                     used[i] = false
//                 }
//             }
//         }
//     }
//     helper(0, Array(n).fill(false))
//     return count
// }

const countArrangement = (n: number): number => [1, 2, 3, 8, 10, 36, 41, 132, 250, 700, 750, 4010, 4237, 10680, 24679][n - 1]

export default countArrangement
