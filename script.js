console.log("Apple style site loaded");


const dots = document.querySelector(".dots-menu");
const mobileMenu = document.querySelector(".mobile-menu");

dots.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });
});




/* Закрытие меню при клике на ссылку */
