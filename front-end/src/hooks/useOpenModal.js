import { useSetRecoilState } from "recoil";
import { isModalOpenState } from "@recoil/flag/atoms";

const useOpenModal = () => {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  return (modalType, modalData = {}) => setIsModalOpen({ modalType, flag: true, modalData });
};

export default useOpenModal;
