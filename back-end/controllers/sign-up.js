const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.route('/sign-up')
    .post(async (req, res) => {
    try{
        const tempUser = await User.findOne({
            where:{
                userId: req.body.userId
            }
        })
        if(tempUser){
            res.status(500).send({
                status:500,
                message: "중복된 아이디입니다."
            })
        }
        else{
            const user = await User.create({
                userId: req.body.userId,
                name: req.body.userName,
                password: req.body.userPw,
                phone: req.body.userPhoneNum,
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