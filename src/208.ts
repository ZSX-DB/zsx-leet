class Trie {
    private readonly root: TrieRoot

    constructor() {
        this.root = {}
    }

    insert(word: string): void {
        let temp: TrieRoot = this.root
        for (const ch of word) {
            if (temp[ch] === undefined) {
                temp[ch] = {}
            }
            temp = temp[ch]
        }
        temp.end = {}
    }

    search(word: string): boolean {
        let temp: TrieRoot = this.root
        for (const ch of word) {
            if (temp[ch] === undefined) {
                return false
            } else {
                temp = temp[ch]
            }
        }
        return temp.hasOwnProperty('end')
    }

    startsWith(prefix: string): boolean {
        let temp: TrieRoot = this.root
        for (const ch of prefix) {
            if (temp[ch] === undefined) {
                return false
            } else {
                temp = temp[ch]
            }
        }
        return true
    }
}

export default Trie
