import largeGroupPositions from '../830';

test("830", () => {
    expect(largeGroupPositions('abbxxxxzzy')).toEqual([[3, 6]])
    expect(largeGroupPositions('abc')).toEqual([])
    expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual([[3, 5], [6, 9], [12, 14]])
    expect(largeGroupPositions('aba')).toEqual([])
})
