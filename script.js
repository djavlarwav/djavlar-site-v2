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

    // Size service underlines to match each word's width
    // Can't measure hidden elements directly — use canvas text measurement instead
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Match the font used on the page (ITC Benguiat bold)
    // Fall back gracefully if font isn't loaded yet
    function measureAndSet() {
        ctx.font = "700 1rem 'ITC Benguiat', serif";
        document.querySelectorAll(".services-list li").forEach(li => {
            const w = ctx.measureText(li.textContent.trim()).width;
            li.style.setProperty("--line-w", Math.ceil(w) + "px");
        });
    }

    // Run after fonts load for accurate measurement
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measureAndSet);
    } else {
        measureAndSet();
    }
});
