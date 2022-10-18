const canPartition = (nums: number[]): boolean => {
    const sum = nums.reduce((total, num) => total + num, 0)
    if (sum % 2 === 1) {
        return false
    }
    const dp = Array(sum / 2 + 1).fill(0)
    dp[0] = 1
    for (const num of nums) {
        for (let i = sum / 2; i >= num; i--) {
            dp[i] += dp[i - num]
        }
    }
    return dp[sum / 2] > 0
}

export default canPartition
