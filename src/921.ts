// const minAddToMakeValid = (s: string): number => {
//     const stack: string[] = []
//     for (const ch of s) {
//         if (ch === ')' && stack[stack.length - 1] === '(') {
//             stack.pop()
//         } else {
//             stack.push(ch)
//         }
//     }
//     return stack.length
// }

// const minAddToMakeValid = (s: string): number => {
//     while (s.includes('()')) {
//         s = s.replace('()', '')
//     }
//     return s.length
// }

const minAddToMakeValid = (s: string): number => {
    let ans = 0
    let bal = 0
    for (let i = 0; i < s.length; i++) {
        bal += (s[i] === '(' ? 1 : -1)
        if (bal === -1) {
            ans++
            bal++
        }
    }
    return ans + bal
}

export default minAddToMakeValid
