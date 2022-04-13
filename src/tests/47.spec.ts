import permuteUnique from "../47";

test("47", () => {
    expect(permuteUnique([1, 1, 2])).toStrictEqual([[1, 1, 2], [1, 2, 1], [2, 1, 1]])
    expect(permuteUnique([1, 2, 3])).toStrictEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
})
