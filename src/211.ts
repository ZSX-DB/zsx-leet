class WordDictionary {
    private readonly root: TrieRoot

    constructor() {
        this.root = {}
    }

    addWord(word: string): void {
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
        const match = (word: string, root: TrieRoot): boolean => {
            for (let i = 0; i < word.length; i++) {
                const ch = word[i]
                if (ch === '.') {
                    for (const key in root) {
                        if (root.hasOwnProperty(key) && match(word.slice(i + 1), root[key])) {
                            return true
                        }
                    }
                    return false
                }
                if (root[ch] === undefined) {
                    return false
                }
                root = root[ch]
            }
            return root.hasOwnProperty('end')
        }
        return match(word, this.root)
    }
}

export default WordDictionary
