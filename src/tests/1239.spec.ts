import maxLength from '../1239';

test("1239", () => {
    expect(maxLength(["un", "iq", "ue"])).toBe(4)
    expect(maxLength(["cha", "r", "act", "ers"])).toBe(6)
    expect(maxLength(["abcdefghijklmnopqrstuvwxyz"])).toBe(26)
})
