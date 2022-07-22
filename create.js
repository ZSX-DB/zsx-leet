"use strict";

const fs = require('fs')
const infos = process.argv.slice(2)

if (infos.length === 0) {
    throw new Error("You must input the serial number")
}

const serialNum = infos[0]

// 生成基本文件
fs.writeFile(`./src/${serialNum}.ts`, '', (error) => {
    if (error) {
        throw error
    }
})

// 生成测试文件
const testTemplate = `import fn from '../${serialNum}';

test("${serialNum}", () => {
    expect(fn()).toBe()
})
`

fs.writeFile(`./src/tests/${serialNum}.spec.ts`, testTemplate, (error) => {
    if (error) {
        throw error
    }
})
