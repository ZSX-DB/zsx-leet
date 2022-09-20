import search from '../704';

test("704", () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
})
