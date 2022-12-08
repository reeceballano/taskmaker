export const useDebounce = (func, wait = 3000) => {
    let timeout;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        func();
    }, wait);


}