import uniquePathsWithObstacles from "../63";

test("63", () => {
    expect(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2)
    expect(uniquePathsWithObstacles([[0, 1], [0, 0]])).toBe(1)
    expect(uniquePathsWithObstacles([[1, 0]])).toBe(0)
    expect(uniquePathsWithObstacles([[0, 0]])).toBe(1)
})
