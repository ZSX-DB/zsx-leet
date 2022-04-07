const combinationSum2 = (candidates: number[], target: number): number[][] => {
    candidates.sort((x, y) => x - y)
    const result: number[][] = []
    const helper = (nums: number[], baseSum: number, idx: number): void => {
        for (let i = idx; i < candidates.length; i++) {
            const candidate = candidates[i]
            if (candidate > target) {
                break
            }
            if (i > idx && candidate === candidates[i - 1]) {
                continue
            }
            const sum = baseSum + candidate
            if (target < sum) {
                break
            } else if (target === sum) {
                result.push([...nums, candidate])
            } else {
                helper([...nums, candidate], sum, i + 1)
            }
        }
    }
    helper([], 0, 0)
    return result
}

export default combinationSum2