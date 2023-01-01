const checkRecord = (s: string): boolean => s.indexOf('A') === s.lastIndexOf('A') && s.includes('LLL') === false

export default checkRecord
