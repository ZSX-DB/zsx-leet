import customSortString from '../791';

test("791", () => {
    expect(["dcba", "cbad"]).toContain(customSortString("cba", "abcd"))
    expect(["dcba", "cbad"]).toContain(customSortString("cbafg", "abcd"))
})
