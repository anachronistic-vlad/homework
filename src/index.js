let age = +prompt('Каков ваш возраст?');
let ageOne = (age % 10);

if (ageOne === 0) {
    alert('Вам ' + age + ' лет');
} else if (ageOne === 1) {
    alert('Вам ' + age + ' год');
} else if (ageOne < 5) {
    alert('Вам ' + age + ' года');
} else if (ageOne >= 5) {
    alert('Вам ' + age + ' лет');
}