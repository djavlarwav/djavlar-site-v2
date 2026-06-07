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
