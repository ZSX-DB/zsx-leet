// const findTargetSumWays = (nums: number[], target: number): number => {
//     if (nums.length === 0) {
//         return 0
//     }
//     const sum = nums.reduce((total, num) => total + num, 0)
//     const diff = sum - target
//     if (diff < 0 || diff % 2 !== 0) {
//         return 0
//     }
//     const n = nums.length
//     const neg = diff / 2
//     // dp[i][j] 表示在数组 nums 的前 i 个数中选取元素，使得这些元素之和等于 j 的方案数
//     const dp = Array.from(Array(n + 1)).map(() => Array(neg + 1).fill(0))
//     dp[0][0] = 1
//     for (let i = 1; i <= n; i++) {
//         const num = nums[i - 1]
//         for (let j = 0; j <= neg; j++) {
//             dp[i][j] = dp[i - 1][j]
//             if (j >= num) {
//                 dp[i][j] += dp[i - 1][j - num]
//             }
//         }
//     }
//     return dp[n][neg]
// }

const findTargetSumWays = (nums: number[], target: number): number => {
    if (nums.length === 1) {
        let ret = 0
        if (nums[0] === target) {
            ret++
        }
        if (nums[0] === -target) {
            ret++
        }
        return ret
    } else {
        const num = nums[0]
        nums.splice(0, 1)
        return findTargetSumWays([...nums], target - num) + findTargetSumWays([...nums], target + num)
    }
}

export default findTargetSumWays
