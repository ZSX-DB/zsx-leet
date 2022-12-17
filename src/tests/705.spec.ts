import MyHashSet from '../705';

test("705", () => {
    const myHashSet = new MyHashSet()
    myHashSet.add(1)
    myHashSet.add(2)
    expect(myHashSet.contains(1)).toBe(true)
    expect(myHashSet.contains(3)).toBe(false)
    myHashSet.add(2)
    expect(myHashSet.contains(2)).toBe(true)
    myHashSet.remove(2)
    expect(myHashSet.contains(2)).toBe(false)
})
