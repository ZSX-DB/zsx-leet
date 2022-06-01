import isCovered from "../1893";

test("1893", () => {
    expect(isCovered([[1, 2], [3, 4], [5, 6]], 2, 5)).toBeTruthy()
    expect(isCovered([[1, 10], [10, 20]], 21, 21)).toBeFalsy()
})
