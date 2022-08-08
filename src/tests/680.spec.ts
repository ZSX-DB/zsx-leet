import validPalindrome from '../680';

test("680", () => {
    expect(validPalindrome("aba")).toBeTruthy()
    expect(validPalindrome("abca")).toBeTruthy()
    expect(validPalindrome("abc")).toBeFalsy()
})
