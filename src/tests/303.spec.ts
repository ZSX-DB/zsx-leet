import NumArray from "../303";

test("303", () => {
    const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
    expect(numArray.sumRange(0, 2)).toBe(1)
    expect(numArray.sumRange(2, 5)).toBe(-1)
    expect(numArray.sumRange(0, 5)).toBe(-3)
})
