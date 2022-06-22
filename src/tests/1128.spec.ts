import numEquivDominoPairs from "../1128";

test("1128", () => {
    expect(numEquivDominoPairs([[1, 2], [2, 1], [3, 4], [5, 6]])).toBe(1)
    expect(numEquivDominoPairs([[1, 2], [2, 1], [2, 1], [5, 6]])).toBe(3)
})
