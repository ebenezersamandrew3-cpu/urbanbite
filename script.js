const menuButton = document.querySelector("button");

menuButton.addEventListener("click", function () {
    document.querySelector("#menu").scrollIntoView({
        behavior: "smooth"
    });
});