import canPartition from '../416';

test("416", () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true)
    expect(canPartition([1, 2, 3, 5])).toBe(false)
})
