import escapeGhosts from '../789';

test("789", () => {
    expect(escapeGhosts([[1, 0], [0, 3]], [0, 1])).toBe(true)
    expect(escapeGhosts([[1, 0]], [2, 0])).toBe(false)
    expect(escapeGhosts([[2, 0]], [1, 0])).toBe(false)
})
