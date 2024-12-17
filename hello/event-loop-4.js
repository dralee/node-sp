/*
 * event loop
 * event
 * 2024.12.17 by dralee
 */
var events = require('events');
// 创建eventEmitter
var eventEmitter = new events.EventEmitter()

// 事件处理程序
var connectHandler = function connect(){
	console.log("connect successfully.");
	// 触发data_received事件
	eventEmitter.emit('data_received');
}

// 绑定事件及处理程序
eventEmitter.on('connection', connectHandler);

// 接收数据事件
eventEmitter.on('data_received', () =>{
	console.log("received the data.");
});

// 触发
eventEmitter.emit('connection');

console.log("finish!");
