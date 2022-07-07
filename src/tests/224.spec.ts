import calculate from "../224";

test("224", () => {
    expect(calculate("1 + 1")).toBe(2)
    expect(calculate(" 2-1 + 2")).toBe(3)
    expect(calculate("(1+(4+5+2)-3)+(6+8)")).toBe(23)
})
