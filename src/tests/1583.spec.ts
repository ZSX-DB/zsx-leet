import unhappyFriends from '../1583';

test("1583", () => {
    expect(unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]])).toBe(2)
    expect(unhappyFriends(2, [[1], [0]], [[1, 0]])).toBe(0)
    expect(unhappyFriends(4, [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], [[1, 3], [0, 2]])).toBe(4)
})
