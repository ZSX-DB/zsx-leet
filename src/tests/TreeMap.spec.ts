import TreeMap from "../data_structure/TreeMap";

const map = new Map<number, string>([[1, "first"]])
const treeMap = new TreeMap<string>([[5, "five"]])

map.set(3, "three").set(5, "five")
treeMap.set(3, "three").set(1, "first")

test("get", () => {
    [1, 3, 5, 7, 9].forEach(key => {
        expect(map.get(key)).toBe(treeMap.get(key))
    })
})

test("set", () => {
    map.set(7, "seven")
    treeMap.set(7, "seven")
    expect(map.get(7)).toBe(treeMap.get(7))
})

test("delete", () => {
    expect(treeMap.getKeysSet()).toEqual([1, 3, 5, 7])
    treeMap.delete(3)
    expect(treeMap.get(3)).toBe(undefined)
    expect(treeMap.getKeysSet()).toEqual([1, 5, 7])
    // 保持与 treeMap keys 数量一致
    map.delete(3)
})

test("forEach", () => {
    const kvs1: [number, string][] = []
    const kvs2: [number, string][] = []
    map.forEach((value, key) => {
        kvs1.push([key, value])
    })
    treeMap.forEach((value, key) => {
        kvs2.push([key, value])
    })
    expect(kvs1).toEqual(kvs2)
})

test("keys", () => {
    const iterator1 = map.keys()
    const iterator2 = treeMap.keys()
    expect(map.size).toBe(treeMap.size)
    for (let i = 0; i < map.size; i++) {
        expect(iterator1.next().value).toBe(iterator2.next().value)
    }
})

test("values", () => {
    const iterator1 = map.values()
    const iterator2 = treeMap.values()
    expect(map.size).toBe(treeMap.size)
    for (let i = 0; i < map.size; i++) {
        expect(iterator1.next().value).toBe(iterator2.next().value)
    }
})

test("entries", () => {
    const iterator1 = map.entries()
    const iterator2 = treeMap.entries()
    expect(map.size).toBe(treeMap.size)
    for (let i = 0; i < map.size; i++) {
        expect(iterator1.next().value).toEqual(iterator2.next().value)
    }
})

test("clear", () => {
    treeMap.clear()
    expect(treeMap.size).toBe(0)
    expect(treeMap.getKeysSet()).toEqual([])
})
