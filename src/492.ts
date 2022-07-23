const constructRectangle = (area: number): [number, number] => {
    let width = Math.floor(Math.sqrt(area))
    while (area % width !== 0) {
        width--
    }
    return [area / width, width]
}

export default constructRectangle
