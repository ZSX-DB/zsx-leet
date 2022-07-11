import levelOrder from "../429";

test("429", () => {
    const node: Node = {
        val: 1,
        children: [
            {
                val: 3,
                children: [
                    {
                        val: 5,
                        children: []
                    },
                    {
                        val: 6,
                        children: []
                    }
                ]
            },
            {
                val: 2,
                children: []
            },
            {
                val: 4,
                children: []
            }
        ]
    }
    expect(levelOrder(node)).toEqual([[1], [3, 2, 4], [5, 6]])
})
