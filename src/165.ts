// const compareVersion = (version1: string, version2: string): -1 | 0 | 1 => {
//     const v1 = version1.split('.').map(Number)
//     const v2 = version2.split('.').map(Number)
//     const n = Math.min(v1.length, v2.length)
//     for (let i = 0; i < n; i++) {
//         if (v1[i] > v2[i]) {
//             return 1
//         } else if (v1[i] < v2[i]) {
//             return -1
//         }
//     }
//     if (v1.length > v2.length) {
//         return v1.slice(n).every(num => num === 0) ? 0 : 1
//     } else if (v1.length < v2.length) {
//         return v2.slice(n).every(num => num === 0) ? 0 : -1
//     } else {
//         return 0
//     }
// }

const compareVersion = (version1: string, version2: string): -1 | 0 | 1 => {
    const v1 = version1.split('.').map(Number)
    const v2 = version2.split('.').map(Number)
    const n = Math.max(v1.length, v2.length)
    v1.push(...Array(n - v1.length).fill(0))
    v2.push(...Array(n - v2.length).fill(0))
    for (let i = 0; i < n; i++) {
        if (v1[i] > v2[i]) {
            return 1
        } else if (v1[i] < v2[i]) {
            return -1
        }
    }
    return 0
}

export default compareVersion
