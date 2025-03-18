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
        const {userId, role, address} = await UserService.findById(req)
        res.status(200).send({
            userId, role, address
        })
    }
    catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

exports.patchUserAddress = async (req, res) => {
    try{
        const updateUser = await UserService.updateUserAddress(req)
        if(updateUser > 0){
            res.status(200).send({
                status: 200,
                message: "Success"
            })
        }
        else{
            res.status(400).send({
                status: 400,
                message: "데이터를 못 찾았거나 변경사항이 없습니다."
            })
        }
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
