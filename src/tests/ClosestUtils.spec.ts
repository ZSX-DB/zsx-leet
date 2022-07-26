import ClosestUtils from "../data_structure/ClosestUtils";

const closestUtils = new ClosestUtils([1, 10, 4, 4, 2, 7])

test("getClosestNum", () => {
    expect(closestUtils.getClosestNum(9)).toBe(10)
    expect(closestUtils.getClosestNum(4)).toBe(4)
    expect(closestUtils.getClosestNum(6)).toBe(7)
})

test("getClosestNums", () => {
    expect(closestUtils.getClosestNums([999, 998, 997])).toEqual([10, 10, 10])
    expect([[10, 4, 4, 1, 7, 4], [10, 2, 4, 1, 7, 4]]).toContainEqual(closestUtils.getClosestNums([9, 3, 5, 1, 7, 4]))
})
