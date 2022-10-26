import partition from '../131';

test("131", () => {
    expect(partition('aab')).toEqual([["a", "a", "b"], ["aa", "b"]])
    expect(partition('a')).toEqual([['a']])
})
