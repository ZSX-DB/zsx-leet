import insert from "../57";

test("55", () => {
    expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]])
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]])
    expect(insert([], [5, 7])).toEqual([[5, 7]])
    expect(insert([[1, 5]], [2, 3])).toEqual([[1, 5]])
    expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]])
})
