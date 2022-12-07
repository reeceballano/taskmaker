const randomID = () => {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const imgSrc = async (id) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            return resolve(`https://picsum.photos/id/${id}/200/200`);
        },1500)
    })
}