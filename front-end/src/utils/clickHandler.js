export const quantityOnChg = (operand, getValues, setValue, formName) => {
  const newQuantity = getValues(formName) + operand;
  return newQuantity >= 1 && setValue(formName, newQuantity);
};

export const tipOnchange = (e, onChange, method, setPaymentTip, tips) => {
  if (e.target.value === "delivery") {
    setPaymentTip(tips);
  }
  if (e.target.value === "takeOut") {
    setPaymentTip(0);
  }
  onChange(method);
};
