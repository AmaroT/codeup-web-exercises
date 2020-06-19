
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");

    let color = prompt("What is your favorite color");
    alert("Great, " + color + "is my favorite color too!");



// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// var littleM = prompt('How many days do you want to rent the Little Mermaid movie for?');
// var brotherB = prompt('How many days do you want to rent the Brother Bear movie for?');
// var hercules = prompt('How many days do you want to rent The Hercules movie for?');
// var totalMovies = (littleM + brotherB + hercules);
// alert('You have picked for ' + littleM + brotherB + hercules + ' days');


// console.log("Your total cost is: $" + totalCost);
//# 3

let littleMermaidDays = parseInt(prompt("How many days did you rent Little Mermaid?"));
let brotherBearDays = parseInt(prompt("How many days did you rent Brother Bear?"));
let herculesDays = parseInt(prompt("How many days did you rent Hercules?"));

alert("You owe $"+(littleMermaidDays + brotherBearDays + herculesDays) * 3 + " for rental charges ($3 per movie per day.)");
//
//
// // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// var googlePay = 400;
// var amazonPay = 380;
// var facebookPay = 350;
// var googleHours = 6;
// var amazonHours = 4;
// var facebookHours = 10;
// var totalGooglePay = googlePay * googleHours;
// var totalAmazonPay = amazonPay * amazonHours;
// var totalFacebookPay = facebookPay * facebookHours;
// var totalPay = totalGooglePay + totalAmazonPay + totalFacebookPay;
// // console.log(totalGooglePay);
// // console.log(totalAmazonPay);
// // console.log(totalFacebookPay);
// // console.log("Your total pay is: $" + (totalGooglePay + totalAmazonPay + totalFacebookPay));
// // console.log(`Your total pay is: ${totalPay}`);
// // A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// var enrolled;
// var notFull = true;
// var notConflict = false;
// // console.log(enrolled);
// // enrolled = notFull && notConflict;
// // console.log(enrolled);
// // A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
// var moreThan2 = true;
// var notExpired = true;
// var premiumMem = false;
// // var offerApplied = (moreThan2 && notExpired) || (premiumMem && notExpired);
// var offerApplied = (moreThan2 || premiumMem) && notExpired;
// // console.log(offerApplied);
// var username = 'codeup';
// var password = 'notastrongpassword';
// var passAtLeastFive = password.length >= 5;
// var passNotIncludeUN = password.indexOf(username) === -1;
// var usernameAtLeastTwenty = username.length <= 20;
// var noLeadingTrailingWS = (username === username.trim()) && (password === password.trim());
// console.log(passAtLeastFive);
// console.log(passNotIncludeUN);
// console.log(usernameAtLeastTwenty);
// console.log(noLeadingTrailingWS);