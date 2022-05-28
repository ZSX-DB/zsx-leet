const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
    if (n !== 0) {
        for (let i = m; i < m + n; i++) {
            nums1[i] = nums2[i - m]
        }
        nums1.sort((x, y) => x - y)
    }
}

// const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
//     const sorted: number[] = []
//     let p1 = 0
//     let p2 = 0
//     while (sorted.length !== m + n) {
//         if ((nums1[p1] !== undefined && nums2[p2] === undefined) || (nums1[p1] <= nums2[p2] && p1 < m)) {
//             sorted.push(nums1[p1])
//             p1++
//         } else {
//             sorted.push(nums2[p2])
//             p2++
//         }
//     }
//     for (let i = 0; i < m + n; i++) {
//         nums1[i] = sorted[i]
//     }
// }

export default merge
