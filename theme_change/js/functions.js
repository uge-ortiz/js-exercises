
var themeActive = true; 

const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const theme3 = document.querySelector(".theme3");

const body = document.querySelector("body");


const buttonTheme1 = document.querySelector(".button1");
const buttonTheme2 = document.querySelector(".button2");
const buttonTheme3 = document.querySelector(".button3");




buttonTheme1.onclick = function(){
    theme1.className = "theme1";
    buttonTheme1.classList.add("active");
    buttonTheme2.classList.remove("active");
    buttonTheme3.classList.remove("active"); ;
    
}

buttonTheme2.onclick = function(){
    theme1.className = "theme2";
    buttonTheme2.classList.add("active");
    buttonTheme1.classList.remove("active");
    buttonTheme3.classList.remove("active");
    
}

buttonTheme3.onclick = function(){
    theme1.className = "theme3";
    buttonTheme3.classList.add("active");
    buttonTheme1.classList.remove("active");
    buttonTheme2.classList.remove("active");
    
}

/*
buttonTheme2.onclick = theme1.className = "theme2";
buttonTheme3.onclick = theme1.className = "theme3";
*/









