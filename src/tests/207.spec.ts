import canFinish from "../207";

test("207", () => {
    expect(canFinish(2, [[1, 0]])).toBeTruthy()
    expect(canFinish(4, [[3, 2], [2, 1], [1, 0]])).toBeTruthy()
    expect(canFinish(2, [[1, 0], [0, 1]])).toBeFalsy()
})
