// const combine = (n: number, k: number): number[][] => {
//     const list: number[] = Array(n).fill(0).map((_, index) => index + 1)
//     const used: boolean[] = Array(n).fill(false)
//     const result: number[][] = []
//     const helper = (nums: number[], idx: number): void => {
//         if (nums.length === k) {
//             result.push([...nums])
//             return
//         }
//         for (let i = idx; i < list.length; i++) {
//             if (!used[i]) {
//                 nums.push(list[i])
//                 used[i] = true
//                 helper(nums, i)
//                 nums.pop()
//                 used[i] = false
//             }
//         }
//     }
//     helper([], 0)
//     return result
// }

const combine = (n: number, k: number): number[][] => {
    const result: number[][] = []
    const helper = (list: number[], curr: number): void => {
        if (list.length + (n - curr + 1) < k) {
            return
        } else if (list.length < k) {
            helper(list, curr + 1)
            helper(list.concat(curr), curr + 1)
        } else {
            result.push(list)
        }
    }
    helper([], 1)
    return result
}

export default combine
