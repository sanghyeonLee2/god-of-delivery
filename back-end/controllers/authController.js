const User = require('../models/user');
const Token = require('../models/token');
const {generateToken, verifyToken} = require('../utils/authUtils');
const jwt = require('jsonwebtoken');

/* === 회원가입 Controller === */
/**
 * GET 회원가입 ID 중복 확인 함수
 * @param req
 * @param res
 * */
exports.getCheckId = async (req, res) => {
    console.log(req.params.id);
    try {
        const userExists = await User.findOne({
            where: {
                userId: req.params.id
            }
        })
        if (userExists) {
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
    const date = new Date();
    try {
        await User.create({
            userId: req.body.userId,
            name: req.body.userName,
            password: req.body.userPw,
            phone: req.body.userPhoneNum,
            currentAddress: null,
            createdDate: date,
            modifiedDate: date,
        })
        const user = await User.findOne({
            where: {
                userId: req.body.userId,
            },
            attributes: ['userId', 'password', 'name', 'phone', 'currentAddress', 'grade', 'role'],
        })
        res.status(201).send({
            status: 201,
            message: "회원가입 되셨습니다.",
            data: user
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
    console.log(req.body);
    const user = await User.findOne({
        where: {
            userId: req.body.userId,
            password: req.body.userPw
        },
        attributes: ['userId', 'password', 'name', 'phone', 'currentAddress', 'grade', 'role'],
    })
    if (user) {
        const accessToken = generateToken().access(user.userId)
        const refreshToken = generateToken().refresh(user.userId)

        if(await verifyToken().refresh(refreshToken, user.userId)){
            await Token.update({
                token: refreshToken,
                where:{userId:user.userId}
            })
        }
        else{
            await Token.create({
                userId: user.userId,
                token: refreshToken,
            })
        }

        res.status(200).send({
            status: 200,
            message: "로그인되었습니다.",
            accessToken: accessToken,
            refreshToken: refreshToken,
            data: user
        })
    } else {
        res.status(403).send({
            status: 403,
            message: "ID 또는 PW가 잘못되었거나 해당 ID가 존재하지 않습니다."
        })
    }
}

exports.getRefreshReissued = async (req, res) => {
    console.log(req.headers)
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
            console.log(refreshResult)
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
            message: "Access, Refresh Token이 Header에 없습니다."
        })
    }
}
