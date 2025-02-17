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

// 세션 스토리지에서 address 값을 불러오는 함수
const getStoredAddress = () => {
    const storedAddress = sessionStorage.getItem("address");
    return storedAddress ? JSON.parse(storedAddress) : null;
};

// userInfo 상태 정의
export const userInfoState = atom({
    key: "userInfo",
    default: {
        userId: "",
        address: getStoredAddress(), // address만 세션 스토리지에서 불러오기
        role: "",
    },
    effects: [
        ({onSet}) => {
            onSet((newValue) => {
                sessionStorage.setItem("address", JSON.stringify(newValue.address)); // address 값만 세션 스토리지에 저장
            });
        },
    ],
});
