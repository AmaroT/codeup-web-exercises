"use strict";

/* ########################################################################## */

/**
 * TODO:
 * 1) Create a function named `analyzeColor` that accepts a string that is a color
 * name as input.
 * 2) This function should return a message that related to that
 * color.
 * 3) Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var color;
// function analyzeColor(color){
//     if(color === 'blue'){
//         return alert("Blue is the color of the sky");
//     } else if (color ===  'red'){
//         return alert("Strawberries are Red");
//     } else if (color === 'cyan'){
//         return alert("I do not know anything about cyan");
//     } else{
//         return alert("Please chose a color that is either Red, Blue or Cyan");
//     }
// }
// console.log(analyzeColor('blue'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page

 **/
// function randomColor(){
//     return colors;
// }
// console.log(randomColor);
 /** TODO:
 * Refactor your above function to use a switch-case statement
 */
// switch (randomColor) {
//     case "colors":
//         break;
// }
// console.log(randomColor);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var color = prompt("Pick a Color");
// function analyzeColor (){
//     return color;
// }
// alert(analyzeColor());
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
//  */
var luckyNumber = prompt("Feeling Lucky?? Pick a number 1 - 5!");
var totalAmount = prompt("What is your Total Amount?");


function calculateTotal (luckyNumber, totalAmount) {

    // if (luckyNumber === 1) {
    //     alert("You get 10%" + totalAmount);
    //     // alert("Congratulations! You won a 10% discount! Your Amount is : $" + totalAmount - totalAmount * .1);
    // } else if (luckyNumber === 2) {
    //     alert("You get 25%" + totalAmount);
    //      // alert("Congratulations! You won a 25% discount!! Your Amount is : $" + totalAmount - totalAmount * .25);
    //  } else if (luckyNumber === 3) {
    //     alert("You get 35%" + totalAmount);
    //      // alert("Congratulations! You won a 35% discount!! Your Amount is :  $" + totalAmount - totalAmount * .35);
    //  } else if (luckyNumber === 4) {
    //     alert("You get 50%" + totalAmount);
    //     // alert("Congratulations! You won a 50% discount!! Your Amount is :  $" + totalAmount - totalAmount * .50);
    // } else if (luckyNumber === 5) {
    //     alert("You get 100%" + totalAmount);
    //      // alert("Congratulations! You won a 100% discount!! Your Amount is :  $" + totalAmount - totalAmount * 1);
    //  } else if (luckyNumber === 0) {
    //     alert("Sorry, you did not win a discount"+ totalAmount);
    // }
}
console.log(calculateTotal(luckyNumber,totalAmount));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// Math.floor = luckyNum(Math.random() * luckyNum.length);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// var response = confirm("Do you want to input a number?");
// var userNumber;
// function checkResponse (){
//     if(response === true) {
//         userNumber = prompt("Pick any number");
//     } if(userNumber % 2 === 0) {
//         alert("Your number is even!");
//     } else if (userNumber % 2 === 1) {
//         alert("your number is odd!");
//     }  if (userNumber + 100) {
//         alert("Your number plus 100 is: " + userNumber);
//     } if (userNumber > 0) {
//         alert("Your number is a positive number!");
//     } else if (userNumber < 0) {
//         alert("Your number is a negative number!");
//     } else {
//         alert("You did not want to pick a number.");
//     }
// }
// console.log(checkResponse(response));

