export const omittedDate = (isoString) => {
    const date = new Date(isoString);

    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = days[date.getDay()]; // 0(일) ~ 6(토)

    const formattedDate = date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });

    return `${formattedDate} (${dayOfWeek})`;
}

export const detailDate = (isoString) => {
    const dateUtc = new Date(isoString);
    return dateUtc.toLocaleString();
}

export const keywordIncludedUrl = (keyword) => {
    return keyword ? `&keyword${keyword}` : "";
}