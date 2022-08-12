import countPairs from '../1711';

test("1711", () => {
    expect(countPairs([1, 3, 5, 7, 9])).toBe(4)
    expect(countPairs([1, 1, 1, 3, 3, 3, 7])).toBe(15)
    expect(countPairs([1, 1, 1, 3, 3, 3, 3, 7])).toBe(18)
})
