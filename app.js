let marks = prompt('Enter Your Marks : ');

// let marks = 45;

if (marks > 100 || marks < 0) document.write('Invalid marks');
else if (marks >= 80 && marks <= 100) document.write('A+');
else if (marks >= 70 && marks <= 79) document.write('A');
else if (marks >= 60 && marks <= 69) document.write('A-');
else if (marks >= 50 && marks <= 59) document.write('B');
else if (marks >= 40 && marks <= 49) document.write('C');
else if (marks >= 33 && marks <= 39) document.write('D');
else document.write('Fail');

// const result = 'C';

//  else if(result === 'A+')
//      console.log('Your mark is in between 80 to 100')

//  else else if(result === 'A')
//      console.log('Your mark is in between 70 to 79')

//  else else if(result === 'A-')
//      console.log('Your mark is in between 60 to 69')

//  else else if(result === 'B')
//      console.log('Your mark is in between 50 to 59')

//  else else if(result === 'C')
//      console.log('Your mark is in between 40 to 49')

//  else if(result === 'D')
//      console.log('Your mark is in between 34 to 39')

//  else if(result === 'F')
//      console.log('Your mark is in between 0 to 33')
//  else
//      console.log('Invalid Mark')

// function getResult(mark) {
//   console.log(mark);

//   return mark >= 40 ? 'A is the Boss' : 'A is not the Boss ';

//   if (mark >= 90) return 'you got golden A+';
//   else if (mark >= 80) return 'A';
//   else if (mark >= 70) return 'A-';
//   else if (mark >= 60) return 'B';
//   else if (mark >= 50) return 'C';
//   else if (mark >= 40) return 'D';
//   else if (mark >= 33) return 'E';
//   else if (mark >= 30) return 'F';
//   else return 'Invalid Mark';
// }

// const result = getResult(80);
// console.log(result, 'this  result is Mine');

// let country = 'canada';
// console.log('I love' + country + 'I wanna go' + country);
// console.log(`I love ${country} I wanna go ${country}`);

//bola hoy Interpoletion //

// var = can reassign value and declared multiple times.
// let = can assign a new value but can't be redeclared.
// const = can not be pre-declared and can not be change value.
var x = 80;
var y = 80;
var z = '80';
// var result = x + y;
// console.log(result);
console.log((x === y) === z);
