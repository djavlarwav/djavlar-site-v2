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
    const canvas2d = document.createElement("canvas");
    const ctx2d = canvas2d.getContext("2d");
    function measureAndSet() {
        ctx2d.font = "700 1rem 'ITC Benguiat', serif";
        document.querySelectorAll(".services-list li").forEach(li => {
            const w = ctx2d.measureText(li.textContent.trim()).width;
            li.style.setProperty("--line-w", Math.ceil(w) + "px");
        });
    }
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measureAndSet);
    } else {
        measureAndSet();
    }
});

/* ================================= */
/* EMBERS + GATE                     */
/* ================================= */

/* ── STATIC BURST ── */
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('staticBurst').classList.add('fire'), 80);
});

/* ── EMBERS — calm, original intensity ── */
const canvas = document.getElementById('embers');
const ctx    = canvas.getContext('2d');
let W, H, embers = [];

function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize();
window.addEventListener('resize', resize);

function mkEmber() {
    return {
        x:    Math.random() * W,
        y:    H + 6,
        vx:   (Math.random() - .5) * .75,
        vy:   -(0.5 + Math.random() * 1.6),
        size: 0.5 + Math.random() * 2,
        life: 1,
        decay: .003 + Math.random() * .0045,
        hue:  8 + Math.random() * 32,
        fl:   Math.random() * Math.PI * 2,
        fs:   .04 + Math.random() * .055
    };
}

for (let i = 0; i < 22; i++) {
    const e = mkEmber(); e.y = Math.random() * H; e.life = Math.random(); embers.push(e);
}

function drawEmbers() {
    ctx.clearRect(0, 0, W, H);
    const t = Date.now() * .001;
    if (Math.random() < .28) embers.push(mkEmber());
    embers = embers.filter(e => e.life > 0);
    for (const e of embers) {
        e.fl += e.fs;
        const a = e.life * (.8 + Math.sin(e.fl) * .2);
        const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 2.6);
        g.addColorStop(0,   `hsla(${e.hue},100%,70%,${a*.85})`);
        g.addColorStop(.5,  `hsla(${e.hue-5},100%,48%,${a*.38})`);
        g.addColorStop(1,   `hsla(${e.hue-18},90%,22%,0)`);
        ctx.beginPath(); ctx.arc(e.x, e.y, e.size * 2.6, 0, Math.PI*2);
        ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(e.x, e.y, e.size * .4, 0, Math.PI*2);
        ctx.fillStyle = `hsla(${e.hue+25},100%,88%,${a})`; ctx.fill();
        e.x  += e.vx + Math.sin(t*1.1 + e.y*.012) * .28;
        e.y  += e.vy;
        e.life -= e.decay;
    }
    requestAnimationFrame(drawEmbers);
}
drawEmbers();

/* ── TICKER ── */
const track = document.getElementById('ticker');
const words = ['MERCH TOMB','DJAVLAR PRODUCTIONS','LOS ANGELES CA','EST. 2022','MASTERING THE ART OF SOUND'];
[...words,...words].forEach((w,i,arr) => {
    const s = document.createElement('span');
    s.className = 'ticker-item';
    s.textContent = w + (i < arr.length-1 ? '  ·  ' : '');
    track.appendChild(s);
});

/* ── GATE OPEN ── */
const scene   = document.getElementById('gateScene');
const overlay = document.getElementById('redirectOverlay');
const URL     = 'https://djavlarwav.printful.me';

function openGate() {
    if (scene.classList.contains('opening')) return;
    scene.classList.add('opening');
    setTimeout(() => overlay.classList.add('show'), 1000);
    setTimeout(() => {
        window.open(URL, '_blank');
        setTimeout(() => {
            overlay.classList.remove('show');
            scene.classList.remove('opening');
        }, 700);
    }, 1800);
}
scene.addEventListener('click', openGate);
scene.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') openGate(); });
