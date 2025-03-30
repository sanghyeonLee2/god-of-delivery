import { atom } from "recoil";

export const isModalOpenState = atom({
  key: "isModalOpen",
  default: { modalType: "", flag: false, modalData: null },
});

export const isSearchLoadingState = atom({
  key: "isSearchLoading",
  default: false,
});
