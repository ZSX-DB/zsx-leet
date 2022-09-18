import KthLargest from '../703';

test("703", () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2])
    expect(kthLargest.add(3)).toBe(4)
    expect(kthLargest.add(5)).toBe(5)
    expect(kthLargest.add(10)).toBe(5)
    expect(kthLargest.add(9)).toBe(8)
    expect(kthLargest.add(4)).toBe(8)
})
