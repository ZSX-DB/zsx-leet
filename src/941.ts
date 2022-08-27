// const validMountainArray = (arr: number[]): boolean => {
//     const length = arr.length
//     if (length < 3) {
//         return false
//     }
//     const peak = Math.max(...arr)
//     const peakIdx = arr.findIndex(item => item === peak)
//     if (peakIdx === 0 || peakIdx === length - 1) {
//         return false
//     }
//     for (let i = peakIdx; i > 0; i--) {
//         if (arr[i] <= arr[i - 1]) {
//             return false
//         }
//     }
//     for (let i = peakIdx; i < arr.length - 1; i++) {
//         if (arr[i] <= arr[i + 1]) {
//             return false
//         }
//     }
//     return true
// }

const validMountainArray = (arr: number[]): boolean => {
    const length = arr.length
    if (length < 3) {
        return false
    }
    let peak = -1
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false
        }
        if (peak === -1) {
            if (arr[i] > arr[i + 1]) {
                peak = arr[i]
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                return false
            }
        }
    }
    return peak !== -1 && peak !== arr[0]
}

// const validMountainArray = (arr: number[]): boolean => {
//     const length = arr.length
//     let i = 0
//     while (i + 1 < length && arr[i] < arr[i + 1]) {
//         i++
//     }
//     if (i === 0 || i === length - 1) {
//         return false
//     }
//     while (i + 1 < length && arr[i] > arr[i + 1]) {
//         i++
//     }
//     return i === length - 1
// }

export default validMountainArray
