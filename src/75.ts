type Color = 0 | 1 | 2

// const sortColors = (nums: Color[]): void => {
//     let zeroCount: number = nums.filter(num => num === 0).length
//     let oneCount: number = nums.filter(num => num === 1).length
//     for (let i = 0; i < nums.length; i++) {
//         if (zeroCount > 0) {
//             nums[i] = 0
//             zeroCount--
//         } else if (oneCount > 0) {
//             nums[i] = 1
//             oneCount--
//         } else {
//             nums[i] = 2
//         }
//     }
// }

const sortColors = (nums: Color[]): void => {
    let zeroFlag: number = 0
    let twoFlag: number = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[zeroFlag]] = [nums[zeroFlag], nums[i]]
            zeroFlag++
        }
    }
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 2) {
            [nums[i], nums[twoFlag]] = [nums[twoFlag], nums[i]]
            twoFlag--
        }
    }
}

export default sortColors

export type {
    Color
}
