/*
 * read the file demo
 * using async/await
 * 2024.12.17 by dralee
 */
const fs = require("fs").promises


async function readFiles(){
	try{
		const data1 = await fs.readFile('source1.txt', 'utf8');
		const data2 = await fs.readFile('source2.txt', 'utf8');
		const data3 = await fs.readFile('source3.txt', 'utf8');

		console.log("all the file content:", data1,data2,data3);
	}catch(err){
		console.error('Error to read:', err);
	}
}

readFiles();
