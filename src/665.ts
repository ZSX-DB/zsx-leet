// const checkPossibility = (nums: number[]): boolean => {
//     const items: number[][] = []
//     for (let i = 0; i < nums.length; i++) {
//         const item: number[] = [nums[i]]
//         while ((nums[i + 1] ?? -Infinity) >= nums[i]) {
//             item.push(nums[i + 1])
//             i++
//         }
//         items.push(item)
//     }
//     if (items.length === 1) {
//         return true
//     } else if (items.length === 2) {
//         return items.some(item => item.length === 1) || items[0][items[0].length - 2] <= items[1][0] || items[0][items[0].length - 1] <= items[1][1]
//     } else {
//         return false
//     }
// }


const checkPossibility = (nums: number[]): boolean => {
    nums = [-Infinity].concat(nums)
    let count = 0
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) {
            continue
        }
        if (count === 1) {
            return false
        }
        count++
        if (nums[i + 1] < (nums[i - 1])) {
            nums[i + 1] = nums[i]
        }
    }
    return true
}

export default checkPossibility
