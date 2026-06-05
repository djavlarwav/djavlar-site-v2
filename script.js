function showPage(pageId){

    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('nav button');

    pages.forEach(page=>{
        page.classList.remove('active');
    });

    buttons.forEach(btn=>{
        btn.classList.remove('active');
    });

    document
        .getElementById(pageId)
        .classList.add('active');

    const activeButton = [...buttons].find(
        btn =>
        btn.textContent.toLowerCase() === pageId
    );

    if(activeButton){
        activeButton.classList.add('active');
    }

}

document.addEventListener('DOMContentLoaded',()=>{

    const homeButton = [...document.querySelectorAll('nav button')]
        .find(btn=>btn.textContent==="HOME");

    if(homeButton){
        homeButton.classList.add('active');
    }

});
