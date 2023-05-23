// 1
// let obj = {
//     '1': 'Jan',
//     '2': 'Feb',
//     '3': 'Mar',
//     '4': 'Apr',
//     '5': 'May',
//     '6': 'Jun',
//     '7': 'Jul',
//     '8': 'Aug',
//     '9': 'Sep',
//     '10': 'Oct',
//     '11': 'Nov',
//     '12': 'Dec',
// }
// console.log(obj);



// 2
// let person = {
//     firstName: 'Zura',
//     lastName: 'Jeladze',
//     gender: 'Male'
// }
// console.log(`${person.firstName} ${person.lastName} (${person.gender})`);


// 3
// let dt = new Date()
// let date = {
//     day: dt.getDate(),
//     month: dt.getMonth() + 1,
//     year: dt.getFullYear()
// }
// console.log(`Today is ${date.day} / ${date.month} / ${date.year}`);



// 4

// let obj = {
//     '9name': 10,
//     key7: 20,
//     'a-b': 30,
//     'city 10': 40,
//     city10: 50
// };



// 5
// let products = {
//     pr1: 'ბანანი',
//     pr2: 'მარწყვი',
//     pr3: 'მსხალი',
//     pr4: 'მარწყვი',
//     pr5: 'ატამი',
//     pr6: 'საზამთრო',
//     pr7: 'მარწყვი'
// }
// for (let key in products) {
//     if (products[key] == 'მარწყვი') {
//         products[key] = 'ალუბალი';
//     }
// }
// console.log(products);



// 6
// const book = {
//     title: "JavaScript: The Definitive Guide",
//     author: "David Flanagan",
//     publisher: "O'Reilly Media",
//     year_of_publication: 2011
// };
// let keys = []
// let values = []
// for (let key in book) {
//     keys.push(key);
//     values.push(book[key])
// }
// console.log(`${keys}\n${values}`);



// 7
// const book = {
//     title: "JavaScript: The Definitive Guide",
//     author: "David Flanagan"
// };
//    const year = {
//     year_of_publication: 2011
// };
   
//    let mergeBook = {
   
// }
// mergeBook = {...book, ...year}
// console.log(mergeBook);



// 8
// const user = {
//     userName : "superadmin",
//     password: "Godzilla"
// }
// let {userName, password} = user;
// console.log(userName + ' ' + password);