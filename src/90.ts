// const subsetsWithDup = (nums: number[]): number[][] => {
//     nums.sort((x, y) => x - y)
//     const result: number[][] = [[]]
//     const collect: Set<string> = new Set<string>()
//     const numsLen: number = nums.length
//     const helper = (targetLen: number, start: number, list: number[]): void => {
//         const listLen = list.length
//         if (listLen + numsLen - start < targetLen) {
//             return
//         } else if (listLen === targetLen) {
//             const str = list.toString()
//             if (!collect.has(str)) {
//                 result.push(list)
//                 collect.add(str)
//             }
//             return
//         }
//         helper(targetLen, start + 1, list)
//         helper(targetLen, start + 1, list.concat(nums[start]))
//
//     }
//     for (let i = 1; i < numsLen; i++) {
//         helper(i, 0, [])
//     }
//     return result.concat([nums])
// }

const subsetsWithDup = (nums: number[]): number[][] => {
    nums.sort((x, y) => x - y)
    const path: number[] = []
    const result: number[][] = []
    const helper = (start: number): void => {
        result.push([...path])
        if (start > nums.length - 1) {
            return
        }
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            helper(i + 1)
            path.pop()
        }
    }
    helper(0)
    return result
}

export default subsetsWithDup
