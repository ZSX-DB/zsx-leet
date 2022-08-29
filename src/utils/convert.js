"use strict";


var fillTrees = function (trees) {
    const maxPossibleDepth = trees.filter(tree => tree !== null).length
    const wholeTrees = [...trees]
    let max = 0
    for (let i = 0; i < maxPossibleDepth; i++) {
        max += (2 ** i)
    }
    console.log("max", max);
    for (let i = 0; i <  max; i++) {
        console.log("i: ", i);
        if (wholeTrees[i] === null) {
            wholeTrees.splice(2 * i + 1, 0, null, null)
        }
    }
    console.log(maxPossibleDepth, wholeTrees, trees);
    return wholeTrees
};
var hierarchyTrees = function (trees) {
    var _a;
    var hierarchies = [];
    var sliceLen = 1;
    var start = 0;
    while (sliceLen < trees.length) {
        var hierarchy = [];
        for (var i = start; i < start + sliceLen; i++) {
            hierarchy.push((_a = trees[i]) !== null && _a !== void 0 ? _a : null);
        }
        if (hierarchy.every(function (item) {
                return item === null;
            })) {
            break;
        }
        hierarchies.push(hierarchy);
        start += sliceLen;
        sliceLen *= 2;
    }
    return hierarchies.reverse();
};
var toBinaryTree = function (trees) {
    if (trees.length === 0) {
        return null;
    }
    // 填充缺失的 null 节点
    var wholeTrees = fillTrees(trees);
    // 生成自底向上树
    var hierarchies = hierarchyTrees(wholeTrees);
    // 存放节点
    var container = [];
    var _loop_1 = function (i) {
        var hierarchy = hierarchies[i];
        if (i === 0) {
            container.push(hierarchy.map(function (item) {
                return item === null ? null : {
                    val: item,
                    left: null,
                    right: null
                };
            }));
        } else {
            container.push(hierarchy.map(function (item, index) {
                return item === null ? null : {
                    val: item,
                    left: container[i - 1][2 * index],
                    right: container[i - 1][2 * index + 1]
                };
            }));
        }
    };
    console.log(container);
    // 构建树
    for (var i = 0; i < hierarchies.length; i++) {
        _loop_1(i);
    }
    return container[container.length - 1][0];
};


console.log(JSON.stringify(toBinaryTree([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9])));