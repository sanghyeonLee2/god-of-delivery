export const pageCalculator = (totalItems, pageSize) => {
    return Math.ceil(totalItems / pageSize)
}