import canVisitAllRooms from '../841';

test("841", () => {
    expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true)
    expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false)
    expect(canVisitAllRooms([[1, 3], [1, 4], [2, 3, 4, 1], [], [4, 3, 2]])).toBe(true)
})
