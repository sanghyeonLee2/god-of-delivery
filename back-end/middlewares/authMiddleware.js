const jwtUtil = require("../utils/authUtils");
const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
    console.log(req.headers);
    if(req.headers.authorization) {
        const token = req.headers.authorization.split('Bearer ')[1];
        const result = jwtUtil.verifyToken().access(token)
        if(result.verified){
            req.userId = result.userId
            next()
        }
        else{
            res.status(401).send({
                verified: false,
                message: result.message
            })
        }
    }
}

