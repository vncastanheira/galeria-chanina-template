const menu = document.getElementById("menu")
let opened = false;
function closeMenu() {
    menu.style.width = "0%"
    opened = false;
}

function openMenu() {
    menu.style.width = "75%"
    opened = true;
}

$("#btn-menu-small").click(function (e) {
    openMenu();
    e.stopPropagation();
})

$("#btn-menu-large").click(function (e) {
    openMenu();
    e.stopPropagation();
})

document.addEventListener("click", (e) => {
    if (opened) {
        let btnLarge = document.getElementById("btn-menu-large") 
        let btnSmall = document.getElementById("btn-menu-small")
        let menuClose = document.getElementById("menu-close")
        if (e.target != menu
            && e.target != btnLarge
            && e.target != btnSmall
            && e.target != menuClose) {
                closeMenu()
        }
    }
})