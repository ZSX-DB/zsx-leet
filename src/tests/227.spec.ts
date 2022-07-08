import calculate from "../227";

test("227", () => {
    expect(calculate("3+2*2")).toBe(7)
    expect(calculate(" 3/2")).toBe(1)
    expect(calculate(" 3+5 / 2")).toBe(5)
})
