import backspaceCompare from '../844';

test("844", () => {
    expect(backspaceCompare("ab#c", "ad#c")).toBe(true)
    expect(backspaceCompare("ab##", "c#d#")).toBe(true)
    expect(backspaceCompare("a#c", "b")).toBe(false)
})
