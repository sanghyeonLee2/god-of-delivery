const User = require('../models/user');
const Token = require('../models/token');
const {generateToken, verifyToken} = require('../utils/jwt.util');
const jwt = require('jsonwebtoken');
const {isExistUserId, createUser, findByIdnPw} = require("../services/user.service");
const {createToken, updateTokenForRefresh} = require("../services/token.service");

/* === 회원가입 Controller === */
/**
 * GET 회원가입 ID 중복 확인 함수
 * @param req
 * @param res
 * */
exports.getCheckId = async (req, res) => {
    try {
        const {userId} = req.params
        if (await isExistUserId(userId)) {
            res.status(401).send({
                available: false,
                message: "중복된 ID 입니다. 다른 ID를 입력해주세요."
            })
        } else {
            res.status(200).send({
                available: true,
                message: "사용 가능한 ID 입니다."
            })
        }

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}
/**
 * 회원가입 DB INSERT USER 함수
 * @param req
 * @param res
 * */
exports.postSignUp = async (req, res) => {
    try {
        const newUser = createUser(req.body)
        res.status(201).send({
            status: 201,
            message: "회원가입 되셨습니다.",
            data: newUser
        })
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}

/* === 로그인 Controller === */
exports.postSignIn = async (req, res) => {
    const user = findByIdnPw(req.body)
    if (user) {
        const accessToken = generateToken().access(user.userId)
        const refreshToken = generateToken().refresh(user.userId)

        if(await verifyToken().refresh(refreshToken, user.userId)){
            await updateTokenForRefresh(user.userId, refreshToken)
        }
        else{
            await createToken(user.userId,refreshToken)
        }
        res.status(200).send({
            status: 200,
            message: "로그인되었습니다.",
            accessToken: accessToken,
            refreshToken: refreshToken,
        })
    } else {
        res.status(403).send({
            status: 403,
            message: "ID 또는 PW가 잘못되었거나 해당 ID가 존재하지 않습니다."
        })
    }
}

exports.getRefreshReissued = async (req, res) => {
    if (req.headers.authorization !== null && req.headers.refreshToken !== null) {
        const authToken = req.headers.authorization.split('Bearer ')[1];
        const refreshToken = req.headers.refreshToken;

        const authResult = verifyToken().access(authToken);
        const decoded = jwt.decode(authToken)

        if (decoded === null) {
            res.status(401).send({
                status: 401,
                message: "권한이 없습니다. ##"
            })
        }

        const refreshResult = verifyToken().refresh(refreshToken, decoded.id)

        if (authResult.verified === false && authResult.message === 'jwt expired') {
            if (!refreshResult) {
                res.status(401).send({
                    status: 401,
                    message: "권한이 없습니다. %%"
                })
            } else {
                const newAccessToken = generateToken().access(decoded.userId)

                res.status(200).send({
                    status: 200,
                    message: "AccessToken 발급",
                    accessToken: newAccessToken,
                    refreshToken: refreshToken,
                })
            }
        } else {
            res.status(400).send({
                status: 400,
                message: "AccessToken이 만료되지 않았습니다."
            })
        }
    } else {
        res.status(403).send({
            status: 403,
            message: "Access, RefreshToken이 Header에 없습니다."
        })
    }
}

exports.getLatLng = async (req, res) => {
    try{
        const userLocation = findByIdnPw(req.userId)
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

exports.postAddress = async (req, res) => {
    try{
        const userAddress = findByIdnPw(req.userId)
        res.status(200).send({
            lat : userAddress.latitude,
            lng : userAddress.longitude,
            address : userAddress.address,
        })
    }
    catch (err) {
        res.status(500).send({
            status : 500,
            message: err.message
        })
    }
}
