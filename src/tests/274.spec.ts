import hIndex from '../274';

test("274", () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3)
    expect(hIndex([1, 3, 1])).toBe(1)
})
