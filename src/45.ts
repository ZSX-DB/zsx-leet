const jump = (nums: number[]): number => {
    let step: number = 0
    let position: number = nums.length - 1
    while (position > 0) {
        for (let i = 0; i < position; i++) {
            if (i + nums[i] >= position) {
                position = i
                step++
                break
            }
        }
    }
    return step
}

export default jump
