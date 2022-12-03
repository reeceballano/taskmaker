export const descTrimmer = (desc, limit = 20) => {
    const trimText = desc.trim();
    const truncated = trimText.substring(0, limit);
    return `${truncated}...`;
}