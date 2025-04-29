const { Menu, MenuOption, MenuCategory, Store } = require("../models");
const { sequelize } = require("../models");

exports.findById = async ({ menuId }, transaction) => {
  return await Menu.findOne(
    {
      where: { menuId: menuId },
      include: [
        {
          model: MenuCategory,
          include: MenuOption,
        },
      ],
    },
    { transaction },
  );
};

exports.findByStoreId = async (menuId) => {
  return await Menu.findOne({
    where: { menuId },
    include: [{ model: MenuCategory, include: MenuOption }],
  });
};
exports.findOnlyMenuByStoreId = async (storeId) => {
  return await Menu.findAll({
    where: { storeId },
  });
};

exports.addMenu = async (userId, body) => {
  const t = await sequelize.transaction();
  try {
    const store = await Store.findOne({
      where: { userId },
      transaction: t,
    });

    const menu = await Menu.create(
      {
        storeId: store.storeId,
        category: body.category,
        name: body.name,
        price: body.price,
        description: body.description,
        imgUrl: body.imgUrl,
      },
      { transaction: t },
    );

    for (const categoryData of body.MenuCategories) {
      const category = await MenuCategory.create(
        {
          menuId: menu.menuId,
          title: categoryData.title,
          isEssential: categoryData.isEssential,
          maxQuantity: categoryData.maxQuantity,
        },
        { transaction: t },
      );

      const menuCategoryId = category.getDataValue("menuCategoryId");

      for (const optionData of categoryData.MenuOptions) {
        await MenuOption.create(
          {
            menuId: menu.menuId,
            menuCategoryId: menuCategoryId,
            content: optionData.content,
            price: optionData.price,
          },
          { transaction: t },
        );
      }
    }

    await t.commit();
    return menu;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

exports.updateMenu = async (menuId, menuData) => {
  const t = await sequelize.transaction();
  try {
    await Menu.update(
      {
        store_id: menuData.storeId,
        category: menuData.category,
        name: menuData.name,
        price: menuData.price,
        description: menuData.description,
        img_url: menuData.imgUrl,
      },
      {
        where: { menuId },
        transaction: t,
      },
    );

    // 2. 기존 카테고리/옵션 가져오기
    const existingCategories = await MenuCategory.findAll({
      where: { menuId },
      include: [MenuOption],
      transaction: t,
    });

    const existingCategoryIds = existingCategories.map(
      (cat) => cat.menuCategoryId,
    );
    const incomingCategoryIds = menuData.MenuCategories.filter(
      (cat) => cat.menuCategoryId,
    ).map((cat) => cat.menuCategoryId);

    // 3. 삭제할 카테고리 및 옵션 제거
    const toDeleteCategoryIds = existingCategoryIds.filter(
      (id) => !incomingCategoryIds.includes(id),
    );
    await MenuOption.destroy({
      where: { menuCategoryId: toDeleteCategoryIds },
      transaction: t,
    });
    await MenuCategory.destroy({
      where: { menuCategoryId: toDeleteCategoryIds },
      transaction: t,
    });

    // 4. 카테고리와 옵션 처리
    for (const cat of menuData.MenuCategories) {
      let category;
      if (cat.menuCategoryId) {
        // 수정
        await MenuCategory.update(
          {
            title: cat.title,
            isEssential: cat.isEssential,
            maxQuantity: cat.maxQuantity,
          },
          {
            where: { menuCategoryId: cat.menuCategoryId },
            transaction: t,
          },
        );
        category = { menuCategoryId: cat.menuCategoryId };
        // 기존 옵션 삭제 후 재삽입
        await MenuOption.destroy({
          where: { menuCategoryId: cat.menuCategoryId },
          transaction: t,
        });
      } else {
        // 새로 생성
        category = await MenuCategory.create(
          {
            menuId: menuId,
            title: cat.title,
            isEssential: cat.isEssential,
            maxQuantity: cat.maxQuantity,
          },
          { transaction: t },
        );
      }

      // 옵션 생성
      for (const option of cat.MenuOptions) {
        await MenuOption.create(
          {
            menuId: menuId,
            menuCategoryId: category.menuCategoryId,
            content: option.content,
            price: option.price,
          },
          { transaction: t },
        );
      }
    }

    await t.commit();
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

exports.deleteMenu = async (menuId) => {
  return await Menu.destroy({
    where: { menuId },
  });
};
