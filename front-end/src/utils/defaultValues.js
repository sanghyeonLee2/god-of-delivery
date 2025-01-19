export const setMenuDetail = (details, quantity) => {
    console.log(details)
    return details.reduce((acc, detail) => {
            if (detail.isEssential) {
                acc[detail.title] = detail.options.filter(option => option.isChecked)
            }
            return acc
        }, {quantity}
    )
}
