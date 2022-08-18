// const longestSubarray = (nums: number[], limit: number): number => {
//     const n = nums.length
//     const queASC: number[] = []
//     const queDESC: number[] = []
//     let left = 0
//     let right = 0
//     while (right < n) {
//         while (queDESC.length && queDESC[queDESC.length - 1] < nums[right]) {
//             queDESC.pop()
//         }
//         while (queASC.length && queASC[queASC.length - 1] > nums[right]) {
//             queASC.pop()
//         }
//         queDESC.push(nums[right])
//         queASC.push(nums[right])
//         if (queDESC[0] - queASC[0] > limit) {
//             if (nums[left] === queASC[0]) {
//                 queASC.shift()
//             }
//             if (nums[left] === queDESC[0]) {
//                 queDESC.shift()
//             }
//             left++
//         }
//         right++
//     }
//     return right - left
// }

const longestSubarray = (nums: number[], limit: number): number => {
    const sw = [nums[0]]
    let max = nums[0]
    let min = nums[0]
    let longest = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === max || nums[i] === min || (nums[i] > min && nums[i] < max)) {
            sw.push(nums[i])
        } else if (Math.abs(nums[i] - max) <= limit && Math.abs(nums[i] - min) <= limit) {
            sw.push(nums[i])
            max = Math.max(max, nums[i])
            min = Math.min(min, nums[i])
        } else {
            for (let j = sw.length - 1; j >= 0; j--) {
                if (Math.abs(sw[j] - nums[i]) > limit) {
                    sw.splice(0, j + 1)
                    break
                }
            }
            sw.push(nums[i])
            max = Math.max(...sw)
            min = Math.min(...sw)
        }
        longest = Math.max(longest, sw.length)
    }
    return longest
}

export default longestSubarray
