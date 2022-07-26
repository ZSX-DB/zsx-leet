import ClosestUtils from "./data_structure/ClosestUtils";

const minAbsoluteSumDiff = (nums1: number[], nums2: number[]): number => {
    const closestUtils = new ClosestUtils(nums1)
    const closestNums = closestUtils.getClosestNums(nums2)
    const length: number = nums1.length
    let sum = 0
    let save = 0
    for (let i = 0; i < length; i++) {
        const diff = Math.abs(nums1[i] - nums2[i])
        sum += diff
        if (diff !== 0) {
            save = Math.max(save, diff - Math.abs(closestNums[i] - nums2[i]))
        }
    }
    return (sum - save) % 1000000007
}

export default minAbsoluteSumDiff
