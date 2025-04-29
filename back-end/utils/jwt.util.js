require("dotenv").config();
const jwt = require("jsonwebtoken");
const TokenService = require("../services/token.service");

/**
 * AccessToken 생성 함수
 * */
exports.generateToken = () => {
  return {
    access: (userId, role) => {
      return jwt.sign(
        { id: userId, role: role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30 days" },
      );
    },
    refresh: (userId, role) => {
      return jwt.sign(
        { id: userId, role: role },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "180 days" },
      );
    },
  };
};

exports.verifyToken = () => {
  return {
    access: (token) => {
      try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return {
          verified: true,
          userId: decoded.id,
          role: decoded.role,
        };
      } catch (err) {
        return {
          verified: false,
          message: err.message,
        };
      }
    },
    refresh: async (token, userId) => {
      const record = await TokenService.findById(userId);
      if (!record || !record.token) {
        throw new Error("Refresh Token이 존재하지 않음");
      }
      if (token !== record.token) {
        throw new Error("Refresh Token 불일치");
      }
      try {
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
      } catch (err) {
        throw new Error(`Refresh Token 만료 또는 검증 실패 : ${err.message}`);
      }
    },
  };
};
