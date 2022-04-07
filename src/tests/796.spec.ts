import rotateString from "../796";

test("796", () => {
    expect(rotateString('abcde', 'cdeab')).toBe(true)
    expect(rotateString('abcde', 'abced')).toBe(false)
})
