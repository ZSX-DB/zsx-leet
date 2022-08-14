import getMaximumGenerated from '../1646';

test("1646", () => {
    expect(getMaximumGenerated(7)).toBe(3)
    expect(getMaximumGenerated(2)).toBe(1)
    expect(getMaximumGenerated(3)).toBe(2)
    expect(getMaximumGenerated(4)).toBe(2)
    expect(getMaximumGenerated(0)).toBe(0)
    expect(getMaximumGenerated(15)).toBe(5)
})
