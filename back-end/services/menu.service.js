const { Menu, MenuOption, MenuCategory } = require("../models");
const { sequelize } = require('../models');

exports.findById = async ({ menuId }, transaction) => {
  return await Menu.findOne({
    where: { menuId: menuId },
    include: [
      {
        model: MenuCategory,
        include: MenuOption,
      },
    ],
  }, {transaction});
};

exports.findByStoreId = async (storeId) => {
  console.log(storeId);
  const menus = await Menu.findAll({
    where: { storeId },
    include: [{ model: MenuCategory, include: MenuOption }],
  });
};
