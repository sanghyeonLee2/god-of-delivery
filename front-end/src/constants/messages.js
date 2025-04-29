export const ERROR_MESSAGES = {
  AUTH_NOT_FOUND: "등록되지 않은 사용자입니다.",
  NETWORK: "네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.",
  TOKEN_EXPIRED: "토큰 만료로 인해 로그아웃 되었습니다.",
  TOKEN_INVALID: "토큰이 유효하지 않습니다.",
  SERVER_ERROR: "서버 오류가 발생했습니다.",
  BAD_REQUEST: "잘못된 요청입니다. 입력값을 확인해주세요.",
  UNAUTHORIZED: "인증이 필요합니다. 로그인 후 이용해주세요.",
  FORBIDDEN: "접근 권한이 없습니다.",
  NOT_FOUND: "요청한 페이지를 찾을 수 없습니다.",
  CONFLICT: "중복된 데이터입니다.",
  UNKNOWN: "알 수 없는 오류가 발생했습니다.",
  ONLY_ONE_STORE_ALLOWED: "한 가게의 메뉴들만 장바구니에 담을 수 있습니다.",
  ADDRESS_REQUIRED: "주소를 먼저 설정해 주세요.",
};

export const SUCCESS_MESSAGES = {
  REVIEW_UPDATED: "리뷰가 수정되었습니다.",
  REVIEW_DELETED: "리뷰가 삭제되었습니다.",
  REVIEW_ADDED: "리뷰가 추가되었습니다.",

  WISHLIST_ADDED: "찜 목록에 추가 되었습니다.",
  WISHLIST_DELETED: "찜 목록에서 삭제 되었습니다.",

  MENU_ADDED: "메뉴 정보를 추가 했습니다.",
  MENU_UPDATED: "메뉴 정보를 수정 했습니다.",
  MENU_DELETED: "메뉴 정보를 삭제 했습니다.",

  STORE_UPDATED: "가게 정보를 수정했습니다.",
  CART_ITEM_DELETED: "장바구니 메뉴가 삭제되었습니다.",
  CART_UPDATED: "장바구니 메뉴가 수정되었습니다.",
  ITEM_ADDED_TO_CART: "장바구니에 담았습니다.",

  ADDRESS_REGISTERED: "주소가 등록 되었습니다.",
  PAYMENT_COMPLETED: "결제가 완료 되었습니다.",

  LOGOUT_SUCCESS: "로그아웃 되었습니다.",
  LOGIN_SUCCESS: "로그인에 성공 했습니다.",
  SIGNUP_SUCCESS: "회원가입에 성공 했습니다.",
};
