import addStrings from '../415';

test("415", () => {
    expect(addStrings('11', '123')).toBe('134')
    expect(addStrings('123456789', '987654321')).toBe('1111111110')
    expect(addStrings('0', '0')).toBe('0')
})
