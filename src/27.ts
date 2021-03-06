// const removeElement = (nums: number[], val: number): number => {
//     let left: number = 0
//     let right: number = 0
//     while (right < nums.length) {
//         if (nums[right] !== val) {
//             nums[left] = nums[right]
//             left++
//         }
//         right++
//     }
//     return left
// }

const removeElement = (nums: number[], val: number): number => {
    const len: number = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] === val) {
            for (let j = i; j < len; j++) {
                if (nums[j] !== val) {
                    [nums[i], nums[j]] = [nums[j], nums[i]]
                    break
                }
            }
        }
    }
    return nums.includes(val) ? nums.indexOf(val) : len
}


export default removeElement
