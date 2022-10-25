import getRow from '../119';

test("119", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1])
    expect(getRow(0)).toEqual([1])
    expect(getRow(1)).toEqual([1, 1])
})
