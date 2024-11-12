# 배달의 신 (Delivery God)

배달의 신은 React와 Node.js를 사용하여 개발된 음식 배달 웹 애플리케이션입니다. 이 앱은 사용자가 다양한 음식점 목록을 확인하고, 원하는 메뉴를 주문할 수 있도록 지원합니다.

## 프로젝트 구조

- **Frontend**: React로 구축되어 사용자 인터페이스(UI)를 담당합니다.
- **Backend**: Node.js와 Express를 사용하여 RESTful API를 제공합니다.
- **Database**: MySQL를 이용하여 사용자와 주문 데이터를 관리합니다.

## 주요 기능

1. **음식점 목록 보기** - 사용자는 다양한 음식점 목록을 확인하고, 음식점의 이름, 평점, 최소 주문 금액 등을 확인할 수 있습니다.
2. **메뉴 상세 페이지** - 각 음식점의 메뉴와 세부 정보를 확인할 수 있습니다.
3. **주문 및 결제** - 사용자가 원하는 음식을 주문하고 결제할 수 있는 기능을 제공합니다.
4. **리뷰 시스템** - 사용자가 음식점에 대한 리뷰를 남기고 다른 리뷰를 볼 수 있습니다.
5. **회원 관리** - 로그인, 회원가입, 주문 내역 조회 기능을 지원합니다.

## 기술 스택

- **프론트엔드**: React, React Router, Axios, Redux
- **백엔드**: Node.js, Express, MongoDB
- **배포**: AWS, Docker
- **버전 관리**: Git, GitHub

## 설치 및 실행 방법

### Prerequisites

- Node.js 및 npm 설치가 필요합니다.
- MongoDB가 로컬에 설치되어 있거나 클라우드 데이터베이스 URI가 필요합니다.

### 설치

```bash
# 프로젝트 클론
git clone https://github.com/username/delivery-god.git
cd delivery-god

# 서버 및 클라이언트 패키지 설치
npm install
cd client && npm install
cd ..
