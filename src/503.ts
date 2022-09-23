// const nextGreaterElements = (nums: number[]): number[] => {
//     const n = nums.length
//     const max = Math.max(...nums)
//     const ret: number[] = []
//     nums.push(...nums)
//     for (let i = 0; i < n; i++) {
//         if (nums[i] === max) {
//             ret.push(-1)
//         } else {
//             for (let j = i + 1; j < 2 * n; j++) {
//                 if (nums[j] > nums[i]) {
//                     ret.push(nums[j])
//                     break
//                 }
//             }
//         }
//     }
//     return ret
// }

const nextGreaterElements = (nums: number[]): number[] => {
    const n = nums.length
    const ret = Array(n).fill(-1)
    // stack 保存下标
    const stack: number[] = []
    for (let i = 0; i < n * 2; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
            ret[stack.pop()] = nums[i % n]
        }
        stack.push(i % n)
    }
    return ret
}

export default nextGreaterElements
