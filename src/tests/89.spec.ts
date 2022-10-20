import grayCode from '../89';

test("89", () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2])
    expect(grayCode(1)).toEqual([0, 1])
})
