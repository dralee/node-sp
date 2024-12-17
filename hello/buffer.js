/*
 * node js buffer
 * 2024.12.17 by dralee
 * Node.js 目前支持的字符编码包括：
 *  ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
 *  utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
 *  utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
 *  ucs2 - utf16le 的别名。
 *  base64 - Base64 编码。
 *  latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
 *  binary - latin1 的别名。
 *  hex - 将每个字节编码为两个十六进制字符。
 */
const buf = Buffer.from('hello world', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

// len:10, fill 0
const buf1 = Buffer.alloc(10);
// len 10 fill with 0x1
const buf2 = Buffer.alloc(10, 1);

// len 10, not initialized, need to fill() or wirte(),posible old data
const buf3 = Buffer.allocUnsafe(10);

// [0x1,0x2,0x3]
const buf4 = Buffer.from([1,2,3]);

// UTF-8[0x74,0xc3,0xa9,0x73,] Buffer
const buf5 = Buffer.from('Испытания');

// 
const buf6 = Buffer.from('Испытания', 'latin1');

console.log("=======================");
console.log(buf1.toString('hex'));
console.log(buf2.toString('hex'));
console.log(buf3.toString('hex'));
console.log(buf4.toString('hex'));
console.log(buf5.toString('hex'));
console.log(buf6.toString('hex'));


