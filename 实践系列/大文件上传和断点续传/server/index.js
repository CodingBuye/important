const http = require('http');
const server = http.createServer();

server.on("request", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if(req.method === "OPTIONS") {
        res.status = 200;
        res.end();
        return;
    }
});

server.listen(3000, () => {
    console.log(`访问：http://localhost:3000`);
});
