import summaryRanges from "../228";

test("228", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"])
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"])
})
