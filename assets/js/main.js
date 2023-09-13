
const typedtextspan = document.querySelector(".typed-text");

const textarray = ["changing how college students hangout ->", "building joinpush.app", "learning to cook chinese food", 
"breaking Prod at Zelta.ai", "playing bball", "building guitars", 
"shitposting on twitter"];

const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;

let arrayindex = 0;
let charindex = 0;

function type () {
    if (charindex < textarray[arrayindex].length){
        typedtextspan.textContent += textarray[arrayindex].charAt(charindex);
        charindex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }

}

function erase () {
    if (charindex > 0 ){
        typedtextspan.textContent = textarray[arrayindex].substring(0, charindex - 1);
        charindex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        arrayindex++;
        if (arrayindex >= textarray.length) arrayindex = 0;
        setTimeout(type, typingDelay + 500);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay);
});



