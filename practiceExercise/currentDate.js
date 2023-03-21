//Wirting program show current date
var date = new Date();
var day = date.getDay();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

// var arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// console.log(arr[day]);
var prehand = (hour >= 12)? 'PM':'AM';
hour = (hour >= 12)? hour - 12:hour;

if(prehand === 'PM' && hour === 0){
    if(minute === 0 && second === 0){
        hour = 12;
        prehand = 'Noon';
    }
    else{
        hour = 12;
        prehand = 'PM';
    }
}
if(prehand === 'AM' && hour === 0){
    if(minute === 0 && second === 0){
        hour = 12;
        prehand = 'Midnight';
    }
    else{
        hour = 12;
        prehand = 'AM';
    }
}
console.log(`Current Time: ${hour}:${minute}:${second} ${prehand}`);