import lowestCommonAncestor from "../235";
import {toBinaryTree} from "../utils/convert";
import {findNodeByVal} from "../utils/find";

test("235", () => {
    const root = toBinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
    const commonParentNode = findNodeByVal(root, 6)
    const pNode = findNodeByVal(root, 2)
    const qNode = findNodeByVal(root, 8)
    expect(lowestCommonAncestor(root, pNode, qNode)).toBe(commonParentNode)
})
