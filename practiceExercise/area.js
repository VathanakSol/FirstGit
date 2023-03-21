// var date = new Date();
// var day = date.getDay();
// var hour = date.getHours();
// var minute = date.getMinutes();
// var second = date.getSeconds();
// var month = date.getMonth();
// var year = date.getFullYear();
// console.log(`${hour}:${minute}:${second}`);

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3)/2;
var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
Math.floor(area);
console.log(area);