import isToeplitzMatrix from '../766';

test("766", () => {
    expect(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])).toBe(true)
    expect(isToeplitzMatrix([[1, 2], [2, 2]])).toBe(false)
})
