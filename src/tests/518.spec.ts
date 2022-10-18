import change from '../518';

test("518", () => {
    expect(change(5, [1, 2, 5])).toBe(4)
    expect(change(3, [2])).toBe(0)
    expect(change(10, [10])).toBe(1)
})
