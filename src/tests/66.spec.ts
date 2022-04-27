import plusOne from "../66";

test("66", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    expect(plusOne([1, 9, 9])).toEqual([2, 0, 0])
    expect(plusOne([9, 9])).toEqual([1, 0, 0])
})
