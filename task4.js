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

const sortByDate = (arr) => { // *** Как перевести дату?
    /* for (let i = 0; i < arr.length; i++) {
        console.log(new Date(dayjs(arr[i].date, 'DD.MM.YYYY')).getTime());
        for (let j = 0; j < arr.length; j++) {
            if (new Date(dayjs(arr[i].date, 'DD.MM.YYYY')).getTime() > new Date(dayjs(arr[j].date, 'DD.MM.YYYY')).getTime()) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }

    return arr */

   return arr.sort((a, b) => new Date(dayjs(b.date, 'DD.MM.YYYY')) - new Date(dayjs(a.date, 'DD.MM.YYYY')));
}

console.log(sortByDate(array));