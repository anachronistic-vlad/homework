// My code here
var family = confirm('У тебя есть братья/сёстры?');
if (family === true) {
    var names = prompt('Как их зовут?');
} else {
    var cousins = confirm('А двоюродные?');
}
console.log(names);

if (cousins === true) {
    var cousinsNames = prompt('Как их зовут?');
} else if (cousins === false) {
    console.log('Жаль');
}
console.log(cousinsNames);