// const intersection = (nums1: number[], nums2: number[]): number[] => {
//     const set1 = new Set<number>(nums1)
//     const set2 = new Set<number>(nums2)
//     const nums: number[] = []
//     set1.forEach(num => {
//         if (set2.has(num)) {
//             nums.push(num)
//         }
//     })
//     return nums
// }

const intersection = (nums1: number[], nums2: number[]): number[] => {
    const compareFn = (x: number, y: number): number => x - y
    const nums: number[] = []
    let i1 = 0
    let i2 = 0
    nums1.sort(compareFn)
    nums2.sort(compareFn)
    while (i1 < nums1.length && i2 < nums2.length) {
        if (nums1[i1] > nums2[i2]) {
            i2++
        } else if (nums1[i1] < nums2[i2]) {
            i1++
        } else {
            if (nums.includes(nums1[i1]) === false) {
                nums.push(nums1[i1])
            }
            i1++
            i2++
        }
    }
    return nums
}

export default intersection
