import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";

const useCloseModal = () => {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  return () => setIsModalOpen({ modalType: "", flag: false, modalData: {} });
};

export default useCloseModal;
