// const combinationSum4 = (nums: number[], target: number): number => {
//     nums = nums.filter(num => num <= target)
//     if (nums.length === 0) {
//         return 0
//     }
//     let ret = 0
//     const backtrack = (item: number[], sum: number): void => {
//         if (sum > target) {
//             return
//         }
//         if (sum === target) {
//             ret++
//             return
//         }
//         for (const num of nums) {
//             backtrack(item.concat(num), sum + num)
//         }
//     }
//     backtrack([], 0)
//     return ret
// }

const combinationSum4 = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b)
    while (nums[nums.length - 1] > target) {
        nums.pop()
    }
    const dp = Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            dp[i] += (dp[i - num] ?? 0)
        }
    }
    return dp[target]
}

export default combinationSum4
