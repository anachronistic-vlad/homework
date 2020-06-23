let age = +prompt('Каков ваш возраст?');

if ((age >= 5) && (age <= 20) || (age >= 111) && (age <= 114) || (age % 10 === 0) || (age % 10) >= 5) {
    alert('Вам ' + age + ' лет');
} else if ((age % 10) === 1) {
    alert('Вам ' + age + ' год');
} else if ((age % 10) < 5) {
    alert('Вам ' + age + ' года');
}