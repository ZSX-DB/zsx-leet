import nextGreaterElement from '../496';

test("496", () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1])
    expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1])
    expect(nextGreaterElement([4, 1, 2, 3], [1, 3, 4, 2, 5])).toEqual([5, 3, 5, 4])
    expect(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7])).toEqual([7, 7, 7, 7, 7])
})
