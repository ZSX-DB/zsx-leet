const licenseKeyFormatting = (s: string, k: number): string => {
    s = s.replace(/-/g, '').toUpperCase()
    const remainder = s.length % k
    const list = []
    if (remainder !== 0) {
        list.push(s.substring(0, remainder))
    }
    for (let i = remainder; i < s.length; i += k) {
        list.push(s.substring(i, i + k))
    }
    return list.join('-')
}


export default licenseKeyFormatting
