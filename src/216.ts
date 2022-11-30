const combinationSum3 = (k: number, n: number): number[][] => {
    const ret: number[][] = []
    const backtrack = (nums: number[], sum: number): void => {
        if (nums.length > k || sum > n) {
            return
        }
        if (nums.length === k && sum === n) {
            ret.push(nums)
        }
        if (sum === 0) {
            for (let i = 1; i <= 9; i++) {
                backtrack([i], i)
            }
        } else {
            const start = nums[nums.length - 1] + 1
            for (let i = start; i <= 9; i++) {
                backtrack(nums.concat(i), sum + i)
            }
        }
    }
    backtrack([], 0)
    return ret
}

export default combinationSum3
