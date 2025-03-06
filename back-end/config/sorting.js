const sorting = [
    {
        value: "기본 정렬순",
        id: "basicAsc"
    },
    {
        value: "별점 순",
        id: "ratingAsc"
    },
    {
        value: "리뷰 많은 순",
        id: "reviewCntAsc"
    },
    {
        value: "최소 주문 금액 순",
        id: "minDeliveryPriceAsc"
    }
]

const findSorting = (sortingId) => {
    return sorting.find(item => item.id === sortingId)?.name
}

module.exports = {sorting, findSorting}