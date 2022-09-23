import nextGreaterElements from '../503';

test("503", () => {
    expect(nextGreaterElements([1, 2, 1])).toEqual([2, -1, 2])
    expect(nextGreaterElements([1, 2, 3, 4, 3])).toEqual([2, 3, 4, -1, 4])
    expect(nextGreaterElements([5, 4, 3, 2, 1])).toEqual([-1, 5, 5, 5, 5])
})
