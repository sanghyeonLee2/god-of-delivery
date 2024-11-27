import {atom} from "recoil";

export const isModalOpenState = atom({
    key: "isModalOpen",
    default: false
})
export const modalDataState = atom({
    key: "modalData",
    default: null
})