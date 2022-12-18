// const findLengthOfLCIS = (nums: number[]): number => {
//     const stack: number[] = []
//     let max = 1
//     for (const num of nums) {
//         if (stack.length === 0) {
//             stack.push(num)
//             continue
//         }
//         if ((stack[stack.length - 1] as number) < num) {
//             max = Math.max(max, stack.length + 1)
//         } else {
//             stack.length = 0
//         }
//         stack.push(num)
//     }
//     return max
// }

const findLengthOfLCIS = (nums: number[]): number => {
    let current = 1
    let max = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            current++
            max = Math.max(max, current)
        } else {
            current = 1
        }
    }
    return max
}

export default findLengthOfLCIS
