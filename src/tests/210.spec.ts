import findOrder from "../210";

test("210", () => {
    expect(findOrder(2, [[1, 0]])).toEqual([0, 1])
    expect(
        [[0, 1, 2, 3], [0, 2, 1, 3]]
            .map(trueCase => JSON.stringify(trueCase))
            .includes(
                JSON.stringify(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]]))
            )
    )
    expect(findOrder(1, [])).toEqual([0])
})
