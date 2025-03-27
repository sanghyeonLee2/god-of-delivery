// menuFormFields.js

export const CREATE_MENU_FIELDS = [
  {
    key: 1,
    name: "imgUrl",
    type: "text",
    title: "메뉴 사진",
    isNumber: false,
    placeholder: "메뉴 사진 url을 입력하세요",
  },
  {
    key: 2,
    name: "name",
    type: "text",
    title: "이름",
    isNumber: false,
    placeholder: "메뉴 이름을 입력하세요",
  },
  {
    key: 3,
    name: "price",
    type: "number",
    title: "금액",
    isNumber: true,
    placeholder: "메뉴 금액을 입력하세요",
  },
  {
    key: 4,
    name: "description",
    type: "text",
    title: "설명",
    isNumber: false,
    placeholder: "메뉴 설명을 입력하세요",
  },
];
export const CREATE_MENU_CATEGORY_FIELDS = [
  {
    key: 1,
    name: "imgUrl",
    defaultValue: "",
    type: "text",
    element: "title",
    title: "하위 카테고리 이름",
    isNumber: false,
    placeholder: "메뉴 하위 카테고리 이름을 입력하세요",
  },
  {
    key: 2,
    defaultValue: 1,
    name: "name",
    type: "number",
    element: "maxQuantity",
    title: "최대 선택 수",
    isNumber: true,
    placeholder: "메뉴 최대 선택 수를 입력하세요",
  },
];

export const CREATE_MENU_OPTION_FIELDS = [
  {
    key: 1,
    type: "text",
    element: "content",
    defaultValue: "",
    isNumber: false,
    title: "옵션 제목",
    placeholder: "옵션 제목을 입력하세요",
  },
  {
    key: 2,
    type: "number",
    defaultValue: 0,
    element: "price",
    title: "옵션 금액",
    isNumber: true,
    placeholder: "옵션 금액을 입력하세요",
  },
];
export const CREATE_MENU_CATEGORY_RADIO_FIELDS = [
  { key: 1, formValue: true, text: "필수" },
  { key: 2, formValue: false, text: "선택" },
];
export const CREATE_MENU_CATEGORY_SELECT_FIELDS = [
  { key: 1, value: "notSelected", text: "선택하세요" },
  { key: 2, value: "fastFood", text: "패스트푸드" },
  { key: 3, value: "chicken", text: "치킨" },
  { key: 4, value: "western", text: "피자/양식" },
  { key: 5, value: "soup", text: "찜/탕" },
  { key: 6, value: "chinese", text: "중국집" },
  { key: 7, value: "korean", text: "한식" },
  { key: 8, value: "japaneseAndCutlet", text: "일식/돈까스" },
  { key: 9, value: "jokbalAndBossam", text: "족발/보쌈" },
  { key: 10, value: "midnight", text: "야식" },
  { key: 11, value: "cafeAndDessert", text: "카페/디저트" },
  { key: 12, value: "convenienceStoreAndMart", text: "편의점/마트" },
];

export const MENU_MANAGEMENT_FIELDS = [
  { key: 1, name: "카테고리" },
  { key: 2, name: "메뉴 이름" },
  { key: 3, name: "메뉴 금액" },
  { key: 4, name: "메뉴 설명" },
  { key: 5, name: "리뷰 수" },
];
