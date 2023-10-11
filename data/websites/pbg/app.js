/*Importation des menus*/
let startPicture=document.querySelector("#startPicture")
let startMenu=document.querySelector("#title")
let startingMenu=document.querySelector("#startingMenu")
/*Importation des pokemons pour les choix*/
let choix_Dracaufeu=document.querySelector("#Dracaufeu")
let choix_Pikachu=document.querySelector("#Pikachu")
let choix_Florizarre=document.querySelector("#Florizarre")
/*Importation des pokemons pour les corps ennemies*/
let ennemy1=document.querySelector("#ennemy1")
let ennemy2=document.querySelector("#ennemy2")
let ennemy3=document.querySelector("#ennemy3")
let ennemy1effect=document.querySelector("#ennemy1_hit")
let ennemy2effect=document.querySelector("#ennemy2_hit")
let ennemy3effect=document.querySelector("#ennemy3_hit")
/*Boutons*/
let healer=document.querySelector("#healer")
let endgame=document.querySelector("#endgame")
let degats=document.querySelector("#lowlife")
/*Autres Importations*/
let lifebar=document.querySelector("#lifebardiv")
let fightbackground=document.querySelector("BGFight")
let restart=document.querySelector("#Restart")
let lose=document.querySelector("#Lose")
let win=document.querySelector("#Win")
let infos=document.querySelector("#infos")

function HideMenu(){
    startMenu.classList.add("hidden");
    startPicture.classList.add("hidden");
}

function HideStartingMenu(){
    startingMenu.classList.add("hidden");
    console.log("OK");
}

function ShowStartingMenu(){
    startingMenu.classList.remove("hidden");
}

function ShowFlap(){
    degats.classList.remove("hidden");
    healer.classList.remove("hidden");
    endgame.classList.remove("hidden");
}

startMenu.addEventListener("click",()=>{
    HideMenu()
    ShowStartingMenu()
})

choix_Dracaufeu.addEventListener("click",()=>{
    HideStartingMenu()
    ShowFlap()
    var lifepoints=160;
    var attaque=130;
    var ennemy=randInt(1,3)
    ennemy_spawn(ennemy,attaque,lifepoints)})

choix_Pikachu.addEventListener("click",()=>{
    HideStartingMenu()
    ShowFlap()
    var attaque=30;
    var lifepoints=130;
    var ennemy=randInt(1,3)
    ennemy_spawn(ennemy,attaque,lifepoints)
})

choix_Florizarre.addEventListener("click",()=>{
    HideStartingMenu()
    ShowFlap()
    var attaque=90;
    var lifepoints=160;
    var ennemy=randInt(1,3)
    ennemy_spawn(ennemy,attaque,lifepoints)
})
/*Fonction Passerelle*/
function ennemy_spawn(a,b,c){
    if(a==1){
        ennemy1.classList.remove("hidden")
        infos.classList.remove("hidden")
        var ennemy_pv=160
        var ennemy_attack=160
    }else if(a==2){
        ennemy2.classList.remove("hidden")
        infos.classList.remove("hidden")
        var ennemy_pv=160
        var ennemy_attack=130
    }else if(a==3){
        ennemy3.classList.remove("hidden")
        infos.classList.remove("hidden")
        var ennemy_pv=160
        var ennemy_attack=90
    }
    jeu(a,b,c,ennemy_pv,ennemy_attack)
}

function effect(ennemy){
    if(ennemy==1){
        ennemy1.classList.add("hidden")
        ennemy1effect.classList.remove("hidden")
        ennemy1effect.classList.add("super-position")
        sleep(1000)
        ennemy1effect.classList.remove("super-position")
        ennemy1effect.classList.add("hidden")
        ennemy1.classList.remove("hidden")
    }else if(ennemy==2){
        ennemy2.classList.add("hidden")
        ennemy2effect.classList.remove("hidden")
        ennemy2effect.classList.add("super-position")
        sleep(1000)
        ennemy2effect.classList.remove("super-position")
        ennemy2effect.classList.add("hidden")
        ennemy2.classList.remove("hidden")
    }else if(ennemy==3){
        ennemy3.classList.add("hidden")
        ennemy3effect.classList.remove("hidden")
        ennemy3effect.classList.add("super-position")
        ennemy3effect.classList.remove("super-position")
        ennemy3effect.classList.add("hidden")
        ennemy3.classList.remove("hidden")
    }
}

function backtomain(){
    lose.classList.add("hidden");
    restart.classList.add("hidden");
    startMenu.classList.remove("hidden");
    startPicture.classList.remove("hidden");
}
function backtomain2(){
    win.classList.add("hidden");
    restart.classList.add("hidden");
    startMenu.classList.remove("hidden");
    startPicture.classList.remove("hidden");
}

function showLose(){
    infos.classList.add("hidden");
    ennemy1.classList.add("hidden");
    ennemy2.classList.add("hidden");
    ennemy3.classList.add("hidden");
    degats.classList.add("hidden");
    healer.classList.add("hidden");
    endgame.classList.add("hidden");
    lifebardiv.classList.add("hidden");
    lose.classList.remove("hidden");
    restart.classList.remove("hidden");
    restart.addEventListener("click",()=>{
        backtomain()
    })
}

function showWin(){
    infos.classList.add("hidden");
    ennemy1.classList.add("hidden");
    ennemy2.classList.add("hidden");
    ennemy3.classList.add("hidden");
    degats.classList.add("hidden");
    healer.classList.add("hidden");
    endgame.classList.add("hidden");
    lifebardiv.classList.add("hidden");
    win.classList.remove("hidden");
    restart.classList.remove("hidden");
    restart.addEventListener("click",()=>{
        backtomain2()
    })
}

function jeu(ennemy,attaque_max,lifepts,ennemy_pv,ennemy_attack_max){
    var initial_lifepts=lifepts
    var potions=5
    lifebardiv.classList.remove("hidden")
    document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
    document.getElementById("lifepoints").innerHTML=lifepts;
    document.getElementById("potions").innerHTML=potions;
    degats.addEventListener("click",()=>{
        alert("*hit*")
        attaque=randInt(1,(attaque_max/2));
        ennemy_pv=ennemy_pv-attaque;
        if(ennemy_pv>15){
            document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
        }else if (0<ennemy_pv && ennemy_pv<15){
            document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
        }else if(ennemy_pv<0 || ennemy_pv==0){
            ennemy_pv=0;
            document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
            alert("Vous avez tué l'adversaire");
        }
        if(ennemy_pv>0 && ennemy_pv!=0){
            ennemy_attack=randInt(1,ennemy_attack_max)
            lifepts=lifepts-ennemy_attack
            alert("Vous avez été touché par l'ennemi!!!");
            document.getElementById("lifepoints").innerHTML=lifepts;
            }
        if(lifepts==0 || lifepts<0){
            showLose()
        }
        if(ennemy_pv==0 || ennemy_pv<0){
            showWin()
        }

    })
    healer.addEventListener("click",()=>{
        if (potions>0){
            if (lifepts+13>initial_lifepts){
                lifepts=initial_lifepts;
                potions=potions-1
            }else{
                lifepts=lifepts+13;
                potions=potions-1;
            }
        }
        if(lifepts==0 || lifepts<0){
            showLose()
        }
        if(ennemy_pv==0 || ennemy_pv<0){
            showWin()
        }
        if(ennemy_pv>0){
            ennemy_attack=randInt(1,ennemy_attack_max)
            lifepts=lifepts-ennemy_attack
            alert("Vous avez été touché par l'ennemi!!!");
            document.getElementById("lifepoints").innerHTML=lifepts;
            }
        document.getElementById("lifepoints").innerHTML=lifepts;
        document.getElementById("ennemy_pv").innerHTML=ennemy_pv;
        document.getElementById("potions").innerHTML=potions;
    })
    endgame.addEventListener("click",()=>{
        showLose()
    })
}


/* Autres Fonctions */
function randInt(a,b){
    var min=a; 
    var max=b;  
    var random = Math.floor(Math.random()*(max - min))+min; 
    return random
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}