
export function linkFormatter(s: string) {
    if (!s) return
    const link = s.toLowerCase().replaceAll(" ", "-");

    return link;
}