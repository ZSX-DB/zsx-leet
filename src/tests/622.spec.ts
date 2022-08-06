import MyCircularQueue from '../622';

test("622", () => {
    const myCircularQueue = new MyCircularQueue(8)
    expect(myCircularQueue.enQueue(3)).toBeTruthy()
    expect(myCircularQueue.enQueue(9)).toBeTruthy()
    expect(myCircularQueue.enQueue(5)).toBeTruthy()
    expect(myCircularQueue.enQueue(0)).toBeTruthy()
    expect(myCircularQueue.deQueue()).toBeTruthy()
    expect(myCircularQueue.deQueue()).toBeTruthy()
    expect(myCircularQueue.isEmpty()).toBeFalsy()
    expect(myCircularQueue.isEmpty()).toBeFalsy()
    expect(myCircularQueue.Rear()).toBe(0)
    expect(myCircularQueue.Rear()).toBe(0)
    expect(myCircularQueue.deQueue()).toBeTruthy()
})
