// const countVowelStrings = (n: number): number => [
//     5, 15, 35, 70, 126, 210,
//     330, 495, 715, 1001, 1365, 1820,
//     2380, 3060, 3876, 4845, 5985, 7315,
//     8855, 10626, 12650, 14950, 17550, 20475,
//     23751, 27405, 31465, 35960, 40920, 46376,
//     52360, 58905, 66045, 73815, 82251, 91390,
//     101270, 111930, 123410, 135751, 148995, 163185,
//     178365, 194580, 211876, 230300, 249900, 270725,
//     292825, 316251
// ][n - 1]

// const countVowelStrings = (n: number): number => (n + 4) * (n + 3) * (n + 2) * (n + 1) / 24

const countVowelStrings = (n: number): number => {
    // 假设是从头部添加，以 a e i o u 开头的，都可以再以 a 开头，以此类推
    let a = 1
    let e = 1
    let i = 1
    let o = 1
    let u = 1
    for (let idx = 1; idx < n; idx++) {
        a = a + e + i + o + u
        e = e + i + o + u
        i = i + o + u
        o = o + u
    }
    return a + e + i + o + u
}

export default countVowelStrings
