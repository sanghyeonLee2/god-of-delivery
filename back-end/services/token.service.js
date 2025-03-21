const Token = require("../models/token");

exports.createToken = async (userId, refreshToken) =>
  await Token.create({
    userId: userId,
    token: refreshToken,
  });

exports.updateTokenForRefresh = async (userId, refreshToken) =>
  await Token.update(
    {
      token: refreshToken,
    },
    {
      where: { userId: userId },
    },
  );

exports.findById = async ({ userId }) =>
  await Token.findOne({
    where: { userId },
  });
