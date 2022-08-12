let os_menu=document.querySelector("#menu");
let close_button=document.querySelector("#close-button");
function avert() {
    alert("Ce site est optimisé pour être consulté en 1080p");
};

function select_os(){
    os_menu.classList.remove("hidden");
};

close_button.addEventListener("click",()=>{
    os_menu.classList.add("hidden");
})

function offline(){
    alert("Le site n'est plus en ligne");
}