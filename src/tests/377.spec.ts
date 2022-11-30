import combinationSum4 from '../377';

test("377", () => {
    expect(combinationSum4([1, 2, 3], 4)).toBe(7)
    expect(combinationSum4([9], 3)).toBe(0)
    expect(combinationSum4([4, 2, 1], 32)).toBe(39882198)
})
