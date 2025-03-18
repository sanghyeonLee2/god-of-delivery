const Dib = require('../models/dib');
const User = require('../models/user');
const Store = require('../models/store');
const DibService = require('../services/dib.service')
const StoreService = require('../services/store.service')
const {Sequelize} = require("sequelize");

exports.getUserDibStoreList = async (req, res) => {
    try{
        const dibList = await DibService.findUserDibList(req)
        res.status(200).send(dibList);
    }
    catch (err){
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }

}

exports.getDibsListByStore = async (req, res) => {
    try{
        const dibsList = await Dib.findAll({
            where:{storeId:req.params.storeId}
        });
        res.status(200).send({
            status:200,
            data: dibsList
        })
    }
    catch (err){
        res.status(400).send({
            status:400,
            message:err.message
        })
    }
}

exports.postAddDib = async (req, res) => {
    try {
        const newDib = await DibService.addDib(req, req.body)

        res.status(201).send({
            message: "Success"
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message,
        })
    }
}
exports.deleteDibCancel = async (req, res) => {
    try {
        const dibCancel = await DibService.deleteDib(req, req.params)
        res.status(200).send({
            message: "Success",
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message,
        })
    }
}