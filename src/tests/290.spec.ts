import wordPattern from '../290';

test("290", () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true)
    expect(wordPattern('abba', 'dog cat cat fish')).toBe(false)
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBe(false)
})
