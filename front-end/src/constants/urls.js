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
    LIST: (categoryId) => `stores/${categoryId}`,
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
      BASE: "owners/me/menus",
      BY_ID: (menuId) => `owners/me/menus/${menuId}`,
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
export const NON_AUTH_URLS = [API_URLS.AUTH.SIGN_IN, API_URLS.AUTH.SIGN_UP, API_URLS.AUTH.REISSUE];
