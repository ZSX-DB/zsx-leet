import isIsomorphic from "../205";

test("205", () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy()
    expect(isIsomorphic('foo', 'bar')).toBeFalsy()
    expect(isIsomorphic('paper', 'title')).toBeTruthy()
})
