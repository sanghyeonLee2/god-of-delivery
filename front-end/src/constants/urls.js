import {keywordIncludedUrl} from "../utils/transducer";

export const API_URLS = {
    GET_CART: "cart",
    SIGN_IN: "auth/sign-in",
    SIGN_UP: "auth/sign-up",
    REISSUE: "auth/reissue",
    DIB: (storeId) => `dibs/${storeId}`,
    GET_ME: "me",
    POST_ADDRESS: "users/me/address",
    GET_COORDS: "users/me/location",
    PATCH_OWNER_REVIEW: (reviewId) => `owners/me/reviews/${reviewId}`,
    PATCH_MY_REVIEW: (reviewId) => `reviews/${reviewId}`,
    DELETE_MY_REVIEW: (reviewId) => `reviews/${reviewId}`,
    DELETE_OWNER_REVIEW: (reviewId) => `owners/me/reviews/${reviewId}`,
    GET_MY_REVIEWS: (page) => `users/me/reviews?page=${page}`,
    GET_STORE_REVIEWS: (storeId, page) => `stores/${storeId}/reviews?page=${page}`,
    GET_OWNER_REVIEWS: (page) => `owners/me/reviews&page=${page}`,
    POST_OWNER_REVIEW: `owners/me/reviews`,
    GET_STORE: (storeId) => `stores/info/${storeId}`,
    POST_ORDERS: "orders",
    POST_REVIEW: "reviews",
    PUT_CART: (cartItemId) => `cart/item/${cartItemId}`,
    GET_MENUS: (menuId) => `menus/${menuId}`,
    DELETE_CART: (cartItemId) => `cart/item/${cartItemId}`,
    GET_ORDER: (orderId) => `orders/${orderId}`,
    GET_ORDERS: (page) => `users/me/orders/?page=${page}`,
    GET_OWNER_STORE: "owners/me/stores",
    PUT_OWNER_STORE: "owners/me/stores",
    GET_STORES: ({
                     categoryId,
                     page,
                     sorting,
                     keyword
                 }) => `stores/${categoryId}?page=${page}&sorting=${sorting}${keywordIncludedUrl(keyword)}`, //
    STORES: (categoryId, currentPage, sorting, keyword) => `stores/${categoryId}/${currentPage}/${sorting}/${keyword}`,
    STORE_DETAIL: (storeId) => `/stores/${storeId}`,
};