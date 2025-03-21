const UserService = require("../services/user.service");
const TokenService = require("../services/token.service");
const { generateToken, verifyToken } = require("../utils/jwt.util");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
/**
 * 회원가입 DB INSERT USER 함수
 * @param req
 * @param res
 * */
exports.postSignUp = async (req, res) => {
  try {
    const { userPw, pwCheck } = req.body;
    if (userPw !== pwCheck) {
      return res.status(400).send({
        status: 400,
        message: "패스워드와 패스워드 확인이 동일하지 않습니다.",
      });
    }
    await UserService.createUser(req.body);
    res.status(201).send({
      status: 201,
      message: "회원가입 되셨습니다.",
    });
  } catch (err) {
    if (err instanceof Sequelize.UniqueConstraintError) {
      return res.status(400).send({
        status: 400,
        message: "이미 존재하는 아이디입니다.",
      });
    }
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

/* === 로그인 Controller === */
exports.postSignIn = async (req, res) => {
  try {
    const user = await UserService.findByIdnPw(req.body);
    const token = await TokenService.findById(req.body);
    if (user && token) {
      res.status(200).send({
        status: 200,
        message: "Success",
      });
    } else if (user) {
      const accessToken = generateToken().access(user.userId, user.role);
      const refreshToken = generateToken().refresh(user.userId, user.role);
      await TokenService.createToken(user.userId, refreshToken);
      res.status(201).send({
        status: 201,
        message: "Success",
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } else {
      res.status(403).send({
        status: 403,
        message: "Not Found",
      });
    }
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
};

exports.getRefreshReissued = async (req, res) => {
  const { accessToken, refreshToken } = req.body;

  if (!accessToken || !refreshToken) {
    return res.status(403).send({
      status: 403,
      message: "AccessToken, RefreshToken이 Body에 없습니다!",
    });
  }

  try {
    const decoded = jwt.decode(accessToken);
    if (!decoded || !decoded.id || !decoded.role) {
      return res.status(401).json({
        status: 401,
        message: "AccessToken에 유효한 사용자 정보가 없습니다.",
      });
    }
    // 여기서 refresh는 이제 에러를 throw할 수 있음
    await verifyToken().refresh(refreshToken, decoded.id);
    const newAccessToken = generateToken().access(decoded.id, decoded.role);
    res.status(200).send({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).send({
      status: 401,
      message: err.message || "토큰 재발급 중 오류 발생",
    });
  }
};

