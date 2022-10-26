import solve, { Board } from '../130';

test("130", () => {
    const board1: Board = [
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"],
        ["X", "X", "O", "X"],
        ["X", "O", "X", "X"]
    ]
    const board2: Board = [
        ["O", "X", "O", "O", "O", "X"],
        ["O", "O", "X", "X", "X", "O"],
        ["X", "X", "X", "X", "X", "O"],
        ["O", "O", "O", "O", "X", "X"],
        ["X", "X", "O", "O", "X", "O"],
        ["O", "O", "X", "X", "X", "X"]
    ]
    solve(board1)
    solve(board2)
    expect(board1).toEqual([
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "O", "X", "X"]])
    expect(board2).toEqual([
        ["O", "X", "O", "O", "O", "X"],
        ["O", "O", "X", "X", "X", "O"],
        ["X", "X", "X", "X", "X", "O"],
        ["O", "O", "O", "O", "X", "X"],
        ["X", "X", "O", "O", "X", "O"],
        ["O", "O", "X", "X", "X", "X"]
    ])
})
