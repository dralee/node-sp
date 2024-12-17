/*
 * read the file demo
 * using promises for async
 * 2024.12.17 by dralee
 */
const fs = require("fs").promises

fs.readFile("source1.txt", 'utf8')
    .then(data1 => {
        console.log("read file1:", data1);
        return fs.readFile("source2.txt", 'utf8');
    })
    .then(data2 => {
        console.log("read file2:", data2);
        return fs.readFile("source3.txt", 'utf8');
    })
    .then(data3 => { console.log("read file3:", data3); })
    .catch(err => { console.error("Error for reading file:", err); });
