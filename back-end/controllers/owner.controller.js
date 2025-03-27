const {
  findListOwnerReview,
  createCeoReview,
  updateCeoReview,
  deleteCeoReview,
} = require("../services/review.service");
const StoreService = require("../services/store.service");
const MenuService = require("../services/menu.service");

exports.getOwnerStore = async (req, res) => {
  try {
    const storeInfo = await StoreService.findStoreByUserId(req.userId);
    res.status(200).send(storeInfo);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getOwnerReview = async (req, res) => {
  try {
    const reviews = await findListOwnerReview(req);
    res.status(200).send(reviews);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
exports.getOwnerStoreMenus = async (req, res) => {
  try {
    const store = await StoreService.findStoreByUserId(req.userId);
    const menus = await MenuService.findOnlyMenuByStoreId(store.storeId);
    res.status(200).send(menus);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
exports.getOwnerMenu = async (req, res) => {
  try{
    const store = await StoreService.findStoreByUserId(req.userId);
    const menu = await MenuService.findByStoreId(store.storeId);
    res.status(200).send(menu);
  }
  catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    })
  }
}

exports.postOwnerReview = async (req, res) => {
  try {
    const newCeoReview = await createCeoReview(req, req.body);
    if (newCeoReview) {
      res.status(200).send({
        message: "Success",
      });
    }
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.patchOwnerReview = async (req, res) => {
  try {
    if (await updateCeoReview(req)) {
      res.status(200).send({
        message: "Success",
      });
      return;
    }
    res.status(204).send({
      message: "변경점이 없습니다.",
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.deleteOwnerReview = async (req, res) => {
  try {
    const deleted = await deleteCeoReview(req.params);
    if (deleted) {
      res.status(200).send({
        message: "Success",
      });
    } else {
      res.status(400).send({
        message: "Not found",
      });
    }
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.postMenu = async (req, res) => {
  try{
    await MenuService.addMenu(req.body);
    res.status(201).send({
      message: "Success",
    })
  }
  catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    })
  }
}
exports.putMenu = async (req, res) => {
  try{
    await MenuService.updateMenu(req.params.menuId,req.body);
    res.status(200).send({
      message: "Success"
    })
  }
  catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    })
  }
}

exports.deleteMenu = async (req, res) => {
  try{
    await MenuService.deleteMenu(req.params.menuId);
    res.status(200).send({
      message: "Success",
    })
  }
  catch (err){
    res.status(500).send({
      status: 500,
      message: err.message,
    })
  }
}