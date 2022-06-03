import addToArrayForm from "../989";

test("989", () => {
    expect(addToArrayForm([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4])
    expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5])
    expect(addToArrayForm([2, 1, 5], 806)).toEqual([1, 0, 2, 1])
})