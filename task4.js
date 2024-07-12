// 4

// Напишите функцию которая сортирует массив по датам

console.log(window.dayjs_plugin_customParseFormat);

dayjs.extend(window.dayjs_plugin_customParseFormat)
const date = dayjs('10.01.2016', 'DD.MM.YYYY')

console.log(date);

const array = [
    { date: '10.01.2016' },
    { date: '11.01.2017' },
    { date: '05.11.2016' },
    { date: '21.12.2002' }
];

const sortByDate = (arr) => {
    return arr.sort((a, b) => new Date(dayjs(b.date, 'DD.MM.YYYY'))
        - new Date(dayjs(a.date, 'DD.MM.YYYY')));
}

console.log(sortByDate(array));