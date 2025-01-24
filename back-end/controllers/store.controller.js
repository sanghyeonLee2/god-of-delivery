const StoreService = require('../services/store.service');

/**
 * Type에 맞는 store 출력 함수
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getStores = async (req, res) => {
    try {

        if (stores === null || stores.length === 0) {
            res.status(401).send({
                status: 401,
                message: "Not Found"
            });
        } else {
            res.status(200).send({
                status: 200,
                data: stores
            })
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
        console.log(123)
        res.status(201).send({
            status: 201,
            data: store
        })
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

