const express = require("express");
const { middleVerifyTokenIsOwner } = require("../middlewares/auth.middleware");
const {
  getOwnerStore,
  postOwnerReview,
  getOwnerReview,
  deleteOwnerReview,
  getOwnerStoreMenus,
  postMenu,
  putMenu,
  deleteMenu,
  getOwnerMenu,
  patchOwnerStore,
} = require("../controllers/owner.controller");

const router = express.Router();

router.get("/me/store", [middleVerifyTokenIsOwner], getOwnerStore);
router.patch("/me/store", [middleVerifyTokenIsOwner], patchOwnerStore);

router.get("/me/reviews", [middleVerifyTokenIsOwner], getOwnerReview);
router.get("/me/menus", [middleVerifyTokenIsOwner], getOwnerStoreMenus);
router.post("/me/reviews", [middleVerifyTokenIsOwner], postOwnerReview);

router.delete(
  "/me/reviews/:reviewId",
  [middleVerifyTokenIsOwner],
  deleteOwnerReview,
);

router.get("/me/menus/:menuId", [middleVerifyTokenIsOwner], getOwnerMenu);
router.post("/me/menus", [middleVerifyTokenIsOwner], postMenu);
router.put("/me/menus/:menuId", [middleVerifyTokenIsOwner], putMenu);
router.delete("/me/menus/:menuId", [middleVerifyTokenIsOwner], deleteMenu);

module.exports = router;
