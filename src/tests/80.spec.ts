import removeDuplicates from "../80";

test("80", () => {
    const num1 = [1, 1, 1, 2, 2, 3]
    const num2 = [0, 0, 1, 1, 1, 1, 2, 3, 3]
    const result1 = removeDuplicates(num1)
    const result2 = removeDuplicates(num2)
    expect(num1.slice(0, result1)).toEqual([1, 1, 2, 2, 3])
    expect(num2.slice(0, result2)).toEqual([0, 0, 1, 1, 2, 3, 3])
    expect(result1).toBe(5)
    expect(result2).toBe(7)
})
