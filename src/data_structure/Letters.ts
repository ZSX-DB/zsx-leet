class Letters {
    static readonly lowerCase: string[] = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97))

    static readonly lowerCaseSet: Set<string> = new Set<string>(Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 97)))

    static readonly upperCase: string[] = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65))

    static readonly upperCaseSet: Set<string> = new Set<string>(Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65)))

    static isLower(char: string): boolean {
        return this.lowerCaseSet.has(char)
    }

    static isUpper(char: string): boolean {
        return this.upperCaseSet.has(char)
    }

    static isLowerWord(word: string): boolean {
        return word.split('').every(char => this.lowerCaseSet.has(char))
    }

    static isUpperWord(word: string): boolean {
        return word.split('').every(char => this.upperCaseSet.has(char))
    }

    /**
     * Check if a word start with an upper case letter
     * @param word 
     * @returns 
     */
    static isTitleWord(word: string): boolean {
        if (this.upperCaseSet.has(word[0]) === false) {
            return false
        }
        return word.split('').slice(1).every(char => this.lowerCaseSet.has(char))
    }
}

export default Letters