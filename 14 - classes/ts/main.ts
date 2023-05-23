class User {
    constructor(firstName,lastName,age,photo){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.photo = photo
    }
    firstName:string
    lastName:string
    age:number
    photo:string
    generateCard() {
        return `
        <div class="card" style="width: 18rem;">
        <img src="${this.photo}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Hi! I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old.</p>
        </div>
      </div>
        `
    }
}
let user1 = new User('Zura','Jeladze',18,'https://cdn2.vectorstock.com/i/1000x1000/11/41/male-profile-picture-vector-2051141.jpg')
console.log(user1);
let root = document.querySelector('.root')
root?.innerHTML += user1.generateCard()
