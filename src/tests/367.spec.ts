import isPerfectSquare from "../367";

test("367", () => {
    expect(isPerfectSquare(1)).toBeTruthy()
    expect(isPerfectSquare(2)).toBeFalsy()
    expect(isPerfectSquare(3)).toBeFalsy()
    expect(isPerfectSquare(4)).toBeTruthy()
    expect(isPerfectSquare(16)).toBeTruthy()
    expect(isPerfectSquare(14)).toBeFalsy()
})
