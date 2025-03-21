const PAGE_SIZE = 10;

export const pageCalculator = (totalItems) => {
  return Math.ceil(totalItems / PAGE_SIZE);
};
