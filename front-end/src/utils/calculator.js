const PAGE_SIZE = 10;

export const pageCalculator = (totalItems) => Math.ceil(totalItems / PAGE_SIZE);

export const cartTotalPrice = (cartData) =>
  cartData?.CartItems.reduce(
    (acc, cartItem) =>
      cartItem.quantity *
      (acc +
        cartItem.Menu.price +
        cartItem.CartItemOptions.reduce((acc, { price }) => acc + price, 0)),
    cartData.Store.deliveryTip
  );
export const orderTotalPrice = ({ menuPriceSnapshot, OrderItemOptions }) =>
  menuPriceSnapshot +
  OrderItemOptions.reduce((optionAcc, option) => optionAcc + option.optionPriceSnapshot, 0);
