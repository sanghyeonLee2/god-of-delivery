import { showError } from "./toasts";
import { API_URLS } from "@constants/urls";
import { saveErrorToSession } from "./storage";

export const errorHandler = (error) => {
  if (!error.response) {
    return showError("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요");
  }
  const { status } = error;
  if (error.config.url === API_URLS.USER.REISSUE && status === 401) {
    localStorage.clear();
    return showError("토큰 만료로 인해 로그아웃 되었습니다");
  }
  if (error.config.url === API_URLS.USER.REISSUE && status === 403) {
    localStorage.clear();
    return showError("토큰이 유효하지 않습니다");
  }
  if (status >= 500) {
    saveErrorToSession(status, "서버 오류가 발생했습니다.");
    return (window.location.href = "/error");
  }
  switch (status) {
    case 400:
      return showError("잘못된 요청입니다. 입력값을 확인해주세요.");
    case 401:
      saveErrorToSession(status, "인증이 필요합니다. 로그인 후 이용해주세요.");
      return (window.location.href = "/login");
    case 403:
      saveErrorToSession(status, "접근 권한이 없습니다.");
      return (window.location.href = "/error");
    case 404:
      saveErrorToSession(status, "요청한 페이지를 찾을 수 없습니다.");
      return (window.location.href = "/error");
    case 409:
      return showError("중복된 데이터입니다.");
    case 422:
      return showError("한 가게만 장바구니에 담을 수 있습니다");
    default:
      saveErrorToSession(status, "알 수 없는 오류가 발생했습니다.");
      return (window.location.href = "/error");
  }
};
