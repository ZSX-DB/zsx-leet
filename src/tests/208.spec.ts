import Trie from "../208";

test("208", () => {
    const trie = new Trie()
    trie.insert('apple')
    expect(trie.search('apple')).toBeTruthy()
    expect(trie.search('app')).toBeFalsy()
    expect(trie.startsWith('app')).toBeTruthy()
    trie.insert('app')
    expect(trie.search('app')).toBeTruthy()
})
