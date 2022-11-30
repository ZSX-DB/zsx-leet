import canWinNim from '../292';

test("292", () => {
    expect(canWinNim(4)).toBe(false)
    expect(canWinNim(1)).toBe(true)
    expect(canWinNim(2)).toBe(true)
})
