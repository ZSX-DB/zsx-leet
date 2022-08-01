import numSubarraysWithSum from '../930';

test("930", () => {
    expect(numSubarraysWithSum([1, 0, 1, 0, 1], 2)).toBe(4)
    expect(numSubarraysWithSum([0, 0, 0, 0, 0], 0)).toBe(15)
})
