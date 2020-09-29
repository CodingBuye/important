let ws = new WebSocket("ws://localhost:3000");
ws.onopen = () => {
    console.log("open connection");
}

// 接收服务端发送的消息
ws.onmessage = (event) => {  
    console.log(event);
};
// 指定在关闭后执行的事件
ws.onclose = () => {  
    console.log('close connection');
};
