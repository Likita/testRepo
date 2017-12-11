var a = 6;
var b = 10;


// var age = prompt('Сколько вам лет?', 100);

// if (age > 18) {
//   alert('Молодец! Взросленький!');
// } else {
//   window.location.href = 'https://yandex.ru';
// }

// var confirmation = confirm('Удалить файл?');

// if (age > 18) {
//   alert('Молодец! Взросленький!');
// } else {
//   window.location.href = 'https://yandex.ru';
// }

// console.log(confirmation);


function init() {
  const students = ['Климова', 'Петров', 'Сидоров'];
  console.log(students.length);
  // console.log(students[0]);
  // console.log(students[1]);
  // console.log(students[2]);



  for (let i = 0; i < students.length; i++) {
    console.log(i);
    console.log(students[i]);
    document.write(students[i]);
  }
}

init();
/*

i++ --> i = i + 1
i-- --> i = i - 1

'10 варианта'
00 = 0
01 = 1
10 = 2
11 = 3
100 = 4

*/