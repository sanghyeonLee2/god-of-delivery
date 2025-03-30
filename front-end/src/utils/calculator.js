const PAGE_SIZE = 10;

export const pageCalculator = (totalItems) => Math.ceil(totalItems / PAGE_SIZE);

export const cartMenuTotalPrice = (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) =>
      cartItem.quantity *
      (acc +
        cartItem.Menu.price +
        cartItem.CartItemOptions.reduce((acc, { price }) => acc + price, 0)),
    0
  );
export const menuDetailTotalPrice = ({
  quantity,
  defaultPrice,
  menuCategories,
  selectedOptionIds,
}) => {
  return (
    quantity *
    menuCategories.reduce((total, { MenuOptions }) => {
      const optionSum = MenuOptions.reduce((sum, option) => {
        return selectedOptionIds.includes(option.menuOptionId) ? sum + option.price : sum;
      }, 0);
      return total + optionSum;
    }, defaultPrice)
  );
};

export const orderTotalPrice = ({ menuPriceSnapshot, OrderItemOptions }) =>
  menuPriceSnapshot +
  OrderItemOptions.reduce((optionAcc, option) => optionAcc + option.optionPriceSnapshot, 0);
