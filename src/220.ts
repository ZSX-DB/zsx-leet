// const containsNearbyAlmostDuplicate = (nums: number[], indexDiff: number, valueDiff: number): boolean => {
//     const length = nums.length
//     for (let i = 0; i < length; i++) {
//         const target = i + indexDiff >= length - 1 ? length - 1 : i + indexDiff
//         for (let j = i + 1; j <= target; j++) {
//             if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
//                 return true
//             }
//         }
//     }
//     return false
// }

const containsNearbyAlmostDuplicate = (nums: number[], indexDiff: number, valueDiff: number): boolean => {
    const size = valueDiff + 1
    const { floor, abs } = Math
    const getId = (num: number): number => num >= 0 ? floor(num / size) : floor((num + 1) / size) - 1
    const bucket = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const id = getId(num)
        if (
            bucket.has(id) ||
            (bucket.has(id - 1) && abs(num - (bucket.get(id - 1) as number)) <= valueDiff) ||
            (bucket.has(id + 1) && abs(num - (bucket.get(id + 1) as number)) <= valueDiff)) {
            return true
        }
        bucket.set(id, num)
        if (i >= indexDiff) {
            bucket.delete(getId(nums[i - indexDiff]))
        }
    }
    return false
}

export default containsNearbyAlmostDuplicate
