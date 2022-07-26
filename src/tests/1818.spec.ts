import minAbsoluteSumDiff from '../1818';

test("1818", () => {
    expect(minAbsoluteSumDiff([3, 5], [5, 5])).toBe(0)
    expect(minAbsoluteSumDiff([1, 7, 5], [2, 3, 5])).toBe(3)
    expect(minAbsoluteSumDiff([2, 4, 6, 8, 10], [2, 4, 6, 8, 10])).toBe(0)
    expect(minAbsoluteSumDiff([1, 10, 4, 4, 2, 7], [9, 3, 5, 1, 7, 4])).toBe(20)
})
