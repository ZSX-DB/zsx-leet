// const triangleNumber = (nums: number[]): number => {
//     const detectTriangle = (num1: number, num2: number, num3: number): boolean => (num1 + num2 > num3) && (num1 + num3 > num2) && (num2 + num3 > num1)
//     let count: number = 0
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (detectTriangle(nums[i], nums[j], nums[k])) {
//                     count++
//                 }
//             }
//         }
//     }
//     return count
// }

// 排序优化
// const triangleNumber = (nums: number[]): number => {
//     nums.sort((x, y) => x - y)
//     let count: number = 0
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 // 排序后 nums[i] <= nums[j] <= nums[k] ，只需判断 nums[i] + nums[j] > nums[k] 即可
//                 if (nums[i] + nums[j] > nums[k]) {
//                     count++
//                 } else {
//                     break
//                 }
//             }
//         }
//     }
//     return count
// }

// 二分优化
// const triangleNumber = (nums: number[]): number => {
//     nums.sort((x, y) => x - y)
//     let count: number = 0
//     for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//             const sum = nums[i] + nums[j]
//             let left = j + 1
//             let right = nums.length - 1
//             let k = j
//             while (left <= right) {
//                 const mid = Math.floor((left + right) / 2)
//                 if (sum > nums[mid]) {
//                     k = mid
//                     left = mid + 1
//                 } else {
//                     right = mid - 1
//                 }
//             }
//             // 由于排序，比 k 相等或小的索引都满足于 < sum
//             count += (k - j)
//         }
//     }
//     return count
// }

// 双指针优化
const triangleNumber = (nums: number[]): number => {
    nums = nums.filter(num => num !== 0).sort((x, y) => x - y)
    const length = nums.length
    let count: number = 0
    for (let i = 0; i < length - 2; i++) {
        let k = i
        for (let j = i + 1; j < length - 1; j++) {
            while (k + 1 < length && nums[k + 1] < nums[i] + nums[j]) {
                k++
            }
            count += Math.max(k - j, 0)
        }
    }
    return count
}

export default triangleNumber
