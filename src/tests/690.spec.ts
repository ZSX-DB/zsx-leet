import getImportance from '../690';

class Employee {
    id: number
    importance: number
    subordinates: number[]
    constructor(id: number, importance: number, subordinates: number[]) {
        this.id = (id === undefined) ? 0 : id;
        this.importance = (importance === undefined) ? 0 : importance;
        this.subordinates = (subordinates === undefined) ? [] : subordinates;
    }
}

test("690", () => {
    expect(getImportance([
        new Employee(1, 5, [2, 3]),
        new Employee(2, 3, []),
        new Employee(3, 3, []),
    ], 1)).toBe(11)
})
