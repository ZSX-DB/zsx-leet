const getMaximumGenerated = (n: number): number => {
    let base = 1
    const nums: number[] = [0, 1]
    for (let i = 2; i <= n; i++) {
        if (i === base * 2) {
            nums[i] = nums[base]
        } else if (i === base * 2 + 1) {
            nums[i] = nums[base] + nums[base + 1]
            base++
        }
    }
    return n !== 0 ? Math.max(...nums) : 0
}

// const getMaximumGenerated = (n: number): number => [0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 11, 11, 11, 11, 11, 11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21][n]

// const getMaximumGenerated = (n: number): number => {
//     let i = 1
//     const nums = [0, 1]
//     while (2 * i <= n) {
//         nums[2 * i] = nums[i]
//         nums[2 * i + 1] = nums[i] + nums[i + 1]
//         i++
//     }
//     return Math.max(...nums.slice(0, n + 1))
// }

export default getMaximumGenerated
