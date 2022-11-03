const hIndex = (citations: number[]): number => (citations
    .sort((x, y) => y - x)
    .map((citation, index) => ({
        citation, index
    }))
    .reverse()
    .find(item => item.citation > item.index)?.index ?? -1) + 1

// const hIndex = (citations: number[]): number => {
//     let i = citations.length
//     while (i > 0) {
//         let count = 0
//         for (const citation of citations) {
//             if (citation >= i) {
//                 count++
//             }
//         }
//         if (count >= i) {
//             return i
//         }
//         i--
//     }
//     return 0
// }

export default hIndex
