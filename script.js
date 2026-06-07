/* ================================= */
/* PAGE NAVIGATION                   */
/* ================================= */

function showPage(pageId, button) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    if (button) {
        button.classList.add("active");
    }

    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("home").classList.add("active");
    const homeButton = document.querySelector(".nav-btn");
    if (homeButton) {
        homeButton.classList.add("active");
    }
});
