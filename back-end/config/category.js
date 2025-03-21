const category = [
  {
    id: "all",
    name: "전체보기",
  },
  {
    id: "single",
    name: "1인분주문",
  },
  {
    id: "franchise",
    name: "프랜차이즈",
  },
  {
    id: "chicken",
    name: "치킨",
  },
  {
    id: "western",
    name: "피자/양식",
  },
  {
    id: "chinese",
    name: "중국집",
  },
  {
    id: "korean",
    name: "한식",
  },
  {
    id: "japaneseAndCutlet",
    name: "일식/돈까스",
  },
  {
    id: "jokbalAndBossam",
    name: "족발/보쌈",
  },
  {
    id: "midnight",
    name: "야식",
  },
  {
    id: "school",
    name: "분식",
  },
  {
    id: "cafeAndDessert",
    name: "카페/디저트",
  },
  {
    id: "convenienceStoreAndMart",
    name: "편의점/마트",
  },
];

const findCategory = (categoryName) => {
  return category.find((item) => item.id === categoryName)?.name;
};

module.exports = { findCategory, category };
