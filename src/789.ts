const escapeGhosts = (ghosts: Coordinate[], target: Coordinate): boolean => ghosts
    .map(ghost => Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]))
    .every(distance => distance > (Math.abs(target[0]) + Math.abs(target[1])))

// const escapeGhosts = (ghosts: Coordinate[], target: Coordinate): boolean => {
//     const getDistance = (a: Coordinate, b: Coordinate): number => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
//     const distance = getDistance([0, 0], target)
//     const ghostDistances = ghosts.map(ghost => getDistance(ghost, target))
//     return ghostDistances.every(ghostDistance => ghostDistance > distance)
// }

export default escapeGhosts
