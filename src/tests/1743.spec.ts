import restoreArray from '../1743';

test("1743", () => {
    expect(restoreArray([[2, 1], [3, 4], [3, 2]])).toEqual([1, 2, 3, 4])
    expect([[-3, 1, 4, -2], [-2, 4, 1, -3]]).toContainEqual(restoreArray([[4, -2], [1, 4], [-3, 1]]))
    expect([[100000, -100000], [-100000, 100000]]).toContainEqual(restoreArray([[100000, -100000]]))
})
