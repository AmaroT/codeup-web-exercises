// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting
// the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

// let response = prompt("Please enter an odd number");
// for (var i = 1; i <= 50;i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     if(response == i) {
//         console.log("Yikes!! Number to skip is: " + i);
//     } else{
//         console.log("Here is an odd number: " + i);
//     }if(i >= 51){
//         break;
//     }
// }
// let oddNumber;
// while(true){
//     oddNumber = prompt("");
//     oddNumber = parseInt(oddNumber);
//     if(oddNumber % 2 !== 0 && oddNumber >=1 && oddNumber < 50){
//         break;
//     }
// }
// for( let i = 1; i < 50; i+=2){
//     if(i !== oddNumber){
//         console.log("Here is an odd number" + i);
//         continue;
//     }
//     console.log("Yikes! Skippin number " + oddNumber)
// }