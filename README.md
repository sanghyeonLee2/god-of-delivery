# 배달의 신 (god-of-delivery)

- 본 프로젝트는 **“배달의민족”과 “요기요”의 배달 서비스 모델을 참고하여**, 기획부터 UI/UX 및 백엔드까지 직접 구현한 웹 애플리케이션입니다.
- 상업적 목적 없이 **개인 포트폴리오 및 기술 학습용**으로만 사용됩니다.

---

## 🚀 배포 주소

> https://dv19wj9tllwf5.cloudfront.net/
---

## 👨‍💻 개발 인원 및 역할

| 이름  | 역할                               |
|:----|----------------------------------|
| 이상현 | FE 개발 및 배포, 기획 총괄, 퍼블리싱, API 문서화 |
| 신유성 | BE 개발 및 배포, DB 설계, API 설계 및 문서화  |

---

## 📂 파트별 README

프로젝트는 프론트엔드와 백엔드가 분리되어 있으며, 각 디렉토리별로 세부 내용을 정리한 README가 존재합니다.

### 🌐 프론트엔드

- 🔗 [front-end/README.md](https://github.com/sanghyeonLee2/god-of-delivery/blob/develop/front-end/README.md)
- 기술 스택, 주요 라이브러리, CI/CD 파이프라인, 폴더 구조 등

### ⚙️ 백엔드

- 🔗 [back-end/README.md](https://github.com/sanghyeonLee2/god-of-delivery/blob/develop/back-end/README.md)
- 기술 스택, API 구조, DB 설계, 주요 라이브러리, CI/CD 파이프라인 등

---

## 🧭 프로젝트 개요

- **프로젝트 목적**: 배달 서비스 모델을 기반으로 프론트엔드/백엔드 협업 구조의 웹 애플리케이션 개발
- **주요 기능**
    - 공통: 회원가입, 로그인, 로그아웃
    - 사용자: 가게 조회, 주소 설정, 메뉴 선택, 찜 관련, 리뷰, 장바구니, 주문
    - 사장님: 메뉴 CRUD, 리뷰 CRUD, 가게 정보 수정
- **배포 환경**
    - **프론트엔드**: AWS S3 + CloudFront
    - **백엔드**: Railway (서버 + MySQL 통합 호스팅)

---

## 🎯 프로젝트 목적

본 프로젝트는 실제 배달 서비스인 **배달의 민족**과 **요기요**의 흐름을 벤치마킹하여,  
**프론트엔드와 백엔드를 분리한 협업 기반의 웹 애플리케이션 개발 경험**을 목표로 합니다.

각 파트의 세부 기술 스택 및 구조는 디렉토리별 README에서 확인할 수 있으며,  
아래와 같은 방향성을 중심으로 구현하였습니다:

### 🌐 프론트엔드

- **반응형 UI 구현**을 통해 사용자 경험 최적화
- **컴포넌트 재사용성 및 상태 관리 구조 설계**
- **JWT 기반 인증 흐름 연동 및 토큰 관리**

### ⚙️ 백엔드

- **RESTful API 설계 및 모듈화된 서버 구조 구성**
- **ORM 기반 DB 모델링 및 데이터 흐름 처리**
- **JWT 기반 인증 로직 구현 (access-token / refresh-token)**
---

## 🗺️ 배포 아키텍처

![배포 아키텍처](assets/architecture.png)
> AWS S3 + CloudFront로 정적 리소스를 서빙하고, Railway를 통해 API 서버 및 DB를 통합 배포하는 구조입니다.

---

## 🛠️ 로컬 실행 방법

### 1. 프로젝트 클론

```
git clone https://github.com/sanghyeonLee2/god-of-delivery.git
```

### 2. 백엔드 실행

```
cd back-end
npm install
npm run dev
```

### 3. 프론트엔드 실행

```
cd front-end
npm install
npm start
```

> 각 디렉토리에 .env 파일이 필요하며, 예시 파일 .env.example을 참고해 설정하세요.
> 백엔드는 MySQL DB 연결 정보가 필요하며, 프론트엔드는 Kakao API 키를 별도로 발급받아 입력해야 합니다.
---
