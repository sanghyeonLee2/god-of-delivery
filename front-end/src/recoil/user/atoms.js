import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";


export const {persistAtom: signInPersist} = recoilPersist({
    key: "is-sign-in",
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
        role: "",
    },
})