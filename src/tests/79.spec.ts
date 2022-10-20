import exist from '../79';

test("79", () => {
    expect(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCCED')).toBe(true)
    expect(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'SEE')).toBe(true)
    expect(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABCB')).toBe(false)
})
