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

    /* Service underlines — sized to text width */
    const c = document.createElement("canvas");
    const cx = c.getContext("2d");
    function measureLines() {
        cx.font = "700 1rem 'ITC Benguiat', serif";
        document.querySelectorAll(".services-list li").forEach(li => {
            const w = cx.measureText(li.textContent.trim()).width;
            li.style.setProperty("--line-w", Math.ceil(w) + "px");
        });
    }
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measureLines);
    } else {
        measureLines();
    }

    /* Merch ticker */
    const track = document.getElementById("merchTicker");
    if (track) {
        const words = [
            "MERCH TOMB", "DJAVLAR PRODUCTIONS",
            "LOS ANGELES CA", "EST. 2022",
            "MASTERING THE ART OF SOUND"
        ];
        [...words, ...words].forEach((w, i, arr) => {
            const s = document.createElement("span");
            s.className = "merch-ticker-item";
            s.textContent = w + (i < arr.length - 1 ? "  ·  " : "");
            track.appendChild(s);
        });
    }
});

/* ================================= */
/* EMBERS                            */
/* ================================= */
const emberCanvas = document.getElementById("embers");
const ectx        = emberCanvas.getContext("2d");
let eW, eH, embers = [];

function eResize() {
    eW = emberCanvas.width  = window.innerWidth;
    eH = emberCanvas.height = window.innerHeight;
}
eResize();
window.addEventListener("resize", eResize);

function mkEmber() {
    return {
        x:    Math.random() * eW,
        y:    eH + 6,
        vx:   (Math.random() - .5) * .65,
        vy:   -(0.4 + Math.random() * 1.3),
        size: 0.4 + Math.random() * 1.6,
        life: 1,
        decay: .002 + Math.random() * .004,
        hue:  8 + Math.random() * 32,
        fl:   Math.random() * Math.PI * 2,
        fs:   .035 + Math.random() * .05
    };
}

for (let i = 0; i < 25; i++) {
    const e = mkEmber();
    e.y = Math.random() * eH;
    e.life = Math.random();
    embers.push(e);
}

function drawEmbers() {
    ectx.clearRect(0, 0, eW, eH);
    const t = Date.now() * .001;

    /* Gentle spawn rate */
    if (Math.random() < .22) embers.push(mkEmber());
    embers = embers.filter(e => e.life > 0);

    for (const e of embers) {
        e.fl += e.fs;
        const a = e.life * (.78 + Math.sin(e.fl) * .22);
        const g = ectx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 2.4);
        g.addColorStop(0,   `hsla(${e.hue}, 100%, 68%, ${a * .8})`);
        g.addColorStop(.5,  `hsla(${e.hue - 5}, 100%, 46%, ${a * .35})`);
        g.addColorStop(1,   `hsla(${e.hue - 18}, 90%, 20%, 0)`);
        ectx.beginPath();
        ectx.arc(e.x, e.y, e.size * 2.4, 0, Math.PI * 2);
        ectx.fillStyle = g;
        ectx.fill();
        ectx.beginPath();
        ectx.arc(e.x, e.y, e.size * .38, 0, Math.PI * 2);
        ectx.fillStyle = `hsla(${e.hue + 25}, 100%, 86%, ${a})`;
        ectx.fill();
        e.x    += e.vx + Math.sin(t * 1.1 + e.y * .012) * .25;
        e.y    += e.vy;
        e.life -= e.decay;
    }
    requestAnimationFrame(drawEmbers);
}
drawEmbers();
