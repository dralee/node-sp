/*
 * event loop
 * event
 * 2024.12.17 by dralee
 */
var events = require('events');
// 创建eventEmitter
var eventEmitter = new events.EventEmitter();


// 绑定事件及处理程序
// 单次触发后会被移除绑定
eventEmitter.once('init', ()=>{
	console.log('initialization event occurred.');
});

eventEmitter.on('trick', (arg1, arg2)=>{
	console.log("the trick event listener1", arg1, arg2);
});

eventEmitter.on('trick', (arg1, arg2)=>{
	console.log("the trick event listener2", arg1, arg2);
	console.log(`${arg1} ${arg2}!`);
});

eventEmitter.on('error', (err)=>{
	console.error("Error event triggered:", err);
});

// 触发
eventEmitter.emit('init'); // 会触发打印
eventEmitter.emit('init'); // 不会触发打印
eventEmitter.emit('trick', 'hello', 'world');
eventEmitter.emit('error', new Error('something wrong occurred'));

console.log('event listener count of "trick":', events.EventEmitter.listenerCount(eventEmitter, 'trick'));
console.log("finish!");
