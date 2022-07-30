import maximumProduct from '../628';

test("628", () => {
    expect(maximumProduct([1, 2, 3])).toBe(6)
    expect(maximumProduct([1, 2, 3, 4])).toBe(24)
    expect(maximumProduct([-1, -2, -3])).toBe(-6)
})
