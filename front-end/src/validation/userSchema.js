import * as yup from "yup"
import {getUserApi} from "../apis/api/user";

export const signUpValid = yup.object({
    nickname: yup.string()
        .required("이름을 입력해주세요.")
        .min(6, "6자 이상 입력해주세요.")
        .max(15, "15자 이하 입력해주세요."),
    userId: yup.string()
        .required("아이디을 입력해주세요.")
        .min(2, "2자 이상 입력해주세요.")
        .max(8, "8자 이하 입력해주세요.")
        .test("requiredCheck", "아이디가 이미 존재합니다",
            ((value) => {
                if (value) {
                    return getUserApi(`/auth/sign-up/check-id/123`)
                }
            }))
    ,
    password: yup.string()
        .required("비밀번호를 입력해주세요.")
        .min(8, "8자 이상 입력해주세요.")
        .max(20, "20자 이하 입력해주세요."),
    passwordCheck: yup.string()
        .required("비밀번호를 한번 더 입력해주세요.")
        .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
    phoneNum: yup.string()
        .required("휴대폰 번호를 입력해주세요.")
})

export const signInValid = yup.object({
        userId: yup.string()
            .required("아이디을 입력해주세요.")
            .min(2, "2자 이상 입력해주세요.")
            .max(8, "8자 이하 입력해주세요."),
        password: yup.string()
            .required("비밀번호를 입력해주세요.")
            .min(8, "8자 이상 입력해주세요.")
            .max(20, "20자 이하 입력해주세요."),
    }
)