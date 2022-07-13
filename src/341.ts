class NestedIterator {
    private readonly nums: number[] = []

    constructor(nestedList: NestedInteger[]) {
        this.dfs(nestedList)
    }

    private dfs = (nestedList: NestedInteger[]): void => {
        nestedList.forEach(nestedItem => {
            if (nestedItem.isInteger()) {
                this.nums.push(nestedItem.getInteger())
            } else {
                this.dfs(nestedItem.getList())
            }
        })
    }

    hasNext(): boolean {
        return this.nums.length > 0
    }

    next(): number {
        return this.nums.shift()
    }
}

export default NestedIterator
