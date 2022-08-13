import findWords from "../212";
import {detectItems} from "../utils/detect";

test("212", () => {
    expect(detectItems<string>(
        findWords([
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"]
        ], ["oath", "pea", "eat", "rain", "aea"]),
        ['oath', 'eat']
    )).toBeTruthy()
    expect(detectItems<string>(
        findWords([
            ["a", "b"],
            ["c", "d"]
        ], ["aaaaa"]),
        []
    )).toBeTruthy()
    expect(detectItems<string>(
        findWords([
            ["o", "a", "b", "n"],
            ["o", "t", "a", "e"],
            ["a", "h", "k", "r"],
            ["a", "f", "l", "v"]
        ], ["oa", "oaa"]),
        ["oa", "oaa"]
    )).toBeTruthy()
    expect(detectItems<string>(
        findWords([
            ["a", "a"],
            ["a", "a"]
        ], ["aaaaa"]),
        []
    )).toBeTruthy()
    expect(detectItems<string>(
        findWords([
            ["a", "b", "c"],
            ["a", "e", "d"],
            ["a", "f", "g"]
        ], ["eaafgdcba", "eaabcdgfa"]),
        ["eaafgdcba", "eaabcdgfa"]
    )).toBeTruthy()
})
