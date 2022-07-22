"use strict";

const fs = require('fs')
const infos = process.argv.slice(2)

if (infos.length === 0) {
    throw new Error("You must input the serial number")
}

// 文件序号
const serialNum = infos[0]

// 测试文件模板
const testTemplate = `import fn from '../${serialNum}';

test("${serialNum}", () => {
    expect(fn()).toBe()
})
`

const createFiles = () => {
    // 生成基本文件
    fs.writeFile(`./src/${serialNum}.ts`, '', (error) => {
        if (error) {
            throw error
        }
    })

    // 生成测试文件
    fs.writeFile(`./src/tests/${serialNum}.spec.ts`, testTemplate, (error) => {
        if (error) {
            throw error
        }
    })
}

// 判断文件是否存在，并作对应的处理
fs.access(`./src/${serialNum}.ts`, (error) => {
    if (error) /** 文件不存在 */ {
        createFiles()
    } else /** 文件存在 */ {
        throw new Error("The file already exists")
    }
})
