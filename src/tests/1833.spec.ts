import maxIceCream from "../1833";

test("1833", () => {
    expect(maxIceCream([1, 3, 2, 4, 1], 7)).toBe(4)
    expect(maxIceCream([10, 6, 8, 7, 7, 8], 5)).toBe(0)
    expect(maxIceCream([1, 6, 3, 1, 2, 5], 20)).toBe(6)
})