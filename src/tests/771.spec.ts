import numJewelsInStones from '../771';

test("771", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3)
    expect(numJewelsInStones("z", "ZZ")).toBe(0)
})
