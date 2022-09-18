class KthLargest {
    private readonly minHeap: number[]
    private readonly k: number
    constructor(k: number, nums: number[]) {
        this.k = k
        this.minHeap = [Infinity]
        nums.forEach(num => {
            this.update(num)
        })
    }

    private swap(i: number, j: number): void {
        [this.minHeap[i], this.minHeap[j]] = [this.minHeap[j], this.minHeap[i]]
    }

    private up(index: number): void {
        // 使用数组模拟二叉树，parent 为父节点索引
        const parent = Math.floor(index / 2)
        // parent > 0 判断为非父节点
        if (parent > 0 && this.minHeap[parent] > this.minHeap[index]) {
            this.swap(parent, index)
            // 递归上浮
            this.up(parent)
        }
    }

    private down(index: number): void {
        let parent = index
        // 和左子元素比较
        const left = index * 2
        const right = index * 2 + 1
        if (left < this.minHeap.length && this.minHeap[left] < this.minHeap[parent]) {
            parent = left
        }
        if (right < this.minHeap.length && this.minHeap[right] < this.minHeap[parent]) {
            parent = right
        }
        if (parent !== index) {
            this.swap(index, parent)
            this.down(parent)
        }
    }

    private update(val: number): void {
        if (this.minHeap.length <= this.k) {
            // 最小堆不满，放入最小堆
            this.minHeap.push(val)
            this.up(this.minHeap.length - 1)
        } else {
            if (val > this.minHeap[1]) {
                this.minHeap[1] = val
                this.down(1)
            }
        }
    }

    add(val: number): number {
        this.update(val)
        return this.minHeap[1]
    }
}


// class KthLargest {
//     private readonly nums: number[]
//     private readonly k: number
//     constructor(k: number, nums: number[]) {
//         this.nums = nums.sort((x, y) => x - y)
//         this.k = k
//     }

//     add(val: number): number {
//         let left = 0
//         let right = this.nums.length - 1
//         if (val <= this.nums[left]) {
//             this.nums.unshift(val)
//         } else if (val >= this.nums[right]) {
//             this.nums.push(val)
//         } else {
//             while (left <= right) {
//                 const mid = Math.floor((left + right) / 2)
//                 if (this.nums[mid] < val) {
//                     left = mid + 1
//                 } else if (this.nums[mid] > val) {
//                     right = mid - 1
//                 } else {
//                     left = mid
//                     break
//                 }
//             }
//             this.nums.splice(left, 0, val)
//         }
//         return this.nums[this.nums.length - this.k]
//     }
// }

export default KthLargest    
