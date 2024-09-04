const Dib = require('../models/Dib');
const User = require('../models/User');
const Store = require('../models/Store');

exports.getDibStoreList = async(req, res) => {
    try{
        const findDibs = await Dib.findAll({
            where:{
                userId: req.params.userId
            },
            attributes:['storeId']
        })
        res.status(200).send({
            status: 200,
            data: findDibs
        })
    }catch(err){
        res.status(400).send({
            status: 400,
            message: err.message
        })
    }
}

exports.postDibFilled = async (req, res) => {
    try{
        const dibData = await Dib.create({
            userId: req.body.userId,
            storeId: req.body.storeId,
        })
        res.status(200).send({
            status: 200,
            filled: true,
            data: dibData
        })
    }
    catch(err){
        res.status(400).send({
            status: 400,
            filled:false,
            message: err.message,
        })
    }
}
exports.postDibCancel = async (req,res) => {
    try{
        await Dib.destroy({
            where:{
                userId: req.body.userId,
                storeId: req.body.storeId,
            }
        })
        res.status(200).send({
            status: 200,
            filled:false,
        })
    }
    catch (err){
        res.status(400).send({
            status: 400,
            message: err.message,
        })
    }
}