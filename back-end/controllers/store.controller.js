const StoreService = require("../services/store.service");
const UserService = require("../services/user.service");
/**
 * Type에 맞는 store 출력 함수
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getStoresList = async (req, res) => {
  try {
    const { latitude, longitude, address } = await UserService.findById(req);
    if (!latitude || !longitude || !address) {
      return res.status(422).send({
        message: "위도 경도 주소 값이 없습니다.",
      });
    }

    const storeList = await StoreService.getStores(
      latitude,
      longitude,
      req.params,
      req.query,
    );

    if (!storeList.storeList || storeList.storeList.length === 0) {
      return res.status(200).send({
        totalItems: 0,
        storeList: [],
      });
    }

    res.status(200).send(storeList);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.postCreateStore = async (req, res) => {
  try {
    const store = await StoreService.createStore(req.body);
    res.status(201).send({
      status: 201,
      data: store,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getStore = async (req, res) => {
  try {
    const storeData = await StoreService.findStoreInfo(req.params, req);
    res.status(200).send(storeData);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};
