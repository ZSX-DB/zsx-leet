import distanceK from '../863';
import { detectItems } from '../utils/detect';
import { toBinaryTree } from '../utils/convert';

test("863", () => {
    const target1: TreeNode = toBinaryTree([5, 6, 2, null, null, 7, 4])
    const root1: TreeNode = {
        val: 3,
        left: target1,
        right: toBinaryTree([1, 0, 8])
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
