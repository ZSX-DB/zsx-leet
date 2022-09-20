import eventualSafeNodes from '../802';

test("802", () => {
    expect(eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []])).toEqual([2, 4, 5, 6])
    expect(eventualSafeNodes([[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []])).toEqual([4])
})
