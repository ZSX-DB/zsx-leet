import Palindrome from "../data_structure/Palindrome";

test("Palindrome", () => {
    expect(Palindrome.detect("abc")).toBeFalsy()
    expect(Palindrome.detect("abbc")).toBeFalsy()
    expect(Palindrome.detect("abba")).toBeTruthy()
    expect(Palindrome.detect("aba")).toBeTruthy()
})