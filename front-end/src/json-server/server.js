const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // ✅ JSON Server의 데이터베이스
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser); // 🔹 JSON 요청 본문을 파싱하도록 추가

// ✅ CORS 설정을 맨 위에서 적용
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // ✅ 모든 도메인에서 요청 허용
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true"); // ✅ 추가: 쿠키나 인증 정보를 포함하는 요청 허용

    if (req.method === "OPTIONS") {
        return res.sendStatus(200); // ✅ OPTIONS 요청에 200 응답 (프리플라이트 해결)
    }
    next();
});

// ✅ `/auth/sign-in/reissue` 요청이 오면 401 Unauthorized 반환
server.post("/auth/sign-in/reissue", (req, res) => {
    // ✅ 새로운 액세스 토큰 & 리프레시 토큰 생성 (더미 데이터)
    const newAccessToken = "new-access-token-123456";
    const newRefreshToken = "new-refresh-token-789012";

    return res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
    });
});

let attemptCount = 0; // ✅ 요청 횟수 추적 변수

server.post("/test", (req, res) => {
    attemptCount++; // ✅ 요청이 올 때마다 카운트 증가

    if (attemptCount % 2 === 0) {
        // ✅ 짝수 번째 요청: 401 Unauthorized 반환
        return res.status(401).json({message: "Unauthorized: 인증이 필요합니다."});
    }

    // ✅ 홀수 번째 요청: 200 OK 반환
    return res.status(200).json({message: "✅ 인증 성공: 정상 응답"});
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

// 📌 커스텀 라우트 적용 (routes.json이 존재할 경우)
const rewriter = jsonServer.rewriter(require("./routes.json"));
server.use(rewriter);

// ✅ JSON Server 기본 미들웨어 적용 (static 파일 서빙, logging 등)
server.use(middlewares);
server.use(router);

// ✅ 서버 실행
server.listen(5000, () => {
    console.log("🚀 JSON Server is running on http://localhost:5000");
});
