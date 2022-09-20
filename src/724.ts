const pivotIndex = (nums: number[]): number => {
    const sum = nums.reduce((total, num) => total + num, 0)
    let leftSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (leftSum * 2 + nums[i] === sum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
}

export default pivotIndex
