// const productExceptSelf = (nums: number[]): number[] => {
//     const length = nums.length
//     const ret = Array(length).fill(0)
//     if (nums.includes(0)) {
//         const firstIndex = nums.indexOf(0)
//         const lastIndex = nums.lastIndexOf(0)
//         if (firstIndex === lastIndex) {
//             ret[firstIndex] = nums.filter(num => num !== 0).reduce((product, num) => product * num, 1)
//         }
//     } else {
//         const leftProducts: number[] = [nums[0]]
//         const rightProducts: number[] = [nums[length - 1]]
//         for (let i = 1; i < length; i++) {
//             leftProducts.push(nums[i] * leftProducts[i - 1])
//         }
//         for (let i = length - 2; i >= 0; i--) {
//             rightProducts.unshift(nums[i] * rightProducts[0])
//         }
//         ret[0] = rightProducts[1]
//         ret[length - 1] = leftProducts[length - 2]
//         for (let i = 1; i < length - 1; i++) {
//             ret[i] = leftProducts[i - 1] * rightProducts[i + 1]
//         }
//     }
//     return ret
// }

const productExceptSelf = (nums: number[]): number[] => {
    let zeroCount = 0
    let product = 1
    for (const num of nums) {
        if (num === 0) {
            zeroCount++
        } else {
            product *= num
        }
    }
    if (zeroCount === 0) {
        return nums.map(num => product / num)
    } else if (zeroCount === 1) {
        return nums.map(num => num === 0 ? product : 0)
    } else {
        return Array(nums.length).fill(0)
    }
}

export default productExceptSelf
