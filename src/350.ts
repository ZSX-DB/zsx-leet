// const intersect = (nums1: number[], nums2: number[]): number[] => {
//     const compareFn = (x: number, y: number): number => x - y
//     const nums: number[] = []
//     let i1 = 0
//     let i2 = 0
//     nums1.sort(compareFn)
//     nums2.sort(compareFn)
//     while (i1 < nums1.length && i2 < nums2.length) {
//         if (nums1[i1] > nums2[i2]) {
//             i2++
//         } else if (nums1[i1] < nums2[i2]) {
//             i1++
//         } else {
//             nums.push(nums1[i1])
//             i1++
//             i2++
//         }
//     }
//     return nums
// }

const intersect = (nums1: number[], nums2: number[]): number[] => {
    const nums: number[] = []
    nums2.forEach(n2 => {
        const idx = nums1.findIndex(n1 => n1 === n2)
        if (idx !== -1) {
            nums.push(n2)
            nums1[idx] = -1
        }
    })
    return nums
}

export default intersect
