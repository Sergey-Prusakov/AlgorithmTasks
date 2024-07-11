// 17

// Напишите универсальную функцию дебаунса

const debouncer = (callback, time) => {
    let timeout;

    return () => {
        clearTimeout(timeout)
        timeout = setTimeout(callback, time);
    }
}

const element = document.getElementById('text')

const func = () => {
    console.log('Функция выполнилась!');
}

element.addEventListener("input", debouncer(func, 2000));
