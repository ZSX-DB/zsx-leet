import checkPossibility from '../665';

test("665", () => {
    expect(checkPossibility([4, 2, 3])).toBeTruthy()
    // expect(checkPossibility([4, 2, 1])).toBeFalsy()
    expect(checkPossibility([3, 4, 2, 3])).toBeFalsy()
    expect(checkPossibility([-1, 4, 2, 3])).toBeTruthy()
    expect(checkPossibility([2, 3, -1, 4])).toBeTruthy()
    expect(checkPossibility([1, 5, 4, 6, 7, 8, 9])).toBeTruthy()
    expect(checkPossibility([2, 3, 3, 2, 2])).toBeFalsy()
    expect(checkPossibility([1, 2, 7, 2, 5, 9])).toBeTruthy()
})
