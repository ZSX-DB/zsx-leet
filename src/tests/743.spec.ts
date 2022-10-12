import networkDelayTime from '../743';

test("743", () => {
    expect(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)).toBe(2)
    expect(networkDelayTime([[1, 2, 1]], 2, 1)).toBe(1)
    expect(networkDelayTime([[1, 2, 1]], 2, 2)).toBe(-1)
})
