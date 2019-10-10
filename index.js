var opened = false; 
function toggleMenu() {
    var menu = document.getElementById("menu")
    if (opened) {
        menu.style.width = "0%"
        opened = false
    }
    else {
        menu.style.width = "75%"
        opened = true
    }
}