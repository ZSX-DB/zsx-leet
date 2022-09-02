// const isMonotonic = (nums: number[]): boolean => {
//     if (nums[0] < nums[nums.length - 1]) {
//         for (let i = 0; i < nums.length - 1; i++) {
//             if (nums[i] > nums[i + 1]) {
//                 return false
//             }
//         }
//     } else if (nums[0] > nums[nums.length - 1]) {
//         for (let i = 0; i < nums.length - 1; i++) {
//             if (nums[i] < nums[i + 1]) {
//                 return false
//             }
//         }
//     } else {
//         for (let i = 0; i < nums.length - 1; i++) {
//             if (nums[i] !== nums[i + 1]) {
//                 return false
//             }
//         }
//     }
//     return true
// }

const isMonotonic = (nums: number[]): boolean => {
    let isAsc: boolean = true
    let isDesc: boolean = true
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            isDesc = false
        } else if (nums[i] > nums[i + 1]) {
            isAsc = false
        }
    }
    return isAsc || isDesc
}

export default isMonotonic
