import findLongestWord from '../524';

test("524", () => {
    expect(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])).toBe("apple")
    expect(findLongestWord("abpcplea", ["a", "b", "c"])).toBe("a")
})
