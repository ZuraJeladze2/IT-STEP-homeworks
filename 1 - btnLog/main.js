// davaleba 1 (RegEx)

// let sentence = prompt('Enter a string:');
// let a = /[aeiouაეიოუ]/ig;
// function test() {
//     let count = sentence.match(a).length;
//     console.log(count);
// }
// test();



// davaleba 1 (array)

// let sentence = prompt('Enter a string:');
// let vowels = ['a', 'e', 'i', 'o', 'u', 'ა', 'ე', 'ი', 'ო', 'უ'];

// function countVowels (str) {
//     let count = 0;
//     for (let element of str.toLowerCase()) {
//         if (vowels.includes(element)) {
//             count++;
//         }
//     }
//     return count;
// }
// let result = countVowels(sentence);
// console.log(result);



// davaleba 2

let word = '';
let x =  (words) => {
    words = inputi.value.split(' ');
    word = words[0];

    for (let i = 0; i < words.length; i++) {
        if(word.length < words[i].length) {
            word = words[i];
        }
    }   
    return word;
}



// davaleba 3

// let array = []; 
// function davaleba3(arr, condition) {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random() * 100));
//     }
//     if (condition == 'ზრდადობა') {
//         arr.sort(function(a, b) {return a - b;});
//     }
//     else if (condition == 'კლებადობა') {
//         arr.sort(function(a, b) {return b - a;});
//     }
//     else {
//         alert('ჩაწერე ზრდადობა ან კლებადობა')
//     }
//     console.log(arr);
// }
// davaleba3(array, prompt('შეიყვანე პირობა:'));