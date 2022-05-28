import merge from "../88";

test("88", () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [1]
    const nums3 = [0]
    merge(nums1, 3, [2, 5, 6], 3)
    merge(nums2, 1, [], 0)
    merge(nums3, 0, [1], 1)
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
    expect(nums2).toEqual([1])
    expect(nums3).toEqual([1])
})
