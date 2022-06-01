const maxFrequency = (nums: number[], k: number): number => {
    nums.sort((x, y) => x - y)
    let max = 1
    let left = 0
    let sum = 0
    for (let right = 1; right < nums.length; right++) {
        sum += (nums[right] - nums[right - 1]) * (right - left)
        if (sum > k) {
            sum -= (nums[right] - nums[left])
            left++
        }
        max = Math.max(max, right - left + 1)
    }
    return max
}

export default maxFrequency
