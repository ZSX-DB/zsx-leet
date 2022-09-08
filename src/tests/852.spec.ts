import peakIndexInMountainArray from '../852';

test("852", () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1)
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1)
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1)
    expect(peakIndexInMountainArray([3, 4, 5, 1])).toBe(2)
    expect(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])).toBe(2)
})
