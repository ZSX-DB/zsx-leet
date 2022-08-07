const compress = (chars: string[]): number => {
    const n = chars.length
    // chars[i] 可以是小写英文字母、大写英文字母、数字或符号，不会是空字符
    chars.push('')
    for (let i = 0; i < n; i++) {
        const copy = i
        while (chars[i + 1] === chars[copy]) {
            i++
        }
        const value = i - copy
        if (value === 0) {
            chars.push(chars[copy])
        } else {
            chars.push(chars[copy], ...String(value + 1))
        }
    }
    chars.splice(0, n + 1)
    return chars.length
}

export default compress
