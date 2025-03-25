const { Dib, Store, sequelize } = require("../models");
const StoreService = require("./store.service");

exports.findUserDibList = async ({ userId }, { page }) => {
  const pageNum = Number(page);
  const storeListWithDib = await Dib.findAll({
    where: {
      userId,
    },
    limit: 10,
    offset: (pageNum - 1) * 10,
    include: [
      {
        model: Store,
        attributes: [
          "storeId",
          "storeName",
          "storeCategory",
          "storeLogoImage",
          "operationHour",
          "rating",
          "reviewCnt",
          "minDeliveryPrice",
        ],
      },
    ],
  });
  const storeList = storeListWithDib.map((item) => item.Store);
  return storeList;
};

exports.addDib = async ({ userId }, { storeId }) => {
  const t = await sequelize.transaction();
  try{
    await Dib.create({
      userId,
      storeId,
    });
    await StoreService.updateDibCnt(storeId, 1, t);
  }
  catch (err){
    await t.rollback();
    throw err;
  }
};

exports.deleteDib = async ({ userId }, { storeId }) => {
  const t = await sequelize.transaction();
  try{
    const deleteCount = await Dib.destroy({
      where: {
        userId,
        storeId,
      },
    });
    if (deleteCount === 0) {
      new Error("삭제할 데이터가 없습니다");
    }
    await StoreService.updateDibCnt(storeId, 0, t);
  }
  catch (err){
    await t.rollback();
    throw err;
  }
};

exports.isDibByUserId = async (userId, storeId) => {
  const isDip = await Dib.findOne({
    where: { userId, storeId },
  });
  return (isDip);
};
