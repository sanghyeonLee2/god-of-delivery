import {atom} from "recoil";

export const sortingState = atom({
    key: "sorting",
    default: "storeId"
})