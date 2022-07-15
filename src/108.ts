const sortedArrayToBST = (nums: number[]): TreeNode | null => {
    const helper = (nums: number[]): TreeNode | null => {
        if (nums.length === 0) {
            return null
        }
        const mid = Math.floor(nums.length / 2)
        return {
            val: nums[mid],
            left: helper(nums.slice(0, mid)),
            right: helper(nums.slice(mid + 1))
        }
    }
    return helper(nums)
}

export default sortedArrayToBST
