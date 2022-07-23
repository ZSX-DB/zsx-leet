// const singleNonDuplicate = (nums: number[]): number => {
//     let left: number = 0
//     let right: number = nums.length - 1
//     while (left < right) {
//         const mid = Math.floor((left + right) / 2)
//         if (nums[mid] === nums[mid ^ 1]) {
//             left = mid + 1
//         } else {
//             right = mid
//         }
//     }
//     return nums[left]
// }

const singleNonDuplicate = (nums: number[]): number => nums.reduce<number>((prev, curr) => prev ^ curr, 0)

export default singleNonDuplicate
