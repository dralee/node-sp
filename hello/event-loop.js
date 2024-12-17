/*
 * event loop
 * setTimeOut,setImmediate
 * 2024.12.17 by dralee
 * Main thread execution 先打印。
setImmediate() 和 setTimeout() 的执行顺序取决于当前事件循环的状态，一般 setImmediate() 会先执行。
 * 宏任务：setTimeout, setInterval，setImmediate，I/O操作等
 * 微任务：process.nextTick，Promise.then
 */
setTimeout(()=>{
	console.log("Timeout callback");
},0);

setImmediate(() =>{
	console.log("Immediate callback");
});

console.log("Main thread execution");
