import rob from "../213";

test("213", () => {
    expect(rob([2, 3, 2])).toBe(3)
    expect(rob([1, 2, 3, 1])).toBe(4)
    expect(rob([1, 2, 3])).toBe(3)
})
