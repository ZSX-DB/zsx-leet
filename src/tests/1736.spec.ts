import maximumTime from '../1736';
test("1736", () => {
    expect(maximumTime("2?:?0")).toBe("23:50")
    expect(maximumTime("0?:3?")).toBe("09:39")
    expect(maximumTime("1?:22")).toBe("19:22")
})
