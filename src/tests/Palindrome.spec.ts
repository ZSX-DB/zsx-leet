import Palindrome from "../data_structure/Palindrome";

test("Palindrome", () => {
    expect(Palindrome.is("abc")).toBeFalsy()
    expect(Palindrome.is("abbc")).toBeFalsy()
    expect(Palindrome.is("abba")).toBeTruthy()
    expect(Palindrome.is("aba")).toBeTruthy()
})