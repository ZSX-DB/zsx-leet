import lemonadeChange from '../860';

test("860", () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true)
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false)
})
