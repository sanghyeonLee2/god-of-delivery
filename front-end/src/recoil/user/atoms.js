import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";


export const {persistAtom: signInPersist} = recoilPersist({
    key: "is-sign-in",
})
export const {persistAtom: userInfoPersist} = recoilPersist({
    key: "user-info",
})
export const isSignInState = atom({
    key: 'isSignIn',
    default: false,
    effects_UNSTABLE: [signInPersist]
})
export const userInfoState = atom({
    key: 'userInfo',
    default: {
        userId: "",
        currentAddress: null,
        grade: "",
        role: ""
    },
    effects_UNSTABLE: [userInfoPersist]
})