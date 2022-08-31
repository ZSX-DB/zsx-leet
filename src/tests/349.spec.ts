import intersection from '../349';

test("349", () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2])
    expect([[9, 4], [4, 9]]).toContainEqual(intersection([4, 9, 5], [9, 4, 9, 8, 4]))
})
