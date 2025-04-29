export const CREATE_MENU_FIELDS = [
  {
    key: 0,
    name: "category",
    type: "text",
    title: "메뉴 상위 카테고리",
    isNumber: false,
    placeholder: "메뉴 상위 카테고리를 입력하세요 ex) 추천메뉴",
  },
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

export const OWNER_STORES_INFO_DISABLE = [
  { key: 1, title: "평점", name: "rating" },
  { key: 2, title: "리뷰 수", name: "reviewCnt" },
  { key: 3, title: "찜 수", name: "dibs" },
  { key: 4, title: "가게 주소", name: "storeAddress" },
];

export const OWNER_STORES_INFO = [
  { key: 1, title: "가게 이름", name: "storeName" },
  { key: 2, title: "카테고리", name: "storeCategory" },
  { key: 3, title: "공지사항", name: "notice" },
  { key: 4, title: "주소", name: "area" },
  { key: 5, title: "운영시간", name: "operationHour" },
  { key: 6, title: "휴무일", name: "dayOff" },
  { key: 7, title: "가게 번호", name: "storeNumber" },
  { key: 8, title: "지역", name: "area" },
  { key: 9, title: "소개", name: "introduction" },
  { key: 10, title: "배달 팁 정보", name: "deliveryTipInfo" },
  { key: 11, title: "사장님", name: "owner" },
  { key: 12, title: "사업자 등록번호", name: "businessNum" },
  { key: 13, title: "원산지", name: "origin" },
  { key: 14, title: "포장 할인 금액", name: "takeoutDiscount" },
  { key: 15, title: "포장 대기 시간", name: "takeoutPickupTime" },
  { key: 16, title: "포장 최소주문금액", name: "takeoutMinPrice" },
  { key: 17, title: "포장 결제방법", name: "takeoutPayment" },
  { key: 18, title: "배달 시간", name: "deliveryTime" },
  { key: 19, title: "배달 최소주문금액", name: "minDeliveryPrice" },
  { key: 20, title: "배달 팁", name: "deliveryTip" },
  { key: 21, title: "배달 결제방법", name: "deliveryPayment" },
];

export const PAYMENT_METHODS = {
  methodsName: "paymentMethod",
  methods: [
    {
      content: "만나서 카드 결제",
      method: "card",
    },
    {
      content: "만나서 현금 결제",
      method: "cash",
    },
  ],
};

export const ORDER_METHODS = {
  methodsName: "orderType",
  methods: [
    {
      content: "배달 주문",
      method: "delivery",
    },
    {
      content: "포장 주문 후 픽업",
      method: "takeOut",
    },
  ],
};
export const TAB_CONTENTS = {
  STORE: [
    {
      key: 0,
      tab: "메뉴",
    },
    {
      key: 1,
      tab: "정보",
    },
    {
      key: 2,
      tab: "리뷰",
    },
  ],
  ORDER_INFO: [
    {
      key: 0,
      tab: "배달주문",
      content: ["최소 주문금액", "배달시간", "배달팁"],
    },
    {
      key: 1,
      tab: "포장/방문주문",
      content: ["최소 주문금액", "픽업시간", "위치안내"],
    },
  ],
};
