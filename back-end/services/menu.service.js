const {Menu, MenuOption, MenuCategory} = require('../models');

exports.findById = async ({menuId}) => {
    const menuData = await Menu.findOne(
        {
            where:menuId,
            include: [{
                model: MenuCategory,
                include: MenuOption
            }]
        }
    )
    return menuData
}