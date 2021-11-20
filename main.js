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