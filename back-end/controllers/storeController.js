const Store = require('../models/store');
const {Op} = require('sequelize');

/**
 * Type에 맞는 store 출력 함수
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getStores = async (req, res) => {
    try {
        const stores = await Store.findAll({
            where: {
                address: {
                    [Op.and]:[
                        {[Op.startsWith]:req.params.city},
                        {[Op.substring]: req.params.district}
                    ]
                },
                category: {[Op.substring]:req.params.category}
            },
        })
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