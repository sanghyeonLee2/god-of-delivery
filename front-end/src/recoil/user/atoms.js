import {atom} from "recoil";

export const isSignInState = atom({
    key: 'isSigIn',
    default: false
})
export const userInfoState = atom({
    key: 'userInfo',
    default: {
        userId: "",
        password: "",
        name: "",
        phone: "",
        currentAddress: null,
        grade: "",
        role: ""
    }
})