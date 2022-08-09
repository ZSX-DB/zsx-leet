import checkPowersOfThree from '../1780';

test("1780", () => {
    expect(checkPowersOfThree(12)).toBeTruthy()
    expect(checkPowersOfThree(91)).toBeTruthy()
    expect(checkPowersOfThree(21)).toBeFalsy()
    expect(checkPowersOfThree(351)).toBeTruthy()
})
