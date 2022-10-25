class LetterUtils {
    static readonly lowercase: string[] = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97))

    static readonly lowercaseSet: Set<string> = new Set<string>(Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97)))

    static readonly uppercase: string[] = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65))

    static readonly uppercaseSet: Set<string> = new Set<string>(Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65)))

    static isLetter(char: string): boolean {
        return this.lowercaseSet.has(char) || this.uppercaseSet.has(char)
    }

    static isLower(char: string): boolean {
        return this.lowercaseSet.has(char)
    }

    static isUpper(char: string): boolean {
        return this.uppercaseSet.has(char)
    }

    static isLowerWord(word: string): boolean {
        return word.split('').every(char => this.lowercaseSet.has(char))
    }

    static isUpperWord(word: string): boolean {
        return word.split('').every(char => this.uppercaseSet.has(char))
    }

    /**
     * Check if a word start with an upper case letter
     * @param word 
     * @returns 
     */
    static isTitleWord(word: string): boolean {
        if (this.uppercaseSet.has(word[0]) === false) {
            return false
        }
        return word.split('').slice(1).every(char => this.lowercaseSet.has(char))
    }
}

export default LetterUtils