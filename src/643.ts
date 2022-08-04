// const findMaxAverage = (nums: number[], k: number): number => {
//     let sum = 0
//     for (let i = 0; i < k; i++) {
//         sum += nums[i]
//     }
//     let maxAverage = sum
//     for (let i = k; i < nums.length; i++) {
//         sum = sum - nums[i - k] + nums[i]
//         maxAverage = Math.max(maxAverage, sum)
//     }
//     return maxAverage / k
// }

const findMaxAverage = (nums: number[], k: number): number => {
    const n = nums.length
    const diff = [0]
    let maxAverage = -Infinity
    for (let i = 1; i <= n; i++) {
        diff[i] = diff[i - 1] + nums[i - 1]
    }
    for (let i = k; i <= n; i++) {
        maxAverage = Math.max(maxAverage, diff[i] - diff[i - k])
    }
    return maxAverage / k
}

export default findMaxAverage
