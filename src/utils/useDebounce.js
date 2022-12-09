export const useDebounce = (func, wait = 300) => {
    let timeout;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        func();
    }, wait);
}