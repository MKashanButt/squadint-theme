function toggleMenu() {
    let menu = document.getElementById("sub-menu");
    menu.classList.toggle('hidden')
}
function checkPageScroll() {
    let header = document.getElementById('header');
    if (window.scrollY > 800) {
        header.classList.add('fixed')
    }
    if (window.scrollY < 800) {
        header.classList.remove('fixed')
    }
}