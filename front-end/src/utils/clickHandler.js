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
export const handleCheckLimit = (e, maxQuantity, menuOptionId, field) => {
  const checkedCnt = field.value.length;
  if (e.target.checked && checkedCnt >= maxQuantity) {
    e.preventDefault();
    return;
  }

  const updated = e.target.checked
    ? [...field.value, menuOptionId]
    : field.value.filter((id) => id !== menuOptionId);

  field.onChange(updated);
};
export const isChecked = (field, menuOptionId) => field.value.includes(menuOptionId);
export const onClickLocation = (x, y, setCoords, setLocationInfo) => {
  const latLng = { lng: Number(x), lat: Number(y) };
  setCoords(latLng);
  setLocationInfo([]);
};
