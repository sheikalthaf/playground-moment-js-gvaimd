import './style.css';
import moment from 'moment';

// Write TypeScript code!
// const localDate = moment('2021-08-23 19:04:50');
const localDate = moment.utc('1999-06-09 18:30:00');
// .utc();
console.log(localDate);

moment().local('id');

// console.clear();
// console.log(moment().local('id'));
// console.log(localDate.format('YYYY-MM-DD HH:mm:ss'));
// console.log(
//   moment
//     .utc(localDate)
//     .local('id')
//     .format('YYYY-MM-DD HH:mm:ss')
// );
