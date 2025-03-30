export const omittedDate = (isoString) => {
  const date = new Date(isoString);

  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = days[date.getDay()]; // 0(일) ~ 6(토)

  const formattedDate = date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  return `${formattedDate} (${dayOfWeek})`;
};

export const detailDate = (isoString) => {
  const dateUtc = new Date(isoString);
  return dateUtc.toLocaleString();
};

export const keywordIncludedUrl = (keyword) => (keyword ? `&keyword=${keyword.trim()}` : "");

export const extractSelectedOptionIds = (optionsObj) => Object.values(optionsObj).flat();

export const menuDetailOptionsTrans = (menuCategories) => {
  return menuCategories.map((category) => {
    if (category.isEssential && category.maxQuantity === 1 && category.MenuOptions.length > 0) {
      const updatedOptions = category.MenuOptions.map((option, idx) =>
        idx === 0 ? { ...option, hasMenu: true } : option
      );
      return { ...category, MenuOptions: updatedOptions };
    }
    return category;
  });
};
