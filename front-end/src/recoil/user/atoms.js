import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export const { persistAtom: signInPersist } = recoilPersist({
  key: "sign-in-persist",
});
export const isSignInState = atom({
  key: "isSignIn",
  default: false,
  effects_UNSTABLE: [signInPersist],
});

/*const getStoredAddress = () => {
  const storedAddress = sessionStorage.getItem("address");
  return storedAddress ? JSON.parse(storedAddress) : null;
};*/

export const userInfoState = atom({
  key: "userInfo",
  default: {
    userId: "",
    address: null,
    role: null,
  },
  /* effects: [
     ({ onSet }) => {
       onSet((newValue) => {
         if (newValue?.address) {
           sessionStorage.setItem("address", JSON.stringify(newValue.address));
         }
       });
     },
   ],*/
});
export const userRoleState = selector({
  key: "userRole",
  get: ({ get }) => {
    const userInfo = get(userInfoState);
    return userInfo.role;
  },
});
export const userAddressState = selector({
  key: "userAddress",
  get: ({ get }) => {
    const userInfo = get(userInfoState);
    return userInfo.address;
  },
});
