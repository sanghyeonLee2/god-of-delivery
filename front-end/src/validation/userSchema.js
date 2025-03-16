import * as yup from "yup"
import {getApi} from "../apis/api/user";

export const signUpValid = yup.object({
    userId: yup.string()
        .required("아이디를 입력해주세요.")
        .min(2, "2자 이상 입력해주세요.")
        .max(8, "8자 이하 입력해주세요.")
        .test("requiredCheck", "아이디가 이미 존재합니다",
            ((value) => {
                if (value) {
                    //return getApi(`/auth/sign-up/check-id/${value}`)
                    return getApi("check-id")
                }
            }))
    ,
    userPw: yup.string()
        .required("비밀번호를 입력해주세요.")
        .min(8, "8자 이상 입력해주세요.")
        .max(20, "20자 이하 입력해주세요."),
    pwCheck: yup.string()
        .required("비밀번호를 한번 더 입력해주세요.")
        .oneOf([yup.ref("userPw"), null], "비밀번호가 일치하지 않습니다."),
})

export const signInValid = yup.object({
        userId: yup.string()
            .required("아이디을 입력해주세요.")
            .min(2, "2자 이상 입력해주세요.")
            .max(8, "8자 이하 입력해주세요."),
        userPw: yup.string()
            .required("비밀번호를 입력해주세요.")
            .min(8, "8자 이상 입력해주세요.")
            .max(20, "20자 이하 입력해주세요."),
    }
)
export const addressValid = yup.object({
        detailAddress: yup.string()
            .required("상세주소를 입력해주세요.")
            .max(20, "20자 이하 입력해주세요."),
    }
)