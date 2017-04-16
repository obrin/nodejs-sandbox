// Exercise 1
let double = function (value) {
    return value * 2;
};
console.log(double(10));
// Exercise 2
let greet = function (name) {
    if (name === undefined) {
        name = "Max";
    }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3
let numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4
let newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5
let testResults = [3.89, 2.99, 1.38];
let result1 = testResults[0];
let result2 = testResults[1];
let result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6
let scientist = { firstName: "Will", experience: 12 };
let firstName = scientist.firstName;
let experience = scientist.experience;
console.log(firstName, experience);
