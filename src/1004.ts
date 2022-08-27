const longestOnes = (nums: (0 | 1)[], k: number): number => {
    const zeroIndexes: number[] = []
    let swl = 0
    let longest = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            swl++
        } else {
            if (zeroIndexes.length < k) {
                zeroIndexes.push(i)
                swl++
            } else {
                swl = 0
                const first = zeroIndexes.shift()
                if (first !== undefined) {
                    swl = i - first
                    zeroIndexes.push(i)
                }
            }
        }
        longest = Math.max(longest, swl)
    }
    return longest
}

// const longestOnes = (nums: (0 | 1)[], k: number): number => {
//     let left = 0
//     let right = 0
//     let longest = 0
//     let zeroCount = 0
//     while (right < nums.length) {
//         if (nums[right] === 0) {
//             zeroCount++
//         }
//         while (zeroCount > k) {
//             if (nums[left] === 0) {
//                 zeroCount--
//             }
//             left++
//         }
//         longest = Math.max(longest, right - left + 1)
//         right++
//     }
//     return longest
// }

export default longestOnes
