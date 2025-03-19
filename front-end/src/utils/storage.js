export const saveErrorToSession = (status, message) => {
    sessionStorage.setItem("errorData", JSON.stringify({status, message}));
};