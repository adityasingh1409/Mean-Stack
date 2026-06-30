//Debounce
//Throttle
console.log("Debounce and Throttle");
const inputfeild = document.getElementById("inputfeild");



const debounce = (func, delay = 1000) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const Apicall = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        .then((json) => console.log(json));
};

const DebounceFnApiCall = debounce(Apicall, 1000);
inputfeild.addEventListener("input", debounce(function (e) {
    console.log(inputfeild.value);
}));

function throttle(fn, delay) {
    let lastTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastTime >= delay) {
            lastTime = now;
            fn(...args);
        }
    };
}
