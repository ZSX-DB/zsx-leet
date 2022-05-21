const minMoves2 = (nums: number[]): number => {
    nums.sort((x, y) => x - y)
    const median = nums[Math.floor(nums.length / 2)]
    let result: number = 0
    for (const num of nums) {
        result += Math.abs(num - median)
    }
    return result
}

export default minMoves2