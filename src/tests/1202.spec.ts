import smallestStringWithSwaps from '../1202';

test("1202", () => {
    expect(smallestStringWithSwaps('dcab', [[0, 3], [1, 2]])).toBe('bacd')
    expect(smallestStringWithSwaps('dcab', [[0, 3], [1, 2], [0, 2]])).toBe('abcd')
    expect(smallestStringWithSwaps('cba', [[0, 1], [1, 2]])).toBe('abc')
})
