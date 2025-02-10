const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Your database file
const middlewares = jsonServer.defaults();

// Add custom middleware for CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 📌 routes.json 적용 (커스텀 라우팅 설정)
const rewriter = jsonServer.rewriter(require("./routes.json"));
server.use(rewriter);
// Use default middlewares
server.use(middlewares);
server.use(router);

server.listen(5000, () => {
    console.log('JSON Server is running');
});
