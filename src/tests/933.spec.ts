import RecentCounter from '../933';

test("933", () => {
    const rc1 = new RecentCounter()
    expect(rc1.ping(1)).toBe(1)
    expect(rc1.ping(100)).toBe(2)
    expect(rc1.ping(3001)).toBe(3)
    expect(rc1.ping(3002)).toBe(3)
    const rc2 = new RecentCounter()
    expect(rc2.ping(642)).toBe(1)
    expect(rc2.ping(1849)).toBe(2)
    expect(rc2.ping(4921)).toBe(1)
    expect(rc2.ping(5936)).toBe(2)
    expect(rc2.ping(5957)).toBe(3)
})
