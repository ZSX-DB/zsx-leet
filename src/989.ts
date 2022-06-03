// const addToArrayForm = (num: number[], k: number): number[] => {
//     let nums1: number[]
//     let nums2: number[]
//     const kNums = String(k).split('').map(Number)
//     if (num.length >= kNums.length) {
//         nums1 = num.reverse()
//         nums2 = Array(num.length - kNums.length).fill(0).concat(kNums).reverse()
//     } else {
//         nums1 = Array(kNums.length - num.length).fill(0).concat(num).reverse()
//         nums2 = kNums.reverse()
//     }
//     const result: number[] = []
//     let than: 0 | 1 = 0
//     for (let i = 0; i < nums1.length; i++) {
//         const sum = nums1[i] + nums2[i] + than
//         if (sum >= 10) {
//             result.push(sum - 10)
//             than = 1
//         } else {
//             result.push(sum)
//             than = 0
//         }
//     }
//     return result.concat(than === 1 ? [1] : []).reverse()
// }

const addToArrayForm = (num: number[], k: number): number[] => {
    const result: number[] = []
    let idx = num.length - 1
    while (idx >= 0 || k) {
        k += (num[idx] ?? 0)
        result.push(k % 10)
        k = (k - k % 10) / 10
        idx--
    }
    return result.reverse()
}

export default addToArrayForm