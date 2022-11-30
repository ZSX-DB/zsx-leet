import findTheDifference from '../389';

test("389", () => {
    expect(findTheDifference('abcd', 'abcde')).toBe('e')
    expect(findTheDifference('', 'y')).toBe('y')
})
