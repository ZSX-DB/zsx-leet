const destCity = (paths: string[][]): string => {
    const record = new Set(paths.map(path => path[0]))
    for (const [, city] of paths) {
        if (record.has(city) === false) {
            return city
        }
    }
}

export default destCity
