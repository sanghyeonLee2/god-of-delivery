const { Store, Menu } = require("../models");
const DibService = require("../services/dib.service");
const ReviewService = require("../services/review.service");
const { Op, fn, col, where } = require("sequelize");

exports.getStores = async (
  lat,
  lng,
  { category },
  { page, sorting, keyword },
) => {
  const pageNum = Number(page);
  let sortType;
  switch (sorting) {
    case "ratingDesc":
      sortType = [["rating", "DESC"]]; // 별점 높은 순
      break;
    case "reviewCntDesc":
      sortType = [["reviewCnt", "DESC"]];
      break;
    case "minDeliveryPriceAsc":
      sortType = [["minDeliveryPrice", "ASC"]];
      break;
    default:
      // sortType = [Sequelize.literal("distance ASC")]; // 기본: 가까운 순
      break;
  }
  const searchKeyword = keyword || ""; // 예: "Hello World"
  const categoryName = category || "all"; // 예: "fastFood", or "all"
  const keywordCondition = where(
    fn("REPLACE", fn("LOWER", col("store_name")), " ", ""),
    {
      [Op.like]: `%${searchKeyword.toLowerCase().replace(/\s/g, "")}%`,
    },
  );

  // 카테고리 조건
  const categoryCondition =
    categoryName === "all"
      ? {} // 조건 없음
      : { store_category: categoryName };

  const data = await Store.findAll({
    where: {
      [Op.and]: [keywordCondition, categoryCondition],
    },
    limit: 10,
    offset: (pageNum - 1) * 10,
    attributes: [
      "storeId",
      "storeName",
      "storeCategory",
      "storeLogoImage",
      "operationHour",
      "rating",
      "reviewCnt",
      "minDeliveryPrice",
      // [
      //   Sequelize.literal(
      //     `(6371 * acos(cos(radians(${lat})) * cos(radians(latitude))
      //           * cos(radians(longitude) - radians(${lng}))
      //           + sin(radians(${lat})) * sin(radians(latitude))))`,
      //   ),
      //   "distance",
      // ],
    ], // 거리 계산
    // having: Sequelize.literal("distance <= 5"), // 5km 이내 필터링
    order: sortType,
  });
  return {
    category: category,
    totalItems: data.length,
    storeList: data,
  };
};

exports.createStore = async (storeData) => {
  return await Store.create(storeData);
};

exports.findStoreById = async ({ storeId }) =>
  await Store.findOne({
    where: { storeId: storeId },
  });
exports.findStoreInfo = async ({ storeId }, { userId }) => {
  const storeData = await Store.findOne({
    where: { storeId },
    include: [
      {
        model: Menu,
      },
    ],
  });
  const menuData = Object.values(
    storeData.Menus.reduce((acc, item) => {
      const key = item.category;

      if (!acc[key]) {
        acc[key] = { title: key, menus: [] };
      }
      acc[key].menus.push(item);

      return acc;
    }, {}),
  );
  const isDib = await DibService.isDibByUserId(userId, storeId);
  const ceoRvCnt = await ReviewService.countCeoReview(storeId);
  return {
    storeId: storeData.storeId,
    notice: storeData.notice,
    orderMethod: {
      delivery: {
        minPrice: storeData.minDeliveryPrice,
        deliveryTime: storeData.deliveryTime,
        tips: storeData.deliveryTip,
      },
      takeout: {
        minPrice: storeData.takeoutMinPrice,
        pickUpTime: storeData.takeoutPickupTime,
      },
    },
    storeInfo: {
      businessAddress: storeData.storeAddress,
      ownerName: storeData.owner,
      tradeName: storeData.storeName,
      storeName: storeData.storeName,
      origin: storeData.origin,
      businessNum: storeData.businessNum,
      hours: storeData.operationHour,
      tipsInfo: storeData.deliveryTipsInfo,
      dayOff: storeData.dayOff,
      phoneNumber: storeData.storeNumber,
      area: storeData.area,
      introduction: storeData.introduction,
    },
    storeHeader: {
      ownerReview: ceoRvCnt,
      dibs: storeData.dibs,
      isDib: isDib ? true : false,
      storeName: storeData.storeName,
      rating: Number(storeData.rating),
      reviewCnt: storeData.reviewCnt,
    },
    menuInfo: menuData,
  };
};

exports.updateDibCnt = async (storeId, isPlus, transaction) => {
  if (isPlus) {
    return await Store.increment("dibs", { where: { storeId }, transaction });
  } else {
    return await Store.decrement("dibs", { where: { storeId }, transaction });
  }
};

exports.findStoreByUserId = async (userId) => {
  return await Store.findOne({
    where: { userId },
  });
};

exports.updateStoreByUserId = async (userId, storeData) => {
  console.log(storeData);
  const dataToUpdate = {};

  Object.entries(storeData).forEach(([key, value]) => {
    dataToUpdate[key] = value;
  });

  return Store.update(dataToUpdate, { where: { userId } });
};

exports.updateReviewCnt = async (storeId, isPlus, transaction) => {
  if (isPlus) {
    return await Store.increment("reviewCnt", {
      where: { storeId },
      transaction,
    });
  } else {
    return await Store.decrement("reviewCnt", {
      where: { storeId },
      transaction,
    });
  }
};
