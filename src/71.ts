const simplifyPath = (path: string): string => {
    const stack: string[] = []
    const items: string[] = path.split('/')
    items.forEach(item => {
        if (!['', '.', '..'].includes(item)) {
            stack.push(item)
        } else if (item === '..' && stack.length > 0) {
            stack.pop()
        }
    })
    return `/${stack.join('/')}`
}

export default simplifyPath
