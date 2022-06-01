const minPairSum = (nums: number[]): number => {
    nums.sort((x, y) => x - y)
    let left = 0
    let right = nums.length - 1
    let max = -Infinity
    while (left < right) {
        max = Math.max(max, nums[left] + nums[right])
        left++
        right--
    }
    return max
}

export default minPairSum
