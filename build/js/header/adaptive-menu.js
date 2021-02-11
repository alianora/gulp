console.log("JavaScript loaded");

function showMenu() {
    console.log("function 'showMenu' loaded");

    document.getElementById('nav').classList.add('open');
    document.getElementById('hide-menu').classList.add('open');
}
function hideMenu() {
    console.log("function 'hideMenu' loaded");

    document.getElementById('nav').classList.remove('open');
    document.getElementById('hide-menu').classList.remove('open');
}