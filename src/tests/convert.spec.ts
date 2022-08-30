import { toBinaryTree, toLinkedList } from "../utils/convert";

test("toBinaryTree", () => {
    expect(toBinaryTree([1, 2])).toEqual({
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: null
    })
    expect(toBinaryTree([1, null, 2])).toEqual({
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null
        }
    })
    expect(toBinaryTree([1])).toEqual({
        val: 1,
        left: null,
        right: null
    })
    expect(toBinaryTree([1, null, 2, 3])).toEqual({
        val: 1,
        left: null,
        right: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: null
        }
    })
    expect(toBinaryTree([1, 2, 3])).toEqual({
        val: 1,
        left: {
            val: 2,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    })
    expect(toBinaryTree([1, null, 2, null, 3])).toEqual({
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: {
                val: 3,
                left: null,
                right: null
            }
        }
    })
    expect(toBinaryTree([3, 1, 4, 3, null, 1, 5])).toEqual({
        val: 3,
        left: {
            val: 1,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            },
        }
    })
    expect(toBinaryTree([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9])).toEqual({
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: {
                val: 3,
                left: null,
                right: {
                    val: 4,
                    left: null,
                    right: {
                        val: 5,
                        left: null,
                        right: {
                            val: 6,
                            left: null,
                            right: {
                                val: 7,
                                left: null,
                                right: {
                                    val: 8,
                                    left: null,
                                    right: {
                                        val: 9,
                                        left: null,
                                        right: null
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
})

test("toLinkedList", () => {
    expect(toLinkedList([])).toEqual(null)
    expect(toLinkedList([3, 2, 6])).toEqual({ val: 3, next: { val: 2, next: { val: 6, next: null } } })
    expect(toLinkedList([3, 1, 2, 4])).toEqual({ val: 3, next: { val: 1, next: { val: 2, next: { val: 4, next: null } } } })
})
