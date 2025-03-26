// menuFormFields.js
export const CREATE_MENU_FIELDS = [
  { key: 1, name: "imgUrl", title: "메뉴 사진", placeholder: "메뉴 사진 url을 입력하세요" },
  { key: 2, name: "name", title: "이름", placeholder: "메뉴 이름을 입력하세요" },
  { key: 3, name: "price", title: "금액", placeholder: "메뉴 금액을 입력하세요", type: "number" },
  { key: 4, name: "description", title: "설명", placeholder: "메뉴 설명을 입력하세요" },
];

export const CREATE_MENU_OPTION_FIELDS = [
  { key: 1, title: "옵션 이름", placeholder: "옵션 제목을 입력하세요" },
  { key: 2, title: "옵션 금액", placeholder: "옵션 금액을 입력하세요" },
];
export const CREATE_MENU_CATEGORY_RADIO_FIELDS = [
  { key: 1, formValue: true, text: "필수" },
  { key: 2, formValue: false, text: "선택" },
];
