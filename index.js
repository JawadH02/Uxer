// let menuIcon = document.querySelector(".btn__menu");

// menuIcon.addEventListener('click', () => {
//     menuIcon.classList.toggle("active");

//     if(!menuIcon.classList.contains('active'))
//         menuIcon.classList.toggle("not-active");
//     else
//         menuIcon.classList.remove("not-active")
// })

function openMenu() {
    document.body.classList += " menu--open";
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}