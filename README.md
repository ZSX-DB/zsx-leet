**个人在 leetcode 上也刷了不少题，最近打算用 typescript 来再次做以前用 javascript 完成的题目，看看近一年到底进步了没有。因此配置一个刷题的环境，支持单元测试和 typescript，并且能够帮我减少一些重复的类型定义，本文是记录项目创建的过程**

**项目链接：**

### 配置项目

* 首先使用 `yarn init` 创建项目

* leetcode 支持 typescript，目前如果你想用 typescript 进行刷题的话还是比较麻烦的，可能你需要先 tsc 编译成 js 文件再本地检验结果是否正确，因此来集成 typescript
  
  ```
  yarn add typscript --dev
  // 命令执行完就可以看到生成了 tsconfig.json
  npx tsc --init
  ```

* 项目需要集成单元测试，以便判断题解的程序是否正确。我选用了 Jest 这个框架，注意需要在 tsconfig.json 的 types 数组下添加 "jest"

  ```
  // 添加 jest
  yarn add jest @types/jest --dev
  ```

* 在 node 环境下你只能使用 CJS 模块，因此需要通过 babel 来配置 ES 模块，顺便通过 bebel 来配置支持 typescript

  ```
  yarn add --dev babel-jest @babel/core @babel/preset-env
  yarn add --dev @babel/preset-typescript
  ```
  然后在工程的根目录下创建一个babel.config.js文件用于配置与你当前Node版本兼容的Babel
  ```javascript
  module.exports = {
      presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-typescript',
      ],
  };
  ```

* 最后添加测试指令，在 package.json 添加下列代码

  ```json
  "scripts": {
    "test": "jest"
  },
  ```

### 工程目录结构

```
leet
├── src
│   ├── tests    // tests 文件夹，存放测试代码，以 ***.spec.ts 命名
│   |   ├── 1.spec.ts    // 根据同名文件编写的测试代码
|   |   └── ...
│   ├── utils    // utils 文件夹，存放工具函数
│   ├── 1.ts    // 根据 leetcode 题目编号编写的解题代码
│   └── ...
```


### 导出常用类型

leetcode 有大量关于链表和二叉树等数据结构的题目，例如 `function inorderTraversal(root: TreeNode | null): number[] {};`, 我们总不能每一个相关的问题都定义一遍 `TreeNode` 吧。因此，最好全局导出，在项目根目录下建立 `global.d.ts` 文件，一处定义，全局使用

```typescript

// global.d.ts
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
```

### 转换函数
针对二叉树，leetcode 为了方便描述，抽象出的形式是一个包含了数字和 null 的数组，针对链表，则是一个纯数字数组，因此编写一个函数，将数组转换成正常的二叉树和链表，下面举例是链表的，二叉树比较复杂，具体地请看项目代码，都做好了注释当然。当然工具函数也做了单元测试，并且测试通过

```typescript

// convert.ts
const toLinkedList = (list: number[]): ListNode | null => {
    const len: number = list.length
    if (len === 0) {
        return null
    }
    const initListNode: ListNode = { val: -1, next: null }
    const result: ListNode = { ...initListNode }
    let temp: ListNode | null = result
    for (let i = 0; i < list.length; i++) {
        temp.val = list[i]
        temp.next = (i !== len - 1) ? { ...initListNode } : null
        temp = temp.next
    }
    return result
}

// convert.spec.ts
test("toLinkedList", () => {
    expect(toLinkedList([])).toEqual(null)
    expect(toLinkedList([3, 2, 6])).toEqual({ val: 3, next: { val: 2, next: { val: 6, next: null } } })
    expect(toLinkedList([3, 1, 2, 4])).toEqual({ val: 3, next: { val: 1, next: { val: 2, next: { val: 4, next: null } } } })
})

```

### Jest 使用

Jest 的具体使用可以去看文档，但我们只需要用到几个常用的 api 即可，`toBe` 和 `toEqual` 在对应基本类型时无区别，如果函数返回的是引用类型，那么就只能使用 `toEqual` 了，这意味着 `toEqual` 适用所有情况，`not` 表示不等于，当你需要验证实际结果与预期结果不一致时就可以使用

```typescript
// https://leetcode-cn.com/problems/trapping-rain-water/
import trap from "../42";

test("42", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6)
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).not.toBe(5)
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).not.toEqual(5)
})
```

使用 `yarn test` 来测试代码是否正确，但通常我会使用 `yarn test file_name`，因为 `yarn test` 会测试 tests 文件夹下所有的代码是否正确，而我们通常只需要测试一小部分。对于测试用例的编写，一般只需要通过题目的示例，你就可以放心的提交了，如果不通过的话，分析原因，改正，把错误的用例添加进去

###尾声

目前还有一点不满意的地方是生成二叉树的函数实现过于复杂，性能也不太行，文章发表在这里，也希望得到大佬的指点，后续会集成 Benchmark 模块，欢迎大家讨论！！！
