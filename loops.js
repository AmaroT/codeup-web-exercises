// let times = 0;
// while (time < 10){
//     times++;
//     console.log("We have done this" + times + "times.";
// }
// console.log("done");
//
// let bottles = 99;
// while(bottles > 0){
//     console.log(bottles + " bottles of beet on the wall");
//     console.log(bottles + " of beer");
//     console.log("Take 1 down");
//     console.log("Pass it around");
//     bottles--;
//     console.log(bottles + " bottles of beer on the wall");
//     console.log("");
// }

let x = Math.floor((Math.random()*10)+1);
console.log(x);
alert("Let's play a guessing game");
let guess =prompt("I chose a number between 1 and 10. Guess what it is.");
while (guess != x){
    alert("No, that wasn't it.");
    guess = prompt("I chose a number between 1 and 10. Guess what it is.");
}
alert("You guessed the number!!");
console.log("We are done")

// do while
// let x = Math.floor((Math.random() * 10) + 1);
// console.log(x);
// let guess;
// alert("I chose a number between 1 and 10");
// do{
//     guess = prompt("I chose a number between 1 and 10. Can you guess what it is?.");
// }while(guess != x);
// alert("You guessed the number!!");
// console.log("We are done");


// final revision
let x = Math.floor((Math.random() * 10) + 1);
console.log(x);
let guess;
do {
    guess = prompt("I chose a number between 1 and 10. Can you guess that it is?");
    if(guess != x){
        continue;
    }else{
        alert("You guessed the number!!");
        break;
    }
}while(true);
console.log("We are done")

// while loop sample
let x = 1;
while( x <= 10){
    console.log(x);
    x++;
}

// for loop sample

// for(let i = 1;i <= 10;i++){
//     console.log(i);
// }
//
// for(let monkeys = 9;monkeys > 0;monkeys--){
//     console.log(monkeys + "little monkeys jumping on the bed");
//     console.log("One fell off and bumped his head");
//     console.log("Momma called the doctor and the docter said"):
//     console.log("No more monkeys jumping on the bed");
//     console.log("");
// }

// for(let i = 0; i <= 20;i+=2){
//     // if(i % 2 === 0)
//         console.log(i);
// }
// console.log("We are done");

let multiply = function(a,b) {
    let answer = 0;
    for (let i = 0; i < b; i++) {
        answer += a;
    }
    return answer;
}
console.log(multiply(4,5));