import OrderedStream from '../1656';

test("1656", () => {
    const orderedStream = new OrderedStream(5)
    expect(orderedStream.insert(3, 'ccccc')).toEqual([])
    expect(orderedStream.insert(1, 'aaaaa')).toEqual(['aaaaa'])
    expect(orderedStream.insert(2, 'bbbbb')).toEqual(['bbbbb', 'ccccc'])
    expect(orderedStream.insert(5, 'eeeee')).toEqual([])
    expect(orderedStream.insert(4, 'ddddd')).toEqual(['ddddd', 'eeeee'])
})
