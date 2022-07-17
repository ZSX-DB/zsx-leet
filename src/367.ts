// const isPerfectSquare = (num: number): boolean => num ** 0.5 % 1 === 0

const isPerfectSquare = (num: number): boolean => {
    if (num === 1) {
        return true
    }
    let n: number = 2
    while (true) {
        const squareN = n ** 2
        if (squareN < num) {
            n = squareN
        } else if (squareN > num) {
            n--
            if (n ** 2 < num) {
                return false
            }
        } else {
            return true
        }
    }
}

// const isPerfectSquare = (num: number): boolean => {
//     let left: number = 1
//     let right = num
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2)
//         const squareNum = mid * mid
//         if (squareNum < num) {
//             left = mid + 1
//         } else if (squareNum > num) {
//             right = mid - 1
//         } else {
//             return true
//         }
//     }
//     return false
// }

export default isPerfectSquare
