const {Menu, MenuOption, MenuCategory} = require('../models');

exports.findById = async ({menuId}) => {
    const menuData = await Menu.findOne(
        {
            where:{menuId: menuId},
            include: [{
                model: MenuCategory,
                include: MenuOption
            }]
        }
    )
    return (menuData)
}

exports.findByStoreId = async (storeId) => {
    console.log(storeId)
    const menus = await Menu.findAll({
        where:{storeId},
        include: [{model: MenuCategory, include: MenuOption}]
    })
    return (menus)
}