export const API_URLS = {
  AUTH: {
    SIGN_IN: "auth/sign-in",
    SIGN_UP: "auth/sign-up",
    REISSUE: "auth/reissue",
  },

  USER: {
    ME: "users/me",
    DIBS: "users/me/dibs",
    ADDRESS: "users/me/address",
    LOCATION: "users/me/location",
    REVIEWS: "users/me/reviews",
    ORDERS: "users/me/orders",
  },

  STORE: {
    LIST: "stores",
    DETAIL: (storeId) => `stores/info/${storeId}`,
    REVIEWS: (storeId) => `stores/${storeId}/reviews`,
    OWNER_STORE: "owners/me/stores",
  },

  CART: {
    BASE: "cart",
    DETAIL: (menuId) => `cart/${menuId}`,
    ITEM: (cartItemId) => `cart/item/${cartItemId}`,
    PUT_ITEM: (cartItemId) => `cart/${cartItemId}`,
  },

  MENU: {
    GET: (menuId) => `menus/${menuId}`,
    OWNER: {
      MENU: (menuId) => `owners/me/menus/${menuId}`,
      CATEGORY: (menuId) => `owners/me/menus/${menuId}/category`,
      OPTION: (menuId, categoryId) => `owners/me/menus/${menuId}/categories/${categoryId}/option`,
    },
  },

  REVIEW: {
    MY: (reviewId) => `reviews/${reviewId}`,
    POST: "reviews",
    OWNER: {
      BASE: "owners/me/reviews",
      ITEM: (reviewId) => `owners/me/reviews/${reviewId}`,
    },
  },

  ORDER: {
    BASE: "orders",
    DETAIL: (orderId) => `orders/${orderId}`,
  },

  DIB: {
    POST: "dibs",
    DELETE: (storeId) => `dibs/${storeId}`,
  },
};
