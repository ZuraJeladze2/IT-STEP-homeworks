
const users = [
    // {
        //     firstName: prompt('Enter name:'),
    //     age: prompt('Enter age:'),
    //     city: prompt('Enter location:'),
    //     img: "https://pbs.twimg.com/media/FGCpQkBXMAIqA6d.jpg:large"
    // },
    {
        firstName: 'Tom',
        lastName: 'Brown',
        age: 19,
        city: 'Ohio',
        img: "https://wallpaperaccess.com/full/2213424.jpg"
    },
    {
        firstName: 'Dan',
        lastName: 'Johnson',
        age: 20,
        city: 'Ohio',
        img: "https://i.pinimg.com/564x/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg"
    },
    {
        firstName: 'Dog',
        lastName: 'Woof',
        age: 3,
        city: 'Ohio',
        img: "https://www.asiamediajournal.com/wp-content/uploads/2022/10/Dog-Cool-PFP-1200x1200.jpg"
    },
    {
        firstName: 'Sam',
        lastName: 'Smith',
        age: 16,
        city: 'Ohio',
        img: "https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg"
    },
    {
        firstName: 'Tom',
        lastName: 'Brown',
        age: 19,
        city: 'Ohio',
        img: "https://wallpaperaccess.com/full/2213424.jpg"
    },
    {
        firstName: 'Dan',
        lastName: 'Johnson',
        age: 20,
        city: 'Ohio',
        img: "https://i.pinimg.com/564x/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg"
    },
    {
        firstName: 'Dog',
        lastName: 'Woof',
        age: 3,
        city: 'Ohio',
        img: "https://www.asiamediajournal.com/wp-content/uploads/2022/10/Dog-Cool-PFP-1200x1200.jpg"
    },
    {
        firstName: 'Sam',
        lastName: 'Smith',
        age: 16,
        city: 'Ohio',
        img: "https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg"
    },
    {
        firstName: 'Dog',
        lastName: 'Woof',
        age: 3,
        city: 'Ohio',
        img: "https://www.asiamediajournal.com/wp-content/uploads/2022/10/Dog-Cool-PFP-1200x1200.jpg"
    }
]

users.forEach(function(element) {
    persons.innerHTML += generateCard(element);
    })

function generateCard(people) {
    let content = `
    <div class="card my-4" style="width: 18rem;">
            <div class="card-body">
                <img src=${people.img}>
                <h5 class="card-title">${people.firstName + ' ' + people.lastName}</h5>
                <p class="card-text">${people.age} years old</p>
                <a href="#" class="btn btn-info">Location: ${people.city}</a>
            </div>
        </div>`
    return content;
}

function displayPeople(arr) {
    persons.innerHTML = "";

    arr.forEach(function(element) {
    persons.innerHTML += generateCard(element);
    })
}


function displayLegals() {
    let legalAge = users.filter(function(obj) {
        return obj.age >= 18;
    });
    displayPeople(legalAge);
}

function displayIllegals() {
    let legalAge = users.filter(function(obj) {
        return obj.age < 18;
    });
    displayPeople(legalAge);
}

function searchFilter(arr, text) {
    console.log(text);
    let filteredArr = arr.filter(function(element){
        if(element.firstName.includes(text) ||
        element.lastName.includes(text) ||
        element.firstName.toLowerCase().includes(text) ||
        element.lastName.toLowerCase().includes(text)) 
        {
            return true;
        };
    });
    displayPeople(filteredArr);
}