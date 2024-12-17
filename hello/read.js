/*
 * read the file demo
 * 2024.12.17 by dralee
 */
var fs = require("fs")

fs.readFile("source.txt", function(err,data){
	if(err) return console.error(err);
	console.log("result:"+data.toString());
});
