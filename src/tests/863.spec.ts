import distanceK from '../863';
import { detectItems } from '../utils/detect';

test("863", () => {
    const target1: TreeNode = {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    }
    const root1: TreeNode = {
        val: 3,
        left: target1,
        right: {
            val: 1,
            left: {
                val: 0,
                left: null,
                right: null
            },
            right: {
                val: 8,
                left: null,
                right: null
            }
        }
    }
    const target2: TreeNode = {
        val: 1,
        left: null,
        right: null
    }
    const root2: TreeNode = target2
    expect(detectItems<number>(distanceK(root1, target1, 2), [7, 4, 1])).toBe(true)
    expect(distanceK(root2, target2, 3)).toEqual([])
})
