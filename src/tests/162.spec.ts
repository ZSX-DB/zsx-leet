import findPeakElement from "../162";

test("162", () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2)
    expect([1, 5]).toContain(findPeakElement([1, 2, 1, 3, 5, 6, 4]))
})
