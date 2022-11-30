const largestDivisibleSubset = (nums: number[]): number[] => {
    nums.sort((a, b) => a - b)
    const n = nums.length

    const dp = Array(n).fill(1)
    let maxSize = 1
    let maxValue = dp[0]
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if (dp[i] > maxSize) {
            maxSize = dp[i]
            maxValue = nums[i]
        }
    }
    if (maxSize === 1) {
        return [nums[0]]
    }
    const ret: number[] = []
    for (let i = nums.lastIndexOf(maxValue); i >= 0; i--) {
        if (maxValue % nums[i] === 0 && dp[i] === maxSize) {
            ret.unshift(nums[i])
            maxValue = nums[i]
            maxSize--
        }
    }
    return ret
}

export default largestDivisibleSubset
