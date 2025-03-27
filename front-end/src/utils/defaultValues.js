export const setCartOptions = (menuCategories = []) =>
  menuCategories.reduce((acc, category) => {
    const selectedOptions = (category.MenuOptions || [])
      .filter((option) => option.hasMenu)
      .map((option) => option.menuOptionId);

    if (selectedOptions.length > 0) {
      acc[category.menuCategoryId] = selectedOptions;
    }
    return acc;
  }, {});

export const setMenuOptions = (menuCategories) =>
  menuCategories
    ?.filter(({ isEssential, MenuOptions }) => isEssential && MenuOptions.length > 0)
    .map(({ MenuOptions }) => MenuOptions[0].menuOptionId);
