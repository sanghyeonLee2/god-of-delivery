export const quantityOnChg = (operand, getValues, setValue, formName) => {
    const newQuantity = getValues(formName) + operand
    return newQuantity >= 1 && setValue(formName, newQuantity);
};

