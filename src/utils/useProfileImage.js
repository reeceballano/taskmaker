const randomID = () => {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const imgSrc = (id) => {
    return `https://picsum.photos/id/${id}/200/200`
}