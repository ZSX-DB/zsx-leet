import equalSubstring from '../1208';

test("1208", () => {
    expect(equalSubstring("abcd", "bcdf", 3)).toBe(3)
    expect(equalSubstring("abcd", "cdef", 3)).toBe(1)
    expect(equalSubstring("abcd", "acde", 0)).toBe(1)
    expect(equalSubstring("krrgw", "zjxss", 19)).toBe(2)
    expect(equalSubstring("krpgjbjjznpzdfy", "nxargkbydxmsgby", 14)).toBe(4)
})
