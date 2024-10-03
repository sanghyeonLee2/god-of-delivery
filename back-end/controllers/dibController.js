const Dib = require('../models/dib');
const User = require('../models/user');
const Store = require('../models/store');
const {Sequelize} = require("sequelize");

exports.getDibsWithStore = async (req, res) => {
    try{
        const StoreListWithDib = await Dib.findAll({
            where:{
                userId: req.params.userId
            },
            include: [{model:Store}],
        })
        res.status(200).send({
            status: 200,
            data: StoreListWithDib
        });
    }
    catch (err){
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }

}

exports.getDibsListByUser = async (req, res) => {
    try{
        const dibsList = await Dib.findAll({
            where:{userId:req.params.userId}
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

exports.postDibFilled = async (req, res) => {
    const date = new Date();
    try {
        const dibData = await Dib.create({
            userId: req.body.userId,
            storeId: req.body.storeId,
            createdDate: date,
            modifiedDate: date
        })
        await Store.update(
            {
                dibsCount: Sequelize.literal('dibs_count + 1'),
            },
            {
                where: {storeId: req.body.storeId,},
            }
        );
        const storeData = await Store.findOne({
            where:{storeId:req.body.storeId}
        })
        res.status(201).send({
            status: 201,
            filled: true,
            storeData: storeData,
            dibData: dibData,
        })
    } catch (err) {
        res.status(400).send({
            status: 400,
            filled: false,
            message: err.message,
        })
    }
}
exports.postDibCancel = async (req, res) => {
    try {
        await Dib.destroy({
            where: {
                userId: req.body.userId,
                storeId: req.body.storeId,
            }
        })
        await Store.update({
            dibsCount: Sequelize.literal('dibs_count - 1'),},{
            where: {
                storeId: req.body.storeId,
            }
        })
        const storeData = await Store.findOne({
            where:{storeId:req.body.storeId}
        })
        res.status(200).send({
            status: 200,
            filled: false,
            storeData: storeData,
        })
    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message,
        })
    }
}