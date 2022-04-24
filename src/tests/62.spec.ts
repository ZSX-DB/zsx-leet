import uniquePaths from "../62";

test("62", () => {
    expect(uniquePaths(3, 7)).toBe(28)
    expect(uniquePaths(3, 2)).toBe(3)
    expect(uniquePaths(7, 3)).toBe(28)
    expect(uniquePaths(3, 3)).toBe(6)
    expect(uniquePaths(51, 9)).toBe(1916797311)
})
