const removeDuplicates = (s: string): string => {
    const stack: string[] = []
    for (let i = 0; i < s.length; i += 1) {
        if (stack[stack.length - 1] === s[i]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
}

export default removeDuplicates
