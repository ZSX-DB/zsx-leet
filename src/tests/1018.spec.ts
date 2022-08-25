import prefixesDivBy5 from '../1018';

test("1018", () => {
    expect(prefixesDivBy5([0, 1, 1])).toEqual([true, false, false])
    expect(prefixesDivBy5([1, 1, 1])).toEqual([false, false, false])
})
