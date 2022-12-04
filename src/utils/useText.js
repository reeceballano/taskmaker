export const textTrimmer = (desc, limit = 20) => {
    const trimText = desc.trim();
    const truncated = trimText.substring(0, limit);
    const trailing = desc.length < limit ? '' : '..';
    return `${truncated}${trailing}`;
}