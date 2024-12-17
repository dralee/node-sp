/*
 * event loop
 * event
 * 2024.12.17 by dralee
 */
var events = require('events');
// 创建eventEmitter
var eventEmitter = new events.EventEmitter();

// 监听器
var listener1 = function listener1(){
	console.log('listener1 execute.')
};

var listener2 = function listener2(){
	console.log('listener2 execute.')
};

// 绑定事件及处理程序
eventEmitter.once('init', ()=>{
	console.log('initialization event occurred.');
});
eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);

var listeners = eventEmitter.listenerCount('connection');
console.log('connection has '+listeners+' event listener')

// 触发
eventEmitter.emit('init'); // 会触发打印
eventEmitter.emit('connection');

// 移除listener1
eventEmitter.removeListener('connection', listener1);
console.log('listener1 not listen to connection')

eventEmitter.emit('connection');

listeners = eventEmitter.listenerCount('connection');
console.log('connection has '+listeners+' event listener')

console.log("finish!");
