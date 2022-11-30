import canConstruct from '../383';

test("383", () => {
    expect(canConstruct('a', 'b')).toBe(false)
    expect(canConstruct('aa', 'ab')).toBe(false)
    expect(canConstruct('aa', 'aab')).toBe(true)
    expect(canConstruct('aab', 'baa')).toBe(true)
})
