const StoreService = require('../services/store.service');
const UserService = require('../services/user.service');
const Store = require("../models/store");
/**
 * Type에 맞는 store 출력 함수
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getStoresList = async (req, res) => {
    try {
        const {latitude, longitude} = await UserService.findById(req);
        const storeList = await StoreService.getStores(latitude, longitude, req.params, req.query);
        if (storeList.count === null || storeList.count === 0) {
            res.status(401).send({
                status: 401,
                message: "Not Found"
            });
        } else {
            res.status(200).send(storeList)
        }
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

exports.postCreateStore = async (req, res) => {
    try {
        const store = await StoreService.createStore(req.body);
        res.status(201).send({
            status: 201,
            data: store
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

exports.getStore = async (req, res) => {
    try {
        const storeData = await StoreService.findStoreInfo(req.params);
        res.status(200).send(storeData)
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

