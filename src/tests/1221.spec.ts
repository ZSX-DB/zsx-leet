import balancedStringSplit from '../1221';

test("1221", () => {
    expect(balancedStringSplit("RLRRLLRLRL")).toBe(4)
    expect(balancedStringSplit("RLLLLRRRLR")).toBe(3)
    expect(balancedStringSplit("LLLLRRRR")).toBe(1)
    expect(balancedStringSplit("RLRRRLLRLL")).toBe(2)
})
