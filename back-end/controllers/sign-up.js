const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/check-id', async (req, res) => {
    // console.log(req.query.userId);
    try{
        const tempUser = await User.findOne({
            where:{
                userId: req.query.userId
            }
        })
        if(tempUser){
            res.status(401).send({
                available: false,
                message: "중복된 ID 입니다. 다른 ID를 입력해주세요."
            })
        }
        else{
            res.status(200).send({
                available: true,
                message: "사용 가능한 ID 입니다."
            })
        }

    }
    catch(err){
        res.status(500).send({
            status:500,
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    const date = new Date();
    try{
        await User.create({
            userId: req.body.userId,
            name: req.body.userName,
            password: req.body.userPw,
            phone: req.body.userPhoneNum,
            currentAddress:null,
            createdDate: date,
            modifiedDate: date,
        })
        const user = await User.findOne({
            where:{
                userId: req.body.userId,
            },
            attributes:['userId','password','name','phone','currentAddress','grade','role'],
        })
        res.status(201).send({
            status: 201,
            message: "Success",
            data: user
        })
    }
    catch (err){
        res.status(500).send({
            status:500,
            message: err.message
        })
    }

})

module.exports = router;