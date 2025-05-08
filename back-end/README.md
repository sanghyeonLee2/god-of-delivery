# 배달의 신 - Backend

## 📚 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [기술 스택](#기술-스택)
3. [폴더 구조](#폴더-구조)
4. [주요 기능](#주요-기능)
5. [API 문서](#api-문서)
6. [데이터베이스 스키마](#데이터베이스-스키마)
7. [배포 아키텍처](#배포-아키텍처)
8. [기술적 회고 및 트러블슈팅](#기술적-회고-및-트러블슈팅)
9. [프로젝트 회고](#프로젝트-회고)

---

## 프로젝트 소개

> ### 🚀 배포 URL
> [https://dv19wj9tllwf5.cloudfront.net](https://dv19wj9tllwf5.cloudfront.net)

본 디렉토리는 **배달의 신(God of Delivery)** 프로젝트의 백엔드 코드 및 설정을 포함하고 있습니다.  
이 프로젝트는 **사용자가 웹 상에서 배달 서비스를 자연스럽고 직관적으로 이용할 수 있도록 지원하는 Node.js 기반 RESTful API 서버**입니다.

본 프로젝트는 **2인 협업 프로젝트**로 진행되었으며,  
프론트엔드는 UI 및 사용자 흐름 설계, 상태 및 인증 처리, API 연동을 중심으로,  
백엔드는 RESTful API 설계, DB 모델링 및 서버 배포를 중심으로 역할을 분담하여 개발하였습니다.  
API 명세 협의 및 응답 포맷 조율, GitHub 기반 협업 경험을 통해 실무와 유사한 개발 흐름을 경험했습니다.

### 디렉토리별 README 안내

본 프로젝트는 프론트엔드(front-end)와 백엔드(back-end)가 분리되어 있으며,  
각 디렉토리별로 세부 기술 스택, 구조, 실행 방법 등이 작성된 **READ.ME**가 존재합니다.

- 🔗 **루트 개요 및 실행 가이드**: [README.md](../README.md)
- 🔗 **백엔드 README (현재 문서)**: [back-end/README.md](../back-end/README.md)
- 🔗 **프론트엔드 README**: [front-end/README.md](./README.md)

> ⚙️ 프로젝트 실행 방법은 루트 디렉토리의 [README.md](../README.md)에서 확인할 수 있습니다.
---

## 기술 스택

| 분류            | 기술                                |
|---------------|-----------------------------------|
| **런타임**       | Node.js                           |
| **프레임워크**     | Express                           |
| **ORM**        | Sequelize                         |
| **데이터베이스**    | MySQL                             |
| **인증/보안**     | JWT                               |
| **환경변수 관리**   | dotenv                            |
| **비동기 처리**     | async/await (Promise)             |
| **로그 관리**     | morgan                            |
| **에러 처리**     | custom error handler (middleware) |
| **버전 관리**     | Git, GitHub                       |
| **배포 인프라**    | Railway                           |

---

## 폴더 구조

```
back-end
├── README.md                  # 백엔드 설명 문서
├── app.js                     # Express 앱 진입점
├── config                     # 설정 파일 디렉토리
│   ├── category.js            # 카테고리 관련 상수/설정
│   ├── config.js              # 환경변수 및 공통 설정
│   └── sorting.js             # 정렬 관련 유틸리티
├── controllers                # 요청 처리 로직
│   ├── auth.controller.js     # 인증 관련 컨트롤러
│   ├── cart.controller.js     # 장바구니 관련 컨트롤러
│   ├── dib.controller.js      # 찜하기 관련 컨트롤러
│   ├── menu.controller.js     # 메뉴 관련 컨트롤러
│   ├── order.controller.js    # 주문 관련 컨트롤러
│   ├── owner.controller.js    # 사장님 관련 컨트롤러
│   ├── review.controller.js   # 리뷰 관련 컨트롤러
│   ├── store.controller.js    # 매장 관련 컨트롤러
│   └── user.controller.js     # 사용자 관련 컨트롤러
├── eslint.config.mjs          # ESLint 설정 파일
├── middlewares                # 미들웨어 디렉토리
│   ├── auth.middleware.js     # 인증 미들웨어
│   └── errorHandle.middleware.js # 에러 핸들링 미들웨어
├── models                     # Sequelize 모델 정의
│   ├── cart.js                # Cart 테이블 모델
│   ├── cartItem.js            # CartItem 테이블 모델
│   ├── cartItemOption.js      # CartItemOption 테이블 모델
│   ├── ceoReview.js           # CeoReview 테이블 모델
│   ├── dib.js                 # 찜 테이블 모델
│   ├── index.js               # 모델 초기화
│   ├── menu.js                # Menu 테이블 모델
│   ├── menuCategory.js        # MenuCategory 테이블 모델
│   ├── menuOption.js          # MenuOption 테이블 모델
│   ├── order.js               # Order 테이블 모델
│   ├── orderItem.js           # OrderItem 테이블 모델
│   ├── orderItemOption.js     # OrderItemOption 테이블 모델
│   ├── review.js              # Review 테이블 모델
│   ├── store.js               # Store 테이블 모델
│   ├── token.js               # Token 테이블 모델
│   └── user.js                # User 테이블 모델
├── package-lock.json          # 의존성 잠금 파일
├── package.json               # 프로젝트 의존성 및 메타정보
├── routes                     # API 라우터 정의
│   ├── auth.routes.js         # 인증 API 라우터
│   ├── cart.routes.js         # 장바구니 API 라우터
│   ├── dib.routes.js          # 찜하기 API 라우터
│   ├── index.routes.js        # 루트 API 라우터
│   ├── menu.routes.js         # 메뉴 API 라우터
│   ├── order.routes.js        # 주문 API 라우터
│   ├── owner.routes.js        # 사장님 API 라우터
│   ├── review.routes.js       # 리뷰 API 라우터
│   ├── store.routes.js        # 매장 API 라우터
│   └── user.routes.js         # 사용자 API 라우터
├── services                   # 비즈니스 로직 서비스
│   ├── cart.service.js        # 장바구니 서비스
│   ├── dib.service.js         # 찜 서비스
│   ├── menu.service.js        # 메뉴 서비스
│   ├── order.service.js       # 주문 서비스
│   ├── review.service.js      # 리뷰 서비스
│   ├── store.service.js       # 매장 서비스
│   ├── token.service.js       # 토큰 서비스
│   └── user.service.js        # 사용자 서비스
├── utils                      # 유틸리티 함수
│   └── jwt.util.js            # JWT 관련 유틸리티
└── views                      # 서버 사이드 렌더링 뷰
    ├── error.ejs              # 에러 페이지 뷰
    └── index.ejs              # 메인 페이지 뷰
```
---
## 주요 기능

### 사용자 기능
- 회원가입 및 로그인
    - 사용자 계정 생성 및 로그인
    - JWT 토큰 발급 및 인증 미들웨어를 통한 보호된 라우트 접근
- 매장 및 메뉴 조회
    - 매장 정보 및 메뉴 리스트 조회 API
- 장바구니 관리
    - 장바구니 담기, 수정, 삭제, 조회 기능
    - 옵션 선택 포함한 복합 장바구니 항목 지원
- 찜하기
    - 매장 또는 메뉴 찜하기
    - 찜 목록 조회 및 찜 취소
- 주문 관리
    - 장바구니 → 주문 생성 프로세스
    - 주문 상세 내역 및 주문 목록 조회
- 리뷰 작성
    - 주문 완료 후 리뷰 작성

###  사장님(Owner) 기능
- 매장 관리
    - 매장 등록, 수정, 삭제
- 메뉴 관리
    - 메뉴(Category, Option 포함) 생성, 수정, 삭제
- 주문 관리
    - 주문 상태 변경 (예: 접수 → 준비 중 → 배달 중 → 완료)
- 리뷰 관리
    - 사용자 리뷰에 대한 답글(CeoReview) 작성
    - 리뷰 목록 및 상세 조회

### 공통 기능
- JWT 인증 기반 보호 라우트
    - 인증이 필요한 요청에 대해 JWT 기반 사용자 인증 검증
- 토큰 재발급
    - access token 만료 시 refresh token 기반 토큰 재발급
- 에러 및 예외 처리
    - 전역 에러 핸들러 미들웨어를 통한 일관된 에러 응답 제공
- API 라우터 분리
    - 기능별로 API 라우터를 모듈화하여 RESTful API 방식 제공
---
## API 문서
### 📝 인증 (Auth)

| 메서드 | 엔드포인트       | 설명                   | 인증 필요 |
|---------|----------------|---------------------|----------|
| POST    | /auth/sign-up   | 회원가입              | ❌       |
| POST    | /auth/sign-in   | 로그인                | ❌       |
| POST    | /auth/reissue   | 토큰 재발급           | ❌       |

---

### 📝 사용자 (User)

| 메서드 | 엔드포인트            | 설명               | 인증 필요 |
|---------|---------------------|----------------|----------|
| GET     | /user/me             | 내 정보 조회         | ✅       |
| GET     | /user/me/location    | 내 위치 조회         | ✅       |
| PATCH   | /user/me/address     | 내 주소 변경         | ✅       |
| GET     | /user/me/reviews     | 내 리뷰 목록 조회     | ✅       |
| GET     | /user/me/orders      | 내 주문 내역 조회     | ✅       |
| GET     | /user/me/dibs        | 내 찜 목록 조회       | ✅       |

---

### 📝 매장 (Store)

| 메서드 | 엔드포인트                 | 설명                 | 인증 필요 |
|---------|--------------------------|--------------------|----------|
| GET     | /store/:category          | 카테고리별 매장 리스트 조회 | ✅       |
| POST    | /store/create             | 매장 생성               | ✅       |
| GET     | /store/info/:storeId      | 매장 상세 정보 조회       | ✅       |
| GET     | /store/:storeId/reviews   | 매장 리뷰 리스트 조회     | ❌       |

---

### 📝 메뉴 (Menu)

| 메서드 | 엔드포인트        | 설명         | 인증 필요 |
|---------|----------------|------------|----------|
| GET     | /menu/:menuId   | 메뉴 상세 조회   | ❌       |

---

### 📝 장바구니 (Cart)

| 메서드 | 엔드포인트           | 설명                     | 인증 필요 |
|---------|--------------------|----------------------|----------|
| POST    | /cart               | 장바구니 추가               | ✅       |
| GET     | /cart               | 내 장바구니 조회             | ✅       |
| GET     | /cart/:menuId       | 장바구니 메뉴 상세 조회        | ✅       |
| PUT     | /cart/:cartItemId   | 장바구니 항목 수정            | ✅       |
| DELETE  | /cart/:cartId       | 장바구니 삭제               | ✅       |
| DELETE  | /cart/item/:cartItemId | 장바구니 항목 삭제          | ✅       |

---

### 📝 주문 (Order)

| 메서드 | 엔드포인트        | 설명           | 인증 필요 |
|---------|----------------|--------------|----------|
| POST    | /order          | 주문 생성         | ✅       |
| GET     | /order/:orderId | 주문 상세 조회      | ✅       |

---

### 📝 리뷰 (Review)

| 메서드 | 엔드포인트        | 설명            | 인증 필요 |
|---------|----------------|---------------|----------|
| POST    | /review         | 리뷰 작성          | ✅       |
| PATCH   | /review/:reviewId | 리뷰 수정          | ✅       |
| DELETE  | /review/:reviewId | 리뷰 삭제          | ✅       |

---

### 📝 찜하기 (Dib)

| 메서드 | 엔드포인트             | 설명              | 인증 필요 |
|---------|----------------------|----------------|----------|
| GET     | /dib/storeList        | 내 찜 매장 리스트 조회  | ✅       |
| POST    | /dib                   | 매장 찜하기          | ✅       |
| DELETE  | /dib/:storeId          | 찜 취소            | ✅       |

---

### 📝 사장님 (Owner)

| 메서드 | 엔드포인트                     | 설명                   | 인증 필요 |
|---------|------------------------------|--------------------|----------|
| GET     | /owner/me/store              | 사장님 매장 정보 조회       | ✅ (Owner) |
| PATCH   | /owner/me/store              | 사장님 매장 정보 수정       | ✅ (Owner) |
| GET     | /owner/me/menus              | 사장님 메뉴 리스트 조회     | ✅ (Owner) |
| POST    | /owner/me/menus              | 메뉴 등록                | ✅ (Owner) |
| GET     | /owner/me/menus/:menuId      | 메뉴 상세 조회            | ✅ (Owner) |
| PUT     | /owner/me/menus/:menuId      | 메뉴 수정                | ✅ (Owner) |
| DELETE  | /owner/me/menus/:menuId      | 메뉴 삭제                | ✅ (Owner) |
| GET     | /owner/me/reviews            | 사장님 리뷰 목록 조회      | ✅ (Owner) |
| POST    | /owner/me/reviews            | 사장님 답글 작성          | ✅ (Owner) |
| DELETE  | /owner/me/reviews/:reviewId  | 사장님 답글 삭제          | ✅ (Owner) |

---

### 📝 기본 엔드포인트 (Index)

| 메서드 | 엔드포인트 | 설명       | 인증 필요 |
|---------|----------|----------|----------|
| GET     | /         | 접속 확인   | ❌       |
---
## 데이터베이스 스키마
### 🗄️ Carts 테이블

| 컬럼명   | 타입      | 제약조건             | 설명             |
|----------|-----------|--------------------|----------------|
| cartId    | BIGINT    | PK, AUTO_INCREMENT | 장바구니 ID     |
| storeId   | BIGINT    | FK (Store.storeId) | 매장 ID        |
| userId    | BIGINT    | FK (User.userId)   | 사용자 ID      |
| createdAt | DATETIME  |                    | 생성일자        |
| updatedAt | DATETIME  |                    | 수정일자        |

---

### 🗄️ CartItems 테이블

| 컬럼명     | 타입      | 제약조건             | 설명             |
|------------|-----------|--------------------|----------------|
| cartItemId  | BIGINT    | PK, AUTO_INCREMENT | 장바구니 항목 ID |
| quantity    | BIGINT    | NOT NULL, 기본값=1 | 수량             |
| cartId      | BIGINT    | FK (Carts.cartId)  | 장바구니 ID      |
| menuId      | BIGINT    | FK (Menu.menuId)   | 메뉴 ID         |
| createdAt   | DATETIME  |                    | 생성일자        |
| updatedAt   | DATETIME  |                    | 수정일자        |

---

### 🗄️ CartItemOptions 테이블

| 컬럼명         | 타입      | 제약조건                 | 설명              |
|----------------|-----------|------------------------|-----------------|
| cartItemOptionId | BIGINT    | PK, AUTO_INCREMENT     | 장바구니 옵션 ID  |
| cartItemId      | BIGINT    | FK (CartItems.cartItemId) | 장바구니 항목 ID |
| menuOptionId    | BIGINT    | FK (MenuOption.menuOptionId) | 메뉴 옵션 ID    |
| createdAt       | DATETIME  |                        | 생성일자         |
| updatedAt       | DATETIME  |                        | 수정일자         |

---

### 🗄️ CeoReviews 테이블

| 컬럼명      | 타입      | 제약조건             | 설명              |
|-------------|-----------|--------------------|-----------------|
| ceoReviewId  | BIGINT    | PK, AUTO_INCREMENT | 사장님 리뷰 ID    |
| content      | STRING    |                    | 답글 내용         |
| reviewId     | BIGINT    | FK (Review.reviewId) | 사용자 리뷰 ID   |
| userId       | BIGINT    | FK (User.userId)   | 작성자(사장님) ID |
| createdAt    | DATETIME  |                    | 생성일자         |
| updatedAt    | DATETIME  |                    | 수정일자         |

---

### 🗄️ Dibs 테이블

| 컬럼명  | 타입      | 제약조건           | 설명        |
|---------|-----------|------------------|------------|
| userId   | STRING    | PK               | 사용자 ID   |
| storeId  | BIGINT    | PK               | 매장 ID     |
| createdAt| DATETIME  |                  | 생성일자    |
| updatedAt| DATETIME  |                  | 수정일자    |

---

### 🗄️ Menus 테이블

| 컬럼명     | 타입        | 제약조건             | 설명        |
|------------|-------------|--------------------|------------|
| menuId      | BIGINT      | PK, AUTO_INCREMENT | 메뉴 ID     |
| category    | STRING(100) | NOT NULL           | 메뉴 카테고리 |
| name        | STRING      | NOT NULL           | 메뉴 이름    |
| price       | INTEGER     | NOT NULL           | 메뉴 가격    |
| description | STRING      |                    | 설명        |
| imgUrl      | STRING      |                    | 이미지 URL   |
| storeId     | BIGINT      | FK (Store.storeId) | 매장 ID     |
| createdAt   | DATETIME    |                    | 생성일자    |
| updatedAt   | DATETIME    |                    | 수정일자    |

---

### 🗄️ MenuCategories 테이블

| 컬럼명        | 타입      | 제약조건             | 설명           |
|---------------|-----------|--------------------|---------------|
| menuCategoryId  | BIGINT    | PK, AUTO_INCREMENT | 메뉴 카테고리 ID |
| title          | STRING(20)| NOT NULL           | 카테고리 제목   |
| isEssential    | BOOLEAN   | NOT NULL           | 필수 여부       |
| maxQuantity    | BIGINT    |                    | 최대 선택 가능 수 |
| menuId         | BIGINT    | FK (Menu.menuId)   | 메뉴 ID        |
| createdAt      | DATETIME  |                    | 생성일자       |
| updatedAt      | DATETIME  |                    | 수정일자       |

---

### 🗄️ MenuOptions 테이블

| 컬럼명       | 타입      | 제약조건             | 설명           |
|--------------|-----------|--------------------|---------------|
| menuOptionId   | BIGINT    | PK, AUTO_INCREMENT | 메뉴 옵션 ID    |
| content       | STRING(20)| NOT NULL           | 옵션 내용       |
| price         | BIGINT    | NOT NULL           | 옵션 가격       |
| menuCategoryId| BIGINT    | FK (MenuCategory.menuCategoryId) | 메뉴 카테고리 ID |
| createdAt     | DATETIME  |                    | 생성일자       |
| updatedAt     | DATETIME  |                    | 수정일자       |

---

### 🗄️ Orders 테이블

| 컬럼명         | 타입        | 제약조건             | 설명            |
|----------------|-------------|--------------------|----------------|
| orderId         | BIGINT      | PK, AUTO_INCREMENT | 주문 ID         |
| paymentMethod   | STRING      | NOT NULL           | 결제 방식       |
| totalPrice      | INTEGER     | NOT NULL           | 총 결제 금액     |
| requests        | STRING      |                    | 요청사항        |
| addressSnapshot | STRING      | NOT NULL           | 주소 스냅샷     |
| detailAddress   | STRING      | NOT NULL           | 상세 주소       |
| contact         | STRING      | NOT NULL           | 연락처          |
| type            | STRING      | NOT NULL           | 주문 유형       |
| status          | ENUM        | DEFAULT '주문 완료'| 주문 상태       |
| storeId         | BIGINT      | FK (Store.storeId) | 매장 ID        |
| userId          | BIGINT      | FK (User.userId)   | 사용자 ID       |
| createdAt       | DATETIME    |                    | 생성일자        |
| updatedAt       | DATETIME    |                    | 수정일자        |

---
## 데이터베이스 스키마 (추가)

### 🗄️ OrderItems 테이블

| 컬럼명           | 타입      | 제약조건             | 설명               |
|------------------|-----------|--------------------|------------------|
| orderItemId       | BIGINT    | PK, AUTO_INCREMENT | 주문 항목 ID       |
| menuNameSnapshot  | STRING    | NOT NULL           | 주문 당시 메뉴명    |
| menuPriceSnapshot | BIGINT    | NOT NULL           | 주문 당시 메뉴 가격 |
| quantity          | INTEGER   | NOT NULL           | 수량               |
| orderId           | BIGINT    | FK (Orders.orderId)| 주문 ID            |
| menuId            | BIGINT    | FK (Menu.menuId)   | 메뉴 ID            |
| createdAt         | DATETIME  |                    | 생성일자           |
| updatedAt         | DATETIME  |                    | 수정일자           |

---

### 🗄️ OrderItemOptions 테이블

| 컬럼명              | 타입      | 제약조건             | 설명                 |
|--------------------|-----------|--------------------|--------------------|
| orderItemOptionId    | BIGINT    | PK, AUTO_INCREMENT | 주문 항목 옵션 ID     |
| optionNameSnapshot   | STRING    | NOT NULL           | 주문 당시 옵션명      |
| optionPriceSnapshot  | INTEGER   | NOT NULL           | 주문 당시 옵션 가격   |
| orderItemId          | BIGINT    | FK (OrderItems.orderItemId) | 주문 항목 ID |
| menuOptionId         | BIGINT    | FK (MenuOptions.menuOptionId) | 메뉴 옵션 ID |
| createdAt            | DATETIME  |                    | 생성일자             |
| updatedAt            | DATETIME  |                    | 수정일자             |

---

### 🗄️ Reviews 테이블

| 컬럼명   | 타입      | 제약조건             | 설명            |
|----------|-----------|--------------------|----------------|
| reviewId  | BIGINT    | PK, AUTO_INCREMENT | 리뷰 ID         |
| rating    | INTEGER   | NOT NULL           | 평점            |
| content   | STRING    |                    | 리뷰 내용        |
| img       | TEXT      |                    | 리뷰 이미지 URL  |
| storeId   | BIGINT    | FK (Store.storeId) | 매장 ID         |
| userId    | BIGINT    | FK (User.userId)   | 사용자 ID       |
| orderId   | BIGINT    | FK (Orders.orderId)| 주문 ID         |
| createdAt | DATETIME  |                    | 생성일자        |
| updatedAt | DATETIME  |                    | 수정일자        |

---

### 🗄️ Stores 테이블

| 컬럼명            | 타입         | 제약조건             | 설명                 |
|-------------------|--------------|--------------------|--------------------|
| storeId            | BIGINT       | PK, AUTO_INCREMENT | 매장 ID              |
| storeName          | STRING       |                    | 매장 이름             |
| storeCategory      | STRING(100)  | NOT NULL           | 매장 카테고리         |
| storeAddress       | STRING(45)   | NOT NULL           | 매장 주소             |
| storeLogoImage     | TEXT         |                    | 매장 로고 이미지       |
| latitude           | FLOAT(9,6)   | NOT NULL           | 위도                  |
| longitude          | FLOAT(9,6)   | NOT NULL           | 경도                  |
| operationHour      | STRING(45)   |                    | 영업 시간              |
| dayOff             | STRING(45)   |                    | 휴무일                |
| storeNumber        | STRING(45)   |                    | 매장 전화번호          |
| area               | STRING(45)   |                    | 지역                  |
| introduction       | STRING(45)   |                    | 매장 소개             |
| deliveryTipInfo    | STRING(45)   |                    | 배달팁 안내           |
| owner              | STRING(45)   |                    | 사장님 이름           |
| businessNum        | STRING(45)   |                    | 사업자 등록번호         |
| origin             | STRING(45)   |                    | 원산지 정보            |
| takeoutMinPrice    | STRING(20)   |                    | 최소 포장 주문 금액     |
| takeoutDiscount    | INTEGER      |                    | 포장 할인 금액          |
| takeoutPickupTime  | INTEGER      |                    | 포장 소요 시간          |
| takeoutPayment     | STRING(45)   |                    | 포장 결제 방식          |
| deliveryTime       | INTEGER      | NOT NULL           | 배달 소요 시간          |
| minDeliveryPrice   | INTEGER      | NOT NULL           | 최소 배달 주문 금액      |
| deliveryTip        | INTEGER      | DEFAULT 0          | 배달팁                 |
| deliveryPayment    | STRING(45)   |                    | 배달 결제 방식          |
| notice             | STRING(45)   |                    | 공지사항               |
| rating             | DECIMAL(2,1) | DEFAULT 0          | 평점                   |
| reviewCnt          | BIGINT       | DEFAULT 0          | 리뷰 수                 |
| dibs               | BIGINT       | DEFAULT 0          | 찜 횟수                 |
| userId             | BIGINT       | FK (User.userId)   | 사장님(사용자) ID       |
| createdAt          | DATETIME     |                    | 생성일자               |
| updatedAt          | DATETIME     |                    | 수정일자               |

---

### 🗄️ Tokens 테이블

| 컬럼명  | 타입      | 제약조건             | 설명         |
|---------|-----------|--------------------|-------------|
| userId   | STRING    | PK, FK (User.userId) | 사용자 ID     |
| token    | STRING    |                    | 리프레시 토큰 |
 
---

### 🗄️ Users 테이블

| 컬럼명   | 타입             | 제약조건             | 설명            |
|----------|------------------|--------------------|----------------|
| userId    | STRING           | PK, NOT NULL       | 사용자 ID        |
| userPw    | STRING           | NOT NULL           | 사용자 비밀번호   |
| role      | ENUM('user','owner') | DEFAULT 'user' | 사용자 권한      |
| address   | STRING           |                    | 주소            |
| latitude  | DECIMAL(17,14)   |                    | 위도            |
| longitude | DECIMAL(17,14)   |                    | 경도            |
| createdAt | DATETIME         |                    | 생성일자        |
| updatedAt | DATETIME         |                    | 수정일자        |
---
## 배포 아키텍처

<div align="center">
  <img src="../assets/architecture.png" width="600" alt="배포 아키텍처 다이어그램"/>
</div>

### 백엔드

- **배포 환경**: Railway (GitHub Fork 저장소 연동)
- **CI/CD 흐름**:
    1. 원본 저장소를 **내 GitHub 레포지토리로 fork**
    2. 내 GitHub 저장소의 `main` 브랜치에 코드 푸시
    3. Railway에서 내 레포지토리와 연동된 상태로 **자동 배포 트리거**
    4. 서버 코드 빌드 및 의존성 설치
    5. 환경변수를 기반으로 애플리케이션 실행
    6. 배포 완료 후 최신 서버 인스턴스 제공
---

## 기술적 회고 및 트러블슈팅

### FK 제약조건 충돌로 인한 DELETE CASCADE 동작 문제
- **문제 상황**
    - 부모 테이블 삭제 시 FK 제약조건 위반 오류 발생
- **원인 분석**
    - Sequelize 관계 설정 시 `onDelete: "CASCADE"` 누락
- **해결 과정**
    - 각 `belongsTo` 관계에 `onDelete: "CASCADE"` 추가
    - DB 테이블 제약조건 확인 (이미 생성된 FK constraint 삭제 후 재생성 필요)

### 배포 시 `.env` 환경변수 누락
- **문제 상황**
    - Railway 배포 후 DB 연결 오류 발생
- **원인 분석**
    - Railway 환경 변수에 `.env` 내용 반영 안 됨
- **해결 과정**
    - Railway Dashboard → `Variables`에 환경변수 수동 등록
---

## 프로젝트 회고
- 개발 과정에서 API 명세 문서화의 중요성을 실감했다.
- RESTful API 설계, DB 모델링, JWT 인증, 배포까지 백엔드 전반을 직접 구현하며 많은 성장을 느꼈습니다.
- 주먹구구식 개발 프로세스는 비효율적이라는 점을 직접 경험했고, 계획보다 일정이 지연되는 경우가 많았다.  
  그래서 미리 체계적으로 계획하고 시작하는 것이 얼마나 중요한지 깨달았다.
