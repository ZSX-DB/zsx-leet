import jump from "../45";

test("45", () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2)
    expect(jump([2, 3, 0, 1, 4])).toBe(2)
})
