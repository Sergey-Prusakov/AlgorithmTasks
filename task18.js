// 18

// Напишите функцию для тротлинга

const throttle = (callback, time) => {
    let isPaused = false;

    return () => {
        if (!isPaused) {            
            callback();
            isPaused = true;
    
            setTimeout(() => {
                isPaused = false;
            }, time);
        }
    }
}

const element = document.getElementById('text')

const func = () => {
    console.log('Функция выполнилась!');
}

element.addEventListener("input", throttle(func, 1000));