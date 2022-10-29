const find132pattern = (nums: number[]): boolean => {
    const n = nums.length
    const stack = [nums[n - 1]]
    let maxK = -Infinity
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < maxK) {
            return true
        }
        while (stack.length && nums[i] > stack[stack.length - 1]) {
            maxK = stack.pop() as number
        }
        if (nums[i] > maxK) {
            stack.push(nums[i])
        }
    }
    return false
}

export default find132pattern
