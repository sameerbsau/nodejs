var date = require('date-and-time')
var moment = require('moment');
console.log( moment().format('YYYY-MM-DDTHH:mm:ss'));

var data = new Date(Date.now());
//console.log(new Date().toISOString());
console.log('raw date obj---',data);
console.log(typeof data);


// format method return date obj into specified string
var formatedDate = date.format(data, 'YYYY/MM/DD HH:mm:ss');

console.log(formatedDate);
console.log(typeof formatedDate);

// var stringDate = '2018-08-03T09:25:06.518Z';

 var parsedDate = date.parse(formatedDate,'YYYY-MM-DD');
 console.log('parsedDate',parsedDate);
console.log(typeof parsedDate);
// console.log(new Date(stringDate));
//console.log(Date.now())
//console.log(new Date(Date.now()));
//console.log(new Date().getDay())
//console.log(Date.now())