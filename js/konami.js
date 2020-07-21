"use strict";
// alert("Enter a cheat Code from any game you may know!");
var allowedKeys = {
    13: 'enter',
    32: 'start/spacebar',
    37: 'left',
    38:'up',
    39: 'right',
    40: 'down',
    49: '1',
    65: 'a',
    66: 'b',
    68: 'd',
    75: 'k',
    76: 'l',
    78: 'n',
    82: 'r',
    83: 's',
    86: 'v',
    88: 'x',
    89: 'y'
};
//Konami Cheat
let konamiCode = ['up','up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];
// to remember the 'position' the user has reached so far.
    var konamiCodePosition = 0;
//add keydown event listener
    document.addEventListener('keydown', function(e){
    //get the value of the key code from the key map
    var konamiKey = allowedKeys[e.keyCode];
    //get the value of the required key from the konami code
    var konamiRequiredKey = konamiCode[konamiCodePosition];
    //compare the key with the required key
    if(konamiKey == konamiRequiredKey){
        //move to the next key in the konami code sequence
        konamiCodePosition++;
        //if the last key is reached, activate cheat code
        if(konamiCodePosition == konamiCode.length){
            activateKonamiCheat();
            konamiCodePosition = 0;
        }
    }else{
        konamiCodePosition = 0;
    }
});
function activateKonamiCheat() {
    $('#container').css("background-image", "url('./img/konamibg.jpg')")
    $('#content').css("background-image", "url('./img/konamiCheatCode.png')")
        var audio = new Audio('./audio/konamiIntro.mp3');
        audio.play();
};
//Donkey Kong Cheat
let donkeyCode = ['b','a', 'down', 'b', 'up', 'down', 'down', 'y', 'a'];
    var donkeyCodePosition = 0;
        document.addEventListener('keydown', function(e){
        var donkeyKey = allowedKeys[e.keyCode];
        var donkeyRequiredKey = donkeyCode[donkeyCodePosition];
            if(donkeyKey == donkeyRequiredKey){
                donkeyCodePosition++;
            if(donkeyCodePosition == donkeyCode.length){
                activateDonkeyCheat();
                donkeyCodePosition = 0;
        }
    }else{
        donkeyCodePosition = 0;
    }
});
function activateDonkeyCheat(){
    $('#container').css("background-image", "url('./img/donkey-bg.jpg')");
    $('#content').css("background-image", "url('./img/donkey.jpg')");
        var donkeyAudio = new Audio('./audio/donkey.mp3');
        donkeyAudio.play();
};
// Scooby-Doo
let scoobyCode = ['n', 'b', 'k', 's', 'd', 'l', 'v'];
    var scoobyCodePosition = 0;
        document.addEventListener('keydown', function(e){
        var scoobyKey = allowedKeys[e.keyCode];
        var scoobyRequiredKey = scoobyCode[scoobyCodePosition];
        if(scoobyKey == scoobyRequiredKey){
            scoobyCodePosition++;
        if(scoobyCodePosition == scoobyCode.length){
            activateScoobyCheat();
            scoobyCodePosition = 0;
        }
    }else {
        scoobyCodePosition = 0;
    }
});
function activateScoobyCheat(){
    $('#container').css("background-image", "url('./img/scoobybg.png')");
    $('#content').css("background-image", "url('./img/scooby.jpeg')");
        var scoobyAudio = new Audio('./audio/scooby.mp3');
        scoobyAudio.play();
}
//Killer Instinct
let killerCode = ['down','start/spacebar'];
let killerCodePosition = 0;
    document.addEventListener('keydown', function(e){
        let killerKey = allowedKeys[e.keyCode];
        let killerRequiredKey = killerCode[killerCodePosition];
        if(killerKey == killerRequiredKey){
            killerCodePosition++;
        if(killerCodePosition == killerCode.length){
            activateKillerCheat();
            killerCodePosition = 0;
        }
    }else{
        killerCodePosition = 0;
    }
});
function activateKillerCheat(){
    $('#container').css("background-image", "url('./img/kibg.jpg')");
    $('#content').css("background-image", "url('./img/killer.png')");
        let killerAudio = new Audio('./audio/killer.mp3');
        killerAudio.play();
}
//fzero
let fCode = ['a', 'b', 'b', 'a', 'up', 'down', 'up', 'down'];
let fCodePosition = 0;
document.addEventListener('keydown', function(e){
    let fKey = allowedKeys[e.keyCode];
    let fRequiredKey = fCode[fCodePosition];
    if(fKey == fRequiredKey){
        fCodePosition++;
        if(fCodePosition == fCode.length){
            activatefCheat();
            fCodePosition = 0;
        }
    }else{
        fCodePosition = 0;
    }
});
function activatefCheat(){
    $('#container').css("background-image", "url('./img/fbg.jpg')");
    $('#content').css("background-image", "url('./img/fzero.jpeg')");
    let fAudio = new Audio('./audio/fzero.jpeg');
    fAudio.play();
}
//Super Mario World
let marioCode = ['1', 'up'];
let marioCodePosition = 0;
    document.addEventListener('keydown', function(e){
        let marioKey = allowedKeys[e.keyCode];
        let marioRequiredKey = marioCode[marioCodePosition];
        if(marioKey == marioRequiredKey){
            marioCodePosition++;
        if(marioCodePosition == marioCode.length){
            activateMarioCheat();
            marioCodePosition = 0;
        }
    }else{
        marioCodePosition = 0;
    }
});
function activateMarioCheat(){
    $('#container').css("background-image", "url('./img/smwbg.jpg')");
    $('#content').css("background-image", "url('./img/smw.jpg')");
        let marioAudio = new Audio('./audio/smw.mp3');
        marioAudio.play();
}
//Super Mario Bros
let marioBrosCode = ['1', 'left', 'right', 'up', '1', 'down'];
let marioBrosCodePosition = 0;
    document.addEventListener('keydown', function(e){
        let marioBrosKey = allowedKeys[e.keyCode];
        let marioBrosRequiredKey = marioBrosCode[marioBrosCodePosition];
        if(marioBrosKey == marioBrosRequiredKey){
            marioBrosCodePosition++;
        if(marioBrosCodePosition == marioBrosCode.length){
            activateMarioBrosCheat();
            marioBrosCodePosition = 0;
        }
    }else{
        marioBrosCodePosition = 0;
    }
    });
function activateMarioBrosCheat(){
    $('#container').css("background-image", "url('./img/smbbg.png')");
    $('#content').css("background-image", "url('./img/supermariobros.jpeg')");
        let marioBrosAudio = new Audio('./audio/supermariobros.mp3');
        marioBrosAudio.play();
}
//Metal Gear Solid
let metalGearCode = ['a', 'a', 'a', 'left', 'left', 'left', 'right', 'right', 'right'];
let metalGearCodePosition = 0;
    document.addEventListener('keydown', function(e){
        let metalKey = allowedKeys[e.keyCode];
        let metalRequiredKey = metalGearCode[metalGearCodePosition];
        if(metalKey == metalRequiredKey){
            metalGearCodePosition++;
        if(metalGearCodePosition == metalGearCode.length){
            activateMetalGearCheat();
            metalGearCodePosition = 0;
        }
    }else{
            metalGearCodePosition = 0;
        }
    });
function activateMetalGearCheat(){
    $('#container').css("background-image", "url('./img/metalbg.jpg')");
    $('#content').css("background-image", "url('./img/foxhound.jpg')");
        let metalGearAudio = new Audio('./audio/metalgear.mp3');
        metalGearAudio.play();
    }

