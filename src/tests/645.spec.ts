import findErrorNums from '../645';

test("645", () => {
    expect(findErrorNums([1, 2, 2, 4])).toEqual([2, 3])
    expect(findErrorNums([1, 1])).toEqual([1, 2])
})
