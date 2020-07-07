(function (){
    "use strict";

    let fizzbuzz = function (num) {
       for (let i = 1; i <= num; i++){
           //if div by both; fizzbuzz
           if(i % 3 == 0 && i % 5 == 0){
               console.log("fizzbuzz");
           }else if(i % 3 == 0) {
               console.log("fizz");
           }else if(i % 5 == 0){
               console.log("buzz");
           }else {
               console.log(i);
           }
       }
    }
    fizzbuzz(23);

    let fizzbuzz2 = function(num){
        for (let i = 1; i <=num; i++ ){
            //if both are div by 3 and 5
            if(i % 3 == 0 && i % 5 == 0){
                console.log('fizzbuzz');
            }else if (i % 3 == 0){
                console.log('fizz');
            }else if(i % 5 == 0){
                console.log('buzz');
            }else{
                console.log(i);
            }
        }
    }
    fizzbuzz2(45);

})();