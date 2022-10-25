import isPalindrome from '../125';

test("125", () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    expect(isPalindrome('race a car')).toBe(false)
    expect(isPalindrome(' ')).toBe(true)
})
