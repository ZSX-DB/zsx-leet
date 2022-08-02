const checkSubarraySum = (nums: number[], k: number): boolean => {
    const n = nums.length
    if (n < 2) {
        return false
    } else if (n === 2) {
        return (nums[0] + nums[1]) % k === 0
    }
    const sums = [0, nums[0]]
    const record = new Set<number>()
    for (let i = 2; i <= n; i++) {
        sums[i] = sums[i - 1] + nums[i - 1]
        record.add(sums[i - 2] % k)
        if (record.has(sums[i] % k)) {
            return true
        }
    }
    return false
}

export default checkSubarraySum
