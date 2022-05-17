const removeDuplicates = (nums: number[]): number => {
    const length: number = nums.length
    let fast: number = 2
    let slow: number = 2
    while (fast < length) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
}

export default removeDuplicates
