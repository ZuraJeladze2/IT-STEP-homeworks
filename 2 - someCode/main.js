//1.

// let dayPeriod;
// let clock = 11;
// 	if (clock >= 0 && clock < 12) {
// 	dayPeriod = 'AM - დღე–ღამის პირველი პერიოდია';
// 	} else {
// 	dayPeriod = 'PM - დღე–ღამის მეორე პერიოდია';
// 	}
// console.log(dayPeriod);



// სიტყვების დათვლა არაფერ შუაში იყო მარა მერე მივხვდი და აღარ წავშალე.
// იყოს მაინც :))

// let string = prompt('enter a string:');
// let splitted = string.trim().split(/\s/).length;
// let countWords = (str) => {
//     if (str > 100) {
//         console.log('სიტყვების რაოდენობა აჭარბებს');
//     } else {
//         console.log('სიტყვების რაოდენობა დაშვებული ნორმის ფარგლებშია');
//     }
// }



// 2.

// let string = prompt('enter a string:');
// if (string.length > 100) {
//     console.log('აჭარბებს');
    
// } else {
//     console.log('არ აჭარბებს');
// }



// 3.

// let phone = '+995 551 169 534';
// if (phone.substring(0, 4) == '+995') {
//     console.log('ქართული ნომერია');
// } else {
//     console.log('არაა ქართული ნომერი');
// }



// 4. 

// let myPhone = prompt('შეიყვანე ნომერი:');
// let myPhoneIndex = myPhone.substring(0, 3);
// let indexOfBeeline = ['568', '571', '574', '579', '592', '597'];
// if (indexOfBeeline.includes(myPhoneIndex)) {
//     alert(myPhone + ' არის ბილაინის ნომერი')
// } else {
//     alert(myPhone + ' არაა ბილაინის ნომერი')
// }


// 5.

// function delayedFunction() {
//     setTimeout(function () {
//         document.write('თქვენი შეკვეთა შესრულებულია');
//     }, 2000);
// }
// delayedFunction();



// 6.

// myTimer();
// function myTimer() {
//     setInterval(function() {
//         const date = new Date();
//         time.innerHTML = date.toLocaleTimeString();
//     }, 1000);
// }
// ისე ინტერვალი ერთ წამზე ნაკლები რო იყოს უფრო ზუსტი იქნებოდა დრო. წამის მეათედებში არის აცდენა