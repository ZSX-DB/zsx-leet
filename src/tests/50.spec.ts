import myPow from "../50";

test("50", () => {
    expect(myPow(2.00000, 10)).toBe(1024.00000)
    expect(myPow(2.00000, -2)).toBe(0.25)
})
