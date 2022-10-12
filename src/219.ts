// const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
//     const memo = new Map<number, number>()
//     for (let i = 0; i < nums.length; i++) {
//         if (memo.has(nums[i]) && i - (memo.get(nums[i]) as number) <= k) {
//             return true
//         }
//         memo.set(nums[i], i)
//     }
//     return false
// }

const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    const sw = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            sw.delete(nums[i - k - 1])
        }
        if (sw.has(nums[i])) {
            return true
        }
        sw.add(nums[i])
    }
    return false
}

export default containsNearbyDuplicate
