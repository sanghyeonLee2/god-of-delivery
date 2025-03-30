export const setCartOptions = (menuCategories = []) =>
  menuCategories.reduce((acc, category) => {
    acc[category.menuCategoryId] = (category.MenuOptions || [])
      .filter((option) => option.hasMenu)
      .map((option) => option.menuOptionId);
    return acc;
  }, {});

export const setMenuOptions = (menuCategories) =>
  menuCategories
    ?.filter(({ isEssential, MenuOptions }) => isEssential && MenuOptions.length > 0)
    .map(({ MenuOptions }) => MenuOptions[0].menuOptionId);
