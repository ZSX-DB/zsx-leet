import MyStack from "../225";

test("225", () => {
    const myStack = new MyStack()
    myStack.push(1)
    myStack.push(2)
    expect(myStack.top()).toBe(2)
    expect(myStack.pop()).toBe(2)
    expect(myStack.empty()).toBeFalsy()
})
