export const setMenuOptions = (menuCategories = []) => {
  const options = [];
  menuCategories
    .filter((e) => e.isEssential)
    .map((e) => options.push(e.menuOptions[0].menuOptionId));
  return options;
};
