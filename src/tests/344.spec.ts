import reverseString from '../344';

test("344", () => {
    const s1 = ["h", "e", "l", "l", "o"]
    reverseString(s1)
    expect(s1).toEqual(["o", "l", "l", "e", "h"])

    const s2 = ["H", "a", "n", "n", "a", "h"]
    reverseString(s2)
    expect(s2).toEqual(["h", "a", "n", "n", "a", "H"])
})
