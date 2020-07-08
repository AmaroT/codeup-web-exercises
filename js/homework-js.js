//TODO: Write a function that loops through a string. For each character in the string that is a vowel (aeiou/AEIOU), add it to the array and return the array
// function isVowel(char){
//     let vowels = "aeiouAEIOU";
//     return typeof(char) === 'string' && char.length === 1 && vowels.includes(char);
//
// }
//TODO: Write a function that checks if someone is 21 or older. If they are over 21, return true. Otherwise return false.
// function ofAge(num) {
//     if (num >= 21) {
//         return true;
//     }
//     return false;
// }
// console.log(ofAge());
//TODO: Write a function that will set an interval that counts down from 10 at 1second intervals. Every count should be logged to the console. If the count reaches zero, then return an alert that says 'lift off!'
// var counter = 10;
// var countdown = setInterval(function(){
//     console.log(counter);
//     counter--;
//     if(counter === 0){
//         console.log("Lift Off!!!");
//         clearInterval(countdown);
//     }
// },1000)
//TODO: Given the following array of objects, write a function that takes in the array and return the object that costs the most money.
var storeItems = [
    {
        name: 'hammer',
        price: "10.99"
    },
    {
        name: 'macbook',
        price: "1599.99"
    },
    {
        name: 'chair',
        price: "35.99"
    },
    {
        name: 'bike',
        price: "140.99"
    }
];
let highestPrice = function(price){
    for(let i = 0; i < storeItems.length;i++){
        if(parstInt(storeItems.price) === Math.max){
            return highestPrice();
        }
        else{
            return storeItems.price
        }
    }
}
console.log(highestPrice());


