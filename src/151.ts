const reverseWords = (s: string): string => s.trim().split(' ').filter(word => word !== '').reverse().join(' ')

export default reverseWords
