const minSubArrayLen = (target: number, nums: number[]): number => {
    let sum: number = 0
    let min: number = Infinity
    let left: number = 0
    let right: number = 0
    while (right < nums.length) {
        if (sum < target) {
            sum += nums[right]
            while (sum >= target) {
                min = Math.min(min, right - left + 1)
                sum -= nums[left]
                left++
            }
        }
        right++
    }
    return min === Infinity ? 0 : min
}

export default minSubArrayLen
