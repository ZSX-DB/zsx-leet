import maximum69Number from "../1323";

test("1323", () => {
    expect(maximum69Number(9669)).toBe(9969)
    expect(maximum69Number(9996)).toBe(9999)
    expect(maximum69Number(9999)).toBe(9999)
})
