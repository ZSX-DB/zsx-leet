import compress from '../443';

test("443", () => {
    const chars1 = ["a", "a", "b", "b", "c", "c", "c"]
    expect(compress(chars1)).toBe(6)
    expect(chars1).toEqual(["a", "2", "b", "2", "c", "3"])

    const chars2 = ["a"]
    expect(compress(chars2)).toBe(1)
    expect(chars2).toEqual(["a"])

    const chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
    expect(compress(chars3)).toBe(4)
    expect(chars3).toEqual(["a", "b", "1", "2"])

    const chars4 = ["a", "a", "a", "b", "b", "a", "a"]
    expect(compress(chars4)).toBe(6)
    expect(chars4).toEqual(["a", "3", "b", "2", "a", "2"])
})
