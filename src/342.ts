// const isPowerOfFour = (n: number): boolean => {
//     if (n <= 0) {
//         return false
//     }
//     let num = 1
//     while (num !== n) {
//         if (num > n) {
//             return false
//         }
//         num *= 4
//     }
//     return true
// }


// 4 的幂转换为四进制第一位是 1 ，其他位均为 0
const isPowerOfFour = (n: number): boolean => {
    if (n <= 3) {
        return n === 1
    }
    const quaternary = n.toString(4)
    return quaternary[0] !== '1' ? false : quaternary.substring(1).split('').every(char => char === '0')
}

export default isPowerOfFour
