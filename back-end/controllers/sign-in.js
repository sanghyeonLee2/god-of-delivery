const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log(req.body)
    try{
        const user = await User.findOne({
            where:{
                userId: req.body.userId,
                password: req.body.userPw
            }
        })
        if(user){
            res.status(200).send({
                status: 201,
                message: "Success",
                data: user
            })
        }
        else{
            res.status(401).send({
                status:401,
                message: "Not Found"
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

module.exports = router;