const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser); // 🔹 JSON 요청 본문을 파싱하도록 추가

// CORS 설정
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});
server.use((req, res, next) => {
    if (req.path === "/stores/all") {
        const {page, sorting, keyword} = req.query;

        // 기본 정렬 방식 정의
        let sortField = "id";
        let order = "asc";

        if (sorting === "basicAsc") {
            sortField = "name";
            order = "asc";
        } else if (sorting === "basicDesc") {
            sortField = "name";
            order = "desc";
        }

        // ✅ URL 재구성: 기본적으로 `/stores` 엔드포인트로 변경
        let newUrl = `/stores?_page=${page || 1}&_sort=${sortField}&_order=${order}`;

        // ✅ keyword가 있으면 `q` 파라미터 추가 (json-server 기본 검색)
        if (keyword) {
            newUrl += `&q=${encodeURIComponent(keyword)}`;
        }

        req.url = newUrl;
    }

    next();
});

server.post("/signIn", (req, res) => {
    return res.json({
        accessToken: "dummy-access-token",
        refreshToken: "dummy-refresh-token",
    });
});

// 📌 payment-post 엔드포인트 직접 처리 (POST 요청 허용)
server.post("/payment-post", (req, res) => {
    res.status(201).json({
        orderId: 1,
        message: "결제가 완료되었습니다.",
        status: "success"
    });
});

// 📌 커스텀 라우트 적용
const rewriter = jsonServer.rewriter(require("./routes.json"));
server.use(rewriter);
server.use(middlewares);
server.use(router);

server.listen(5000, () => {
    console.log('JSON Server is running on port 5000');
});
