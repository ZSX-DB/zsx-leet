// const findPeakElement = (nums: number[]): number => {
//     let left = 0
//     let right = nums.length - 1
//     while (left < right) {
//         const mid = Math.floor((left + right) / 2)
//         if (nums[mid] < nums[mid + 1]) {
//             left = mid + 1
//         } else {
//             right = mid
//         }
//     }
//     return left
// }

// const findPeakElement = (nums: number[]): number => {
//     const maxNum = Math.max(...nums)
//     return nums.findIndex(num => num === maxNum)
// }

const findPeakElement = (nums: number[]): number =>
    nums.findIndex((num, i) => {
        const prev = nums[i - 1] ?? -Infinity
        const next = nums[i + 1] ?? -Infinity
        return num > prev && num > next
    })

export default findPeakElement
