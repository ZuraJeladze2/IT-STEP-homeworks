var User = /** @class */ (function () {
    function User(firstName, lastName, age, photo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.photo = photo;
    }
    User.prototype.generateCard = function () {
        return "\n        <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(this.photo, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <p class=\"card-text\">Hi! I'm ").concat(this.firstName, " ").concat(this.lastName, ". I'm ").concat(this.age, " years old.</p>\n        </div>\n      </div>\n        ");
    };
    return User;
}());
var user1 = new User('Zura', 'Jeladze', 18, 'https://cdn2.vectorstock.com/i/1000x1000/11/41/male-profile-picture-vector-2051141.jpg');
console.log(user1);
var root = document.querySelector('.root');
root === null || root === void 0 ? void 0 : root.innerHTML += user1.generateCard();
