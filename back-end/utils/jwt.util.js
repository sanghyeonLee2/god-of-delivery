require('dotenv').config()
const jwt = require('jsonwebtoken')
const {findById} = require("../services/token.service");


/**
 * AccessToken 생성 함수
 * */
exports.generateToken = () => {

    return {
        access: (userId) => {
            return jwt.sign(
                {id:userId},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "7 days"}
            )
        },
        refresh: (userId) => {
            return jwt.sign(
                {id:userId},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: "180 days"}
            )
        }
    }
}

exports.verifyToken = () => {
    return {
        access: (token)=>{
            try{
                const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
                return {
                    verified:true,
                    userId: decoded.id,
                }
            }
            catch (err){
                return {
                    verified:false,
                    message: err.message
                }
            }
        },
        refresh: async (token, userId) =>{
            try{
                const data = findById(userId)
                if(token === data.token){
                    try{
                        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
                        return true
                    }catch (err){
                        return false
                    }
                }
                else{
                    return false
                }
            }
            catch(err){
                return false
            }
        }
    }
}