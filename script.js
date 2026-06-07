/* ================================= */
/* PAGE NAVIGATION + FADE            */
/* ================================= */

function showPage(pageId, button) {
    const current = document.querySelector(".page.active");

    if (current) {
        current.style.animation = "pageFadeOut 0.3s ease forwards";
        setTimeout(() => {
            current.classList.remove("active");
            current.style.animation = "";
            activatePage(pageId, button);
        }, 280);
    } else {
        activatePage(pageId, button);
    }
}

function activatePage(pageId, button) {
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));

    const next = document.getElementById(pageId);
    next.classList.add("active");

    if (button) button.classList.add("active");
    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("home").classList.add("active");
    const homeButton = document.querySelector(".nav-btn");
    if (homeButton) homeButton.classList.add("active");
});
