const flipAndInvertImage = (image: number[][]): number[][] => image.map(line => line.reverse()).map(line => line.map(dot => dot === 0 ? 1 : 0))

export default flipAndInvertImage