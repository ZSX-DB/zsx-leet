// const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
//     const ret: number[] = []
//     const memo = new Map<number, number>(nums2.map((num, index) => [num, index]))
//     const n = nums2.length
//     for (const num of nums1) {
//         let notExist = true
//         for (let i = memo.get(num) + 1; i < n; i++) {
//             if (nums2[i] > num) {
//                 notExist = false
//                 ret.push(nums2[i])
//                 break
//             }
//         }
//         if (notExist) {
//             ret.push(-1)
//         }
//     }
//     return ret
// }


// 单调递减栈
const nextGreaterElement = (nums1: number[], nums2: number[]): number[] => {
    const memo = new Map<number, number>()
    const stack: number[] = []
    for (const num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            memo.set(stack.pop(), num)
        }
        stack.push(num)
    }
    return nums1.map(num => memo.get(num) ?? -1)
}

export default nextGreaterElement
