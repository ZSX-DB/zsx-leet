import convertToTitle from '../168';

test("168", () => {
    expect(convertToTitle(1)).toBe('A')
    expect(convertToTitle(52)).toBe('AZ')
    expect(convertToTitle(2147483647)).toBe('FXSHRXW')
})
