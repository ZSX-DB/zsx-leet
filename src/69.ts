// const mySqrt = (x: number): number => {
//     let y: number = x
//     while (y * y > x) {
//         y = Math.floor((y + x / y) / 2)
//     }
//     return y
// }

const mySqrt = (x: number): number => {
    let low: number = 0
    let high: number = x
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        if (mid ** 2 > x) {
            high = mid - 1
        } else if (mid ** 2 < x) {
            low = mid + 1
        } else {
            return mid
        }
    }
    return high
}

export default mySqrt
