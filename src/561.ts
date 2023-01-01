const arrayPairSum = (nums: number[]): number => {
    let ret = 0
    nums.sort((x, y) => x - y)
    for (let i = 0; i < nums.length; i += 2) {
        ret += Math.min(nums[i], nums[i + 1])
    }
    return ret
}

export default arrayPairSum
