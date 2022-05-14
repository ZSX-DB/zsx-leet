// const subsets = (nums: number[]): number[][] => {
//     const result: number[][] = []
//     const length: number = nums.length
//     const used: boolean[] = Array(length).fill(false)
//     const subset = (ns: number[], idx: number, k: number): void => {
//         if (ns.length === k) {
//             result.push([...ns])
//             return
//         }
//         for (let i = idx; i < length; i++) {
//             if (!used[i]) {
//                 ns.push(nums[i])
//                 used[i] = true
//                 subset(ns, i, k)
//                 ns.pop()
//                 used[i] = false
//             }
//         }
//     }
//     for (let i = 0; i <= nums.length; i++) {
//         subset([], 0, i)
//     }
//     return result
// }

const subsets = (nums: number[]): number[][] => {
    const result: number[][] = []
    const length: number = nums.length
    const helper = (ns: number[], k: number): void => {
        if (k === length) {
            result.push(ns)
            return
        }
        helper(ns, k + 1)
        helper(ns.concat(nums[k]), k + 1)
    }
    helper([], 0)
    return result
}

export default subsets
