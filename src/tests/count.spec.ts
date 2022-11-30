import count from "../data_structure/count";

test("count", () => {
    expect(count([3, 3, 2, 1])).toEqual(new Map<number, number>([[1, 1], [2, 1], [3, 2]]))
    expect(count('hello')).toEqual(new Map<string, number>([['h', 1], ['e', 1], ['l', 2], ['o', 1]]))
    expect(count(['hello', 'world'])).toEqual(new Map<string, number>([['hello', 1], ['world', 1]]))
})