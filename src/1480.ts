// const runningSum = (nums: number[]): number[] => nums.reduce<number[]>((prev, curr) => [...prev, curr + (prev[prev.length - 1] ?? 0)], [])

const runningSum = (nums: number[]): number[] => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
}

export default runningSum
