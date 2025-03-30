import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useAniTitle from "components/common/HomeBoard/hooks/useAniTitle";
import { TitleFont } from "components/common/HomeBoard/components/HomeAniTitleLayout";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../../../recoil/user/atoms";

const keywordList = ["치킨", "피자", "한식", "야식", "중국집", "햄버거"];
const DEFAULT_ADDRESS = "해운대로 34";

function HomeAniTitle() {
  const index = useAniTitle(keywordList);
  const { address } = useRecoilValue(userInfoState);
  return (
    <div>
      <TitleFont>
        {address || DEFAULT_ADDRESS}에서{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={keywordList[index]}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {keywordList[index]}
          </motion.span>
        </AnimatePresence>
        찾고 계신가요?
      </TitleFont>
    </div>
  );
}

export default HomeAniTitle;
