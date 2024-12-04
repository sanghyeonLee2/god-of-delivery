export const setMenuDetail = (details) => {
    return details.reduce((acc, detail) => {
            if (detail.isEssential) {
                acc[detail.title] = detail.options[0]
            }
            if (detail.isEssential === false) {
                acc[detail.title] = []
            }
            return acc
        }, {quantity: 1}
    )
}