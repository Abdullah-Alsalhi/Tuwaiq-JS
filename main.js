console.log('Week 2 - Day 4');
console.log('Tuwaiq Academy   JS');

// Exercise - Your first name , last name, your age , your favorite food and your profession.

myInfo = {
    fName: "Abdullah",
    lName: "Alsalhi",
    age: 27,
    favoriteFood: "Pizza",
    profession: "DevOps Engineer"
};

myInfo["fName"];
myInfo["lName"];
myInfo["age"];
myInfo["favoriteFood"];
myInfo["profession"];

// repeat number 1 on someone else (without last name, and age).

information = {
    fName:"Ali",
    favoriteFood: "Rice",
    profession: "Electrical Engineer"
};

information["fName"];
information["favoriteFood"];
information["profession"];

// Exercise - Your first name , last name, your age , your favorite food, your profession and your salary.
// create a function inside an object to increase the salary 100 SR and return the final value.
// create a function inside the object to change first name through a name a given name to this function.

infoAboutMe = {
    fNmae: "Abdullah",
    lName: "Alsalhi",
    age: 27,
    favoriteFood: "Broasted",
    profession: "DevOps engineer",
    salary: 15000,
    salaryIncrease: function(){
        this.salary = this.salary + 100;
        return this.salary;
    },
    changeFname: function(name){
        this.fName = name
        return "The name has been changed, to check run <infoAboutMe.fName>";
    }
};

infoAboutMe.salaryIncrease(); // call a function inside an object

infoAboutMe.changeFname("Ali"); // call a function inside an object and insert an argument to it

// Exercise - Your first name , last name, your age , your favorite food and your profession.

details = {
    fNmae: "Mohammed",
    lName: "Jouza",
    age: 27,
    favoriteFood: "fruits",
    profession: "Lead instructor"
};

// print each key using for in. [point 1]

for (let key in details){
    console.log(key, ":" ,details[key]);
};

// create an object with : car type, prize, traveling in KM, color.

car = {
    type: "Mercedes",
    prize: 3766788,
    km: 150,
    color: "white"
};

for (let value in car){
    console.log(value, ":", car[value]);
};

// Homework
// function takes object, key and return the value of key.

function objectF(object, key){
    return object[key];
};

Books = {
    author: "Abdullah",
    publishYear: 2021,
    title: "Live your life as you want"
};

objectF(Books, "title");
objectF(Books, "author");
objectF(Books, "publishYear")

// function takes object and new key and new value and returns object after adding new value using new key.

function objectNewKey(object, newKey, newValue){
    object[newKey] = newValue;
    return object;
};

friend = {
    fName: "Mohammed",
    profession: "Journalist",
};

objectNewKey(friend, "age", 27);

// function takes object and existed key and new value and return object after adding new value to existing key.

function existKey(object, existedKey, newValue){
    object[existedKey] = newValue;
    return object;
};

city = {
    name: "Riyadh",
    region: "Saudi Arabia",
    size: 2000000
};

existKey(city, "size", 2500000);

// function with name "changeMovieTitle" be inside an object consisting of (title, duration, movie type)
// and the function takes new movie name and returns the object after changing the title of movie.

movie = {
    title: "Exam",
    duration: "2 Hours",
    type: "Drama",
    changeMovieTitle: function(title, duration, type){
        this.title = title;
        return movie;
    }
};

movie.changeMovieTitle("who am i?", "2:30 hours", "Drama");

// function takes an object and print all the keys and their value and "=" between them.

function forInObject(object){
    for (let item in object){
    console.log(item, "=", object[item]);
    }
};

Human = {
    name: "Ahmad",
    age: 23,
    profession: "DevOps Engineer"
};

forInObject(Human);