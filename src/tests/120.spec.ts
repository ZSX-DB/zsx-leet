import minimumTotal from "../120";

test("120", () => {
    expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11)
    expect(minimumTotal([[-10]])).toBe(-10)
})
