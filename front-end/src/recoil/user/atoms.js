import {atom} from "recoil";

export const isSigInState = atom({
    key: 'isSigIn',
    default: false
})
export const userInfoState = atom({
    key: 'userInfo',
    default: {userId: "", username: ""}
})