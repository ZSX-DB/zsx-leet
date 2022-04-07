// const rotateString = (s: string, goal: string): boolean => {
//     if (s.length !== goal.length) {
//         return false
//     }
//     return (s + s).includes(goal)
// }

const rotateString = (s: string, goal: string): boolean => s.length !== goal.length ? false : (s + s).includes(goal)

export default rotateString
