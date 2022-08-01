import minAddToMakeValid from '../921';

test("921", () => {
    expect(minAddToMakeValid("())")).toBe(1)
    expect(minAddToMakeValid("(((")).toBe(3)
})
