require('dotenv').config()
const jwt = require('jsonwebtoken')
const {findById} = require("../services/token.service");


/**
 * AccessToken 생성 함수
 * */
exports.generateToken = () => {

    return {
        access: (userId, role) => {
            return jwt.sign(
                {id:userId, role: role},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "30 days"}
            )
        },
        refresh: (userId, role) => {
            return jwt.sign(
                {id:userId, role: role},
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
                    role: decoded.role,
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
                const data = await findById(userId)
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