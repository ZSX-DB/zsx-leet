import findUnsortedSubarray from '../581';

test("581", () => {
    expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5)
    expect(findUnsortedSubarray([1, 2, 3, 4])).toBe(0)
    expect(findUnsortedSubarray([1])).toBe(0)
})
