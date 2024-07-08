
// import {customParseFormat} from 'dayjs/plugin/customParseFormat'
// 4

// Напишите функцию которая сортирует массив по датам

// console.log(customParseFormat)
//dayjs.extend(customParseFormat)
const date = dayjs('10.01.2016', 'DD-MM-YYYY').format('DD-MM-YYYY');

console.log(date);

const array = [
    { date: '10.01.2016' },
    { date: '11.01.2017' },
    { date: '05.11.2016' },
    { date: '21.12.2002' }
];

const sortByDate = (arr) => { // *** Как перевести дату?
    /*for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (new Date(arr[i].date).getTime() < new Date(arr[j].date).getTime()) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }*/

   //console.log(new Intl.DateTimeFormat("ru").format(arr[0].date));
   console.log(new Date(arr[0].date).toLocaleDateString("en-US"));
   console.log(new Date(new Date(arr[0].date).toLocaleDateString("en-US")));

   console.log(new Date(arr[2].date.toLocaleDateString("de-DE")));
   console.log(new Date(arr[3].date.toLocaleDateString("de-DE")));

   return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
}

console.log(sortByDate(array));