import LRUCache from "../146";

test("146", () => {
    const lruCache1 = new LRUCache(2)
    lruCache1.put(1, 1)
    lruCache1.put(2, 2)
    expect(lruCache1.get(1)).toBe(1)
    lruCache1.put(3, 3)
    expect(lruCache1.get(2)).toBe(-1)
    lruCache1.put(4, 4)
    expect(lruCache1.get(1)).toBe(-1)
    expect(lruCache1.get(3)).toBe(3)
    expect(lruCache1.get(4)).toBe(4)

    const lruCache2 = new LRUCache(2)
    lruCache2.put(2, 1)
    lruCache2.put(2, 2)
    expect(lruCache2.get(2)).toBe(2)
    lruCache2.put(1, 1)
    lruCache2.put(4, 1)
    expect(lruCache2.get(2)).toBe(-1)

    const lruCache3 = new LRUCache(2)
    expect(lruCache3.get(2)).toBe(-1)
    lruCache3.put(2, 6)
    expect(lruCache3.get(1)).toBe(-1)
    lruCache3.put(1, 5)
    lruCache3.put(1, 2)
    expect(lruCache3.get(1)).toBe(2)
    expect(lruCache3.get(2)).toBe(6)

})
