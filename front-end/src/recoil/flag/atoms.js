import {atom} from "recoil";

export const isModalOpenState = atom({
    key: "isModalOpen",
    default: {modalType: "", flag: false, modalData: null},
})