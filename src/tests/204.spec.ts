import countPrimes from "../204";

test("204", () => {
    expect(countPrimes(10)).toBe(4)
    expect(countPrimes(0)).toBe(0)
    expect(countPrimes(1)).toBe(0)
})
