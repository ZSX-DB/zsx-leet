// const wiggleMaxLength = (nums: number[]): number => {
//     nums = nums.filter((num, index) => num !== nums[index - 1])
//     const up = Array(nums.length).fill(0)
//     const down = Array(nums.length).fill(0)
//     up[0] = 1
//     down[0] = 1
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > nums[i - 1]) {
//             up[i] = Math.max(up[i - 1], down[i - 1] + 1)
//             down[i] = down[i - 1]
//         } else {
//             up[i] = up[i - 1]
//             down[i] = Math.max(up[i - 1] + 1, down[i - 1])
//         }
//     }
//     return Math.max(up[up.length - 1], down[down.length - 1])
// }

// 动态规划优化
const wiggleMaxLength = (nums: number[]): number => {
    nums = nums.filter((num, index) => num !== nums[index - 1])
    let up = 1
    let down = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up = Math.max(up, down + 1)
        } else {
            down = Math.max(up + 1, down)
        }
    }
    return Math.max(up, down)
}

export default wiggleMaxLength
