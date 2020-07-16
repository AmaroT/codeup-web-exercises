// number 1
// var i = 1;
// while(i < 65536){
//     i = i * 2;
//     console.log(i);
// }
//
// do while
//
//
//     var allCones = Math.floor(Math.random() * 50) + 50;
//     do {
//         var conesBought = Math.floor(Math.random() * 5) + 5;
//         while (allCones > 0) {
//             if (conesBought < allCones) {
//                 var enoughCones = conesBought + " cones sold." + "I have " + allCones + " cones left.";
//                 console.log(enoughCones);
//             } else {
//                 var notEnoughCones = " I can not sell you " + conesBought + " cones." + " I only have " + allCones + " left.";
//                 console.log(notEnoughCones);
//             }
//             conesBought++;
//         }
//
//     }while(allCones = 0);
//         console.log("Yay! Sold them all!")
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// do{
//     while( allCones > 0){
//         var conesBought = Math.floor(Math.random() * 5) + 5;
//         if(conesBought < allCones){
//             console.log("sold " + conesBought +"." + " I have " + allCones + " left.")
//         }else{
//             console.log("I can not sell " + conesBought + " I do not have enough " + allCones );
//         }
//
//     }allCones++;
//
// }while (allCones = 0);
// console.log("Yay! sold them all!");
//
//
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// do {
//     let cones = Math.floor(Math.random()* 5) + 1;
//     if(cones <= allCones) {
//         allCones = allCones - cones;
//         console.log(cones + " cones sold...")
//     } else{
//         console.log("Can not sell you " + cones + " cones I only have "+ allCones +"...");
//     }
// }while ( allCones > 0);
// console.log("yay! I sold them all");