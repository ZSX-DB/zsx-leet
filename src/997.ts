// const findJudge = (n: number, trust: [number, number][]): number => {
//     const trustPersons = new Set<number>()
//     trust.forEach(([trustPerson]) => {
//         trustPersons.add(trustPerson)
//     })
//     if (trustPersons.size !== n - 1) {
//         return -1
//     }
//     let judge = -1
//     for (let i = 1; i <= n; i++) {
//         if (trustPersons.has(i) === false) {
//             judge = i
//             break
//         }
//     }
//     return trust.filter(([, trustedPerson]) => trustedPerson === judge).length === n - 1 ? judge : -1
// }

const findJudge = (n: number, trust: [number, number][]): number => {
    if (trust.length === 0) {
        return n === 1 ? 1 : -1
    }
    const trustInfos = Array(n + 1).fill(null).map(() => ({
        trust: 0,
        trusted: 0
    }))
    trust.forEach(([trustPerson, trustedPerson]) => {
        trustInfos[trustPerson].trust++
        trustInfos[trustedPerson].trusted++
    })
    return trustInfos.findIndex(trustInfo => trustInfo.trust === 0 && trustInfo.trusted === n - 1)
}

export default findJudge
