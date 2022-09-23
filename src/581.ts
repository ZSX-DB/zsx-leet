const findUnsortedSubarray = (nums: number[]): number => {
    const n = nums.length
    let max = -Infinity
    let min = Infinity
    let left = -1
    let right = -1
    for (let i = 0; i < n; i++) {
        if (nums[i] < max) {
            right = i
        } else {
            max = nums[i]
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > min) {
            left = i
        } else {
            min = nums[i]
        }
    }
    return (left === -1 || right === -1) ? 0 : right - left + 1
}

// const findUnsortedSubarray = (nums: number[]): number => {
//     const copy = [...nums]
//     const length = copy.length
//     nums.sort((x, y) => x - y)
//     let left = -1
//     let right = -1
//     for (let i = 0; i < length; i++) {
//         if (nums[i] !== copy[i]) {
//             left = i
//             break
//         }
//     }
//     if (left === -1) {
//         return 0
//     }
//     for (let i = length - 1; i >= 0; i--) {
//         if (nums[i] !== copy[i]) {
//             right = i
//             break
//         }
//     }
//     return right - left + 1
// }

// const findUnsortedSubarray = (nums: number[]): number => {
//     const max = {
//         val: nums[0],
//         idx: 0
//     }
//     const min = {
//         val: nums[0],
//         idx: 0
//     }
//     const indexes: number[] = []
//     for (let i = 1; i < nums.length; i++) {
//         const num = nums[i]
//         if (num > max.val) {
//             max.val = num
//             max.idx = i
//         } else if (num < min.val) {
//             indexes.push(i, min.idx)
//             min.val = num
//             min.idx = i
//         } else if (num > min.val && num < max.val) {
//             indexes.push(i, nums.findIndex(n => n > num))
//         } else if (num === min.val && num < max.val) {
//             indexes.push(min.idx + 1, i)
//         }
//     }
//     return indexes.length ? Math.max(...indexes) - Math.min(...indexes) + 1 : 0
// }

export default findUnsortedSubarray
