document.addEventListener("DOMContentLoaded", function () {
    const navbarButtons = document.querySelectorAll(".navbar div");

    navbarButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
