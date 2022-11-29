export const randomBG = () => {
    const colors = ['indigo', 'blue', 'green', 'yellow'];
    const min = Math.ceil(0);
    const max = Math.floor(colors.length);
    console.log('random', Math.floor(Math.random() * (max - min)) + min)
    return colors[Math.floor(Math.random() * (max - min + 1)) + min]
}

export const useBackground = () => {
    return `bg-${randomBG()}-300`;
}