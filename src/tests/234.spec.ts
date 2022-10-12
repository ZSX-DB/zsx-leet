import isPalindrome from '../234';
import { toLinkedList } from '../utils/convert';

test("234", () => {
    expect(isPalindrome(toLinkedList([1, 2, 2, 1]))).toBe(true)
    expect(isPalindrome(toLinkedList([1, 2]))).toBe(false)
})
