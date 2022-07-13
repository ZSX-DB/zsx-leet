declare class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val?: number, next?: ListNode | null);
}


declare class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null);
}


declare class Node {
    val: number
    children: Node[]

    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}


declare type TrieRoot = {
    [key in string]: TrieRoot;
}


declare class NestedInteger {
    constructor(value?: number);

    isInteger(): boolean;

    getInteger(): number | null;

    setInteger(value: number): void;

    add(elem: NestedInteger): void;

    getList(): NestedInteger[];
}
