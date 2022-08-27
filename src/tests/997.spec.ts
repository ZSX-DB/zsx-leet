import findJudge from '../997';

test("997", () => {
    expect(findJudge(2, [[1, 2]])).toBe(2)
    expect(findJudge(3, [[1, 3], [2, 3]])).toBe(3)
    expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).toBe(-1)
})
