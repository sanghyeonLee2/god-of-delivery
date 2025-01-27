export const quantityOnChg = (operand, form, formName) => {
    const newQuantity = form.getValues(formName) + operand
    return newQuantity >= 1 && form.setValue(formName, newQuantity);
};

