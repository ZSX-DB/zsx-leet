import lengthOfLastWord from "../58";

test("58", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5)
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4)
})
