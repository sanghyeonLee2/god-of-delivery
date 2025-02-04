import {atom} from "recoil";

export const isModalOpenState = atom({
    key: "isModalOpen",
    default: {modalType: null, modalFlag: false, modalIdData: null},
})