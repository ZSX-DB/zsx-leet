import fib from '../509';

test("509", () => {
    expect(fib(2)).toBe(1)
    expect(fib(3)).toBe(2)
    expect(fib(4)).toBe(3)
})
