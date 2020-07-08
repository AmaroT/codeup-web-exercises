(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
        let planetsArray = planetsString.split(',');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
// var planetsStringBreak = planetsArray.join('<br>');
// console.log(planetsStringBreak);
// // var planetsList = ['<ul><li>' + [planetsArray.join('</ul></li>') + planetsStringBreak.join()]]
//     let i = 0;
//     while (i < planetsArray.length) {
//         console.log("<ul>" + planetsArray.join("<li>") + "</ul>" );
//         i++;
//         console.log(planetsList);
// })();
