const MAX_TARGET = 1000;

let Target;

let title = document.querySelector("#title");
let userInput = document.querySelector("#user-input");
let game = document.querySelector("#game");
let arrowup = document.querySelector("#arrow-up");
let arrowdown = document.querySelector("#arrow-down");
let win = document.querySelector("win");

function displayMaxTarget(){
    document.querySelector("#max-target").textContent = MAX_TARGET;
}

function setTarget(){
    Target = Math.floor(Math.random() * MAX_TARGET + 1);
}

function hideTitle(){
    title.classList.add("hidden");
}

function showTitle(){
    title.classList.remove("hidden");
}

function showGame(){
    game.classList.remove("hidden");
}

function getNumberFromUserInput(){
    if (/^(-|\+)?(\d+|Infinity)$/.test(userInput.value)){
        return Number(userInput.value);
    }
        
    return NaN;
}

function ShowArrow(direction){
    let arrow;

    if (direction === "up"){
        arrow = arrowUp;
    }
    else if (direction === "down"){
        arrow = arrowDown;
    }
    if (arrow !== null){
            arrow.classList.remove("hidden");
        
            setTimeout(() => {
            arrow.classList.add("hidden");
        }, 1500);
    }
}

function InvalidUserinput(){
    userInput.classList.add("invalid");

    setTimeout (() => {
        userInput.classList.remove("invalid");
    },3000);
}
function HideGameandShowWin(){
    game.classList.add("hidden");

    ShowWin();
}

function ShowWin(){
    win.classList.remove("hidden");

    SetTimeout (hideWinAndGoToMenu, 3000);
}

function hideWinAndGoToMenu(){
    win.classList.add("hidden");

    showTitle();
}

function checkUserInput(){
    let UserVal = getNumberFromUserInput();

    if (isNaN(UserVal)){
        invalidateUserInput();
    }
    else{
        if(UserVal === Target){
            HideGameandShowWin();
        }
        
        else if (UserVal > Target){
            ShowArrow("Down");
        }
        else if (UserVal < Target){
            ShowArrow("Up");
        }

        userInput.value
    }
}

displayMaxTarget();

title.addEventListener("click", ()=> {
    hideTitle();
    setTarget();
    showGame();
});

userInput.addEventListener("keyup", event => {
    if (event.key === "enter");
    checkUserInput();
});