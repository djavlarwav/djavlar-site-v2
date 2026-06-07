function showPage(pageId, button){

    // Hide all pages
    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    // Remove active nav underline
    document.querySelectorAll(".nav-btn").forEach(btn=>{
        btn.classList.remove("active");
    });

    // Show selected page
    document
        .getElementById(pageId)
        .classList
        .add("active");

    // Activate nav button
    if(button){
        button.classList.add("active");
    }

    // Instantly return to top
    window.scrollTo(0,0);
}


// Make HOME active when website loads

document.addEventListener("DOMContentLoaded",()=>{

    document
        .getElementById("home")
        .classList
        .add("active");

    const homeButton =
    document.querySelector(".nav-btn");

    if(homeButton){
        homeButton.classList.add("active");
    }

});
/* ================================= */
/* FLOATING RUNES                    */
/* ================================= */

const runeSymbols=[

"☽",
"☾",
"✦",
"✧",
"✶",
"ᚠ",
"ᛉ",
"ᛟ"

];

const runeContainer=
document.getElementById(
"rune-container"
);

for(let i=0;i<18;i++){

    let rune=
    document.createElement(
    "div"
    );

    rune.className=
    "rune";

    rune.innerHTML=

    runeSymbols[
    Math.floor(
    Math.random()*
    runeSymbols.length
    )];

    rune.style.left=
    Math.random()*100+
    "vw";

    rune.style.animationDuration=

    20+
    Math.random()*25+
    "s";

    rune.style.fontSize=

    20+
    Math.random()*30+
    "px";

    runeContainer
    .appendChild(
    rune
    );

}

/* ================================= */
/* CURSOR LIGHT                      */
/* ================================= */

const cursorLight=

document.getElementById(
"cursor-light"
);

document.addEventListener(

"mousemove",

function(e){

    cursorLight.style.left=
    e.clientX+"px";

    cursorLight.style.top=
    e.clientY+"px";

}

);
/* ===================================== */
/* PARALLAX                              */
/* ===================================== */

document.addEventListener(

"mousemove",

function(e){

    let x=

    (e.clientX/
    window.innerWidth-.5);

    let y=

    (e.clientY/
    window.innerHeight-.5);

    document
    .getElementById(
    "layer1"
    )

    .style.transform=

    `translate(
    ${x*20}px,
    ${y*20}px)`;

    document
    .getElementById(
    "layer2"
    )

    .style.transform=

    `translate(
    ${x*40}px,
    ${y*40}px)`;

});
/* ===================================== */
/* ENERGY VEINS                          */
/* ===================================== */

const canvas=

document.getElementById(
"energy-field"
);

const ctx=

canvas.getContext("2d");

canvas.width=
window.innerWidth;

canvas.height=
window.innerHeight;

function vein(){

    ctx.clearRect(

    0,
    0,

    canvas.width,

    canvas.height

    );

    let x=
    Math.random()*
    canvas.width;

    let y=
    Math.random()*
    canvas.height;

    ctx.beginPath();

    ctx.moveTo(x,y);

    for(let i=0;i<12;i++){

        x+=
        Math.random()*80
        -40;

        y+=
        Math.random()*80
        -40;

        ctx.lineTo(
        x,
        y
        );

    }

    ctx.strokeStyle=

    "rgba(255,49,49,.18)";

    ctx.lineWidth=2;

    ctx.stroke();

}

setInterval(
vein,
2200
);
