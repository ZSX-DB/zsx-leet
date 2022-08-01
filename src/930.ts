// const numSubarraysWithSum = (nums: (0 | 1)[], goal: number): number => {
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j]
//             if (sum === goal) {
//                 count++
//             } else if (sum > goal) {
//                 break
//             }
//         }
//     }
//     return count
// }

const numSubarraysWithSum = (nums: (0 | 1)[], goal: number): number => {
    const record = new Map<number, number>([[0, 1]])
    let sum = 0
    let result = 0
    for (const num of nums) {
        sum += num
        result += (record.get(sum - goal) ?? 0)
        record.set(sum, (record.get(sum) ?? 0) + 1)
    }
    return result
}

export default numSubarraysWithSum
