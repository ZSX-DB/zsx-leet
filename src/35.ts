// const searchInsert = (nums: number[], target: number): number => {
//     const matchIdx = (): readonly [number, number, number] => {
//         let left: number = 0
//         let right: number = nums.length - 1
//         while (left <= right) {
//             const mid: number = Math.floor((left + right) / 2)
//             if (nums[mid] > target) {
//                 right = mid - 1
//             } else if (nums[mid] < target) {
//                 left = mid + 1
//             } else {
//                 return [mid, left, right]
//             }
//         }
//         return [-1, left, right]
//     }
//     const [mid, left, right] = matchIdx()
//     if (mid !== -1) {
//         return mid
//     } else {
//         return left
//     }
// }


const searchInsert = (nums: number[], target: number): number => {
    let left: number = 0
    let right: number = nums.length - 1
    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return left
}
