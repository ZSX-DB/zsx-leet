// const maximumProduct = (nums: number[]): number => {
//     const n = nums.length
//     nums.sort((x, y) => x - y)
//     return Math.max(nums[n - 3] * nums[n - 2] * nums[n - 1], nums[0] * nums[1] * nums[n - 1])
// }

const maximumProduct = (nums: number[]): number => {
    const n = nums.length
    nums.sort((x, y) => x - y)
    if (n === 3 || nums[0] >= 0 || nums[n - 1] <= 0) {
        return nums[n - 1] * nums[n - 2] * nums[n - 3]
    }
    return nums[n - 1] * Math.max(nums[n - 2] * nums[n - 3], nums[0] * nums[1])
}

export default maximumProduct
