/*
 * event loop
 * event
 * 2024.12.17 by dralee
 */
var events = require('events');
// 创建eventEmitter
var eventEmitter = new events.EventEmitter()

// 绑定事件及处理程序
eventEmitter.on('hello', ()=>{
	console.log("event emit the hello event: Hello world!");
});

// 触发
eventEmitter.emit('hello');
