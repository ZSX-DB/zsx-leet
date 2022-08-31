import intersect from '../350';

test("350", () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
    expect([[4, 9], [9, 4]]).toContainEqual(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
})
