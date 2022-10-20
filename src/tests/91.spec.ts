import numDecodings from '../91';

test("91", () => {
    expect(numDecodings('12')).toBe(2)
    expect(numDecodings('226')).toBe(3)
    expect(numDecodings('0')).toBe(0)
    expect(numDecodings('2222')).toBe(5)
})
