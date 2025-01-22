export const setMenuDetail = (details, quantity, menuId, storeId) => {
    return details.reduce((acc, detail) => {
            if (detail.menuOptions.some((option) => option.isChecked)) {
                acc[detail.title] = detail.menuOptions
                    .filter((option) => option.isChecked)
            }
            return acc
        }, {quantity, menuId, storeId}
    )
}
