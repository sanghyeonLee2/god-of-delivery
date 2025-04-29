import * as yup from "yup";

export const signUpValid = yup.object({
  userId: yup
    .string()
    .required("아이디를 입력해주세요.")
    .min(2, "2자 이상 입력해주세요.")
    .max(8, "8자 이하 입력해주세요."),

  userPw: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(6, "6자 이상 입력해주세요.")
    .max(20, "20자 이하 입력해주세요."),
  pwCheck: yup
    .string()
    .required("비밀번호를 한번 더 입력해주세요.")
    .oneOf([yup.ref("userPw"), ""], "비밀번호가 일치하지 않습니다."),
});

export const signInValid = yup.object({
  userId: yup
    .string()
    .required("아이디을 입력해주세요.")
    .min(2, "2자 이상 입력해주세요.")
    .max(8, "8자 이하 입력해주세요."),
  userPw: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(6, "6자 이상 입력해주세요.")
    .max(20, "20자 이하 입력해주세요."),
});
export const addressValid = yup.object({
  detailAddress: yup
    .string()
    .required("상세주소를 입력해주세요.")
    .max(20, "20자 이하 입력해주세요."),
});
