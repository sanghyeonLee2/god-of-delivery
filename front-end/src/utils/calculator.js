const PAGE_SIZE = 10;

export const pageCalculator = (totalItems) => Math.max(1, Math.ceil(totalItems / PAGE_SIZE));

export const cartMenuTotalPrice = (cartItems) =>
  cartItems?.reduce((acc, item) => {
    const optionTotal = item.CartItemOptions.reduce((sum, opt) => sum + opt.price, 0);
    const itemTotal = (item.price + optionTotal) * item.quantity;
    return acc + itemTotal;
  }, 0);

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
