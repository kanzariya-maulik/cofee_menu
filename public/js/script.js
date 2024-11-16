let menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight * 1.1, 
        behavior: "smooth" 
    });
});
