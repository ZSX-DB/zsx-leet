import checkSubarraySum from '../523';

test("523", () => {
    expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBeTruthy()
    expect(checkSubarraySum([23, 2, 6, 4, 7], 6)).toBeTruthy()
    expect(checkSubarraySum([23, 2, 6, 4, 7], 13)).toBeFalsy()
})
