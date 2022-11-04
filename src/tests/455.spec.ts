import findContentChildren from '../455';

test("455", () => {
    expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1)
    expect(findContentChildren([1, 2, 3], [1, 2, 4])).toBe(3)
})
