function showPage(pageId){

    document.querySelectorAll('.page').forEach(page=>{
        page.classList.remove('active');
    });

    document.querySelectorAll('nav button').forEach(button=>{
        button.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    const activeButton = document.querySelector(
        `nav button[onclick*="${pageId}"]`
    );

    if(activeButton){
        activeButton.classList.add('active');
    }

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
}

document.addEventListener('DOMContentLoaded',()=>{

    document.getElementById('home').classList.add('active');

    const homeBtn = document.querySelector(
        `nav button[onclick*="home"]`
    );

    if(homeBtn){
        homeBtn.classList.add('active');
    }

});
