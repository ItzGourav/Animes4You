export function linkFormatter(s: string) {
    if (!s) return;
    const link = s.toLowerCase().replaceAll(" ", "-");

    return link;
}

export function filterLinkFormatter({
    genre,
    season,
    studio,
    status,
    type,
    order,
}: {
    genre: string[];
    season: string[],
    studio: string[],
    status: string[],
    type: string[],
    order: string[];
}) {
    const queryParams = [];

    if (genre.length > 0) {
        queryParams.push(`genre=${genre.join(",")}`);
    }

    if (season.length > 0) {
        queryParams.push(`season=${season.join(",")}`);
    }

    if (studio.length > 0) {
        queryParams.push(`studio=${studio.join(",")}`);
    }

    if (status.length > 0) {
        queryParams.push(`status=${status[0]}`);
    }

    if (type.length > 0) {
        queryParams.push(`type=${type.join(",")}`);
    }

    if (order.length > 0) {
        queryParams.push(`order=${order.join(",")}`);
    }

    // Combine all the query parameters into a single string
    const queryString = queryParams.join("&");

    // Add the query string to the base URL
    if (queryParams.length > 0) {
        return `/s?${queryString}`
    } else {
        return "/s"
    }
}
