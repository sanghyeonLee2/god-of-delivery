import { showError } from "./toasts";
import { API_URLS } from "@constants/urls";
import { saveErrorToSession } from "./storage";
import { ERROR_MESSAGES } from "@constants/messages";

export const errorHandler = (error) => {
  if (!error.response) {
    return showError(ERROR_MESSAGES.NETWORK);
  }

  const { status } = error;

  if (error.config.url === API_URLS.AUTH.SIGN_IN && status === 404) {
    return showError(ERROR_MESSAGES.AUTH_NOT_FOUND);
  }

  if (error.config.url === API_URLS.USER.REISSUE && status === 401) {
    localStorage.clear();
    return showError(ERROR_MESSAGES.TOKEN_EXPIRED);
  }

  if (error.config.url === API_URLS.USER.REISSUE && status === 403) {
    localStorage.clear();
    return showError(ERROR_MESSAGES.TOKEN_INVALID);
  }

  if (status >= 500) {
    saveErrorToSession(status, ERROR_MESSAGES.SERVER_ERROR);
    return (window.location.href = "/error");
  }

  switch (status) {
    case 400:
      return showError(ERROR_MESSAGES.BAD_REQUEST);
    case 401:
      saveErrorToSession(status, ERROR_MESSAGES.UNAUTHORIZED);
      return (window.location.href = "/login");
    case 403:
      saveErrorToSession(status, ERROR_MESSAGES.FORBIDDEN);
      return (window.location.href = "/error");
    case 404:
      saveErrorToSession(status, ERROR_MESSAGES.NOT_FOUND);
      return (window.location.href = "/error");
    case 409:
      return showError(ERROR_MESSAGES.CONFLICT);
    default:
      saveErrorToSession(status, ERROR_MESSAGES.UNKNOWN);
      return (window.location.href = "/error");
  }
};
