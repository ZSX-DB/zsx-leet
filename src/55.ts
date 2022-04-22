const canJump = (nums: number[]): boolean => {
    const len: number = nums.length
    let copy: number = len
    for (let i = len - 2; i >= 0; i--) {
        if (nums[i] >= (copy - i - 1)) {
            copy = i + 1
        }
    }
    return copy === 1
}

export default canJump
