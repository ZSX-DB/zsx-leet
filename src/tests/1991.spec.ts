import findMiddleIndex from '../1991';

test("1991", () => {
    expect(findMiddleIndex([2, 3, -1, 8, 4])).toBe(3)
    expect(findMiddleIndex([1, -1, 4])).toBe(2)
    expect(findMiddleIndex([2, 5])).toBe(-1)
    expect(findMiddleIndex([1])).toBe(0)
})
