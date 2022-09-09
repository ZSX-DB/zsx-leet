const canVisitAllRooms = (rooms: number[][]): boolean => {
    const visited = new Set<number>()
    const visit = (key: number) => {
        visited.add(key)
        rooms[key].forEach(k => {
            if (visited.has(k) === false) {
                visit(k)
            }
        })
    }
    visit(0)
    return visited.size === rooms.length
}

export default canVisitAllRooms
