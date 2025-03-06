const UserService = require("../services/user.service");
const OrderService = require("../services/order.service");

exports.getLatLng = async (req, res) => {
    try{
        const userLocation = await UserService.findById(req)
        res.status(200).send({
            lat : userLocation.latitude,
            lng : userLocation.longitude
        })
    }
    catch (err) {
        res.status(500).send({
            status : 500,
            message: err.message
        })
    }
}

exports.getUserInfo = async (req, res) => {
    try{
        const user = await UserService.findById(req)
        res.status(200).send(user)
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

exports.getAddress = async (req, res) => {
    try{
        const userAddress = await UserService.findById(req)
        res.status(200).send({
            lat : userAddress.latitude,
            lng : userAddress.longitude,
            address : userAddress.address,
        })
    }
    catch (err) {
        res.status(500).send({
            status : 500,
            message: err.message
        })
    }
}

exports.getUserOrders = async (req, res) => {
    try{
        const userOrderList = await OrderService.findUserOrder(req, req.query)
        res.status(200).send({
            page: Number(req.query.page),
            totalItems: userOrderList.length,
            userOrderList})
    }
    catch (err) {
        res.status(500).send({
            status : 500,
            message: err.message
        })
    }
}
