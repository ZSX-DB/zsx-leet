const combinationSum = (candidates: number[], target: number): number[][] => {
    candidates.sort((x, y) => x - y)
    const result: number[][] = []
    const helper = (nums: number[], baseSum: number): void => {
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i] < (nums[nums.length - 1] ?? 0)) {
                continue
            }
            const sum = baseSum + candidates[i]
            if (sum < target) {
                helper([...nums, candidates[i]], sum)
            } else if (sum === target) {
                result.push([...nums, candidates[i]])
            }
        }
    }
    helper([], 0)
    return result
}

export default combinationSum