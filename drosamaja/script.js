console.log("Apple style site loaded");

const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger) {
    burger.addEventListener("click", () => {
        mobileMenu.style.display =
            mobileMenu.style.display === "flex" ? "none" : "flex";

        burger.src =
            mobileMenu.style.display === "flex"
            ? "img/close.svg"
            : "img/menu.svg";
    });
}

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.style.display = "none";
        burger.src = "img/menu.svg";
    });
});
