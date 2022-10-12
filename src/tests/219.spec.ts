import containsNearbyDuplicate from '../219';

test("219", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true)
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true)
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false)
})
