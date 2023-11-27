// __dirname __filename 使い方
//path

const fs = require('fs');
const path = require('path');

// ..相対パス内で使用
//console.log(__dirname + '../dist/test.txt');

const distPath = path.resolve(__dirname, '../dist/test.txt');
// 　同じ　const distPath = path.resolve(__dirname, '..', 'dist', 'test.txt');
// 後ろは相対パスで記述

// console.log(distPath);


// fs.writeFileSync('./test.txt', 'hello, node.js');
//fs.writeFileSync(__dirname + '/test.txt', 'hello, node.js');
fs.writeFileSync(distPath, 'hello, node.js');
