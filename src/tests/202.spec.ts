import isHappy from "../202";

test("202", () => {
    expect(isHappy(19)).toBeTruthy()
    expect(isHappy(2)).toBeFalsy()
})
