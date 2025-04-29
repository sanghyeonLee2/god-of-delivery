const { Review, CeoReview } = require("../models");
const { sequelize } = require("../models");
const StoreService = require("./store.service");

exports.findReviewsByStoreId = async ({ storeId }, { page }) => {
  const pageNum = Number(page);
  const data = await Review.findAll({
    where: { storeId },
    offset: (pageNum - 1) * 10,
    limit: 10,
    include: [{ model: CeoReview }],
  });

  return {
    totalItems: data.length,
    reviewList: data,
  };
};

exports.createReview = async ({ userId, body }) => {
  const t = await sequelize.transaction();
  try {
    const createData = await Review.create(
      {
        userId,
        storeId: body.storeId,
        orderId: body.orderId,
        rating: body.rating,
        content: body.content,
        img: body.img,
      },
      { transaction: t },
    );
    await StoreService.updateReviewCnt(body.storeId, 1, t);

    await t.commit();
    return createData;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

exports.findReviewsByUserId = async ({ userId, query }) => {
  const { page } = query;
  const pageNum = Number(page);

  const { count, rows: reviews } = await Review.findAndCountAll({
    where: { userId: userId },
    offset: (pageNum - 1) * 10,
    limit: 10,
    include: [{ model: CeoReview }],
  });

  const countReviews = await Review.findAll({
    attributes: [[sequelize.fn("COUNT", sequelize.col("rating")), "count"]],
    where: { userId, rating: [1, 2, 3, 4, 5] },
    group: ["rating"],
    order: [["rating", "ASC"]],
  });

  const countList = countReviews.map((item) => item.dataValues.count);

  return {
    totalItems: count,
    reviewStat: countList,
    reviewList: reviews,
  };
};

exports.updateReview = async ({ userId, body, params }) => {
  const { reviewId } = params;
  return Review.update(body, {
    where: { reviewId: reviewId, userId: userId },
  });
};

exports.deleteReview = async ({ userId, params }) => {
  const { reviewId } = params;
  console.log(reviewId);

  const t = await sequelize.transaction(); // ✅ 수정: await 추가

  try {
    const { storeId } = await Review.findOne({
      where: { reviewId },
      transaction: t,
    });

    await Review.destroy({
      where: { userId: userId, reviewId: reviewId },
      transaction: t,
    });

    await StoreService.updateReviewCnt(storeId, t);

    await t.commit();
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

exports.findListOwnerReview = async ({ userId, query }) => {
  const store = await StoreService.findStoreByUserId(userId);
  const pageNum = Number(query.page);

  const { count, rows } = await Review.findAndCountAll({
    where: { storeId: store.storeId },
    offset: (pageNum - 1) * 10,
    limit: 10,
    include: [{ model: CeoReview }],
  });

  return {
    totalItems: count,
    reviewList: rows,
  };
};

exports.createCeoReview = async ({ userId }, { reviewId, content }) => {
  return await CeoReview.create({
    content,
    userId,
    reviewId,
  });
};

exports.deleteCeoReview = async ({ reviewId }) => {
  return await CeoReview.destroy({
    where: { ceoReviewId: reviewId },
  });
};

exports.countCeoReview = async (storeId) => {
  const countCR = await Review.findAll({
    where: { storeId },
    include: [{ model: CeoReview }],
  });
  return countCR.reduce((acc, item) => {
    if (item.CeoReview) {
      acc++;
    }
    return acc;
  }, 0);
};
