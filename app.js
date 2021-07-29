// variables
const buttons = document.querySelectorAll(".btn");
const about = document.querySelectorAll(".about-tabs");
const texts = document.querySelectorAll(".text-body");
// function
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        const id = button.dataset.id;
        if (id) {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
            texts.forEach(function (text) {
                text.classList.remove("active");
            });
            const element = document.getElementById(id);
            element.classList.add("active");
            console.log(element);
        }
    });
});