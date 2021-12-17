const mobile_menu_button = document.querySelector('.ham_close_button');
const hamburger = document.querySelector('.hamburger');
const close_button = document.querySelector('.close_button');
const nav_bar = document.querySelector('.main-nav');

mobile_menu_button.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    close_button.classList.toggle('active');
    nav_bar.classList.toggle('active');
})


document.addEventListener('click', (e)=>{
    const clickeddropdown = e.target.matches("[dropdown-button]");
    if(!clickeddropdown && e.target.closest("[dropdown]") != null) return

    let currentdropdown;

    if(clickeddropdown){
        currentdropdown = e.target.closest("[dropdown]");
        currentdropdown.classList.toggle('active');
    }

    const dropdowns = document.querySelectorAll('.dropdown.active');
    dropdowns.forEach(drop => {
        if(drop === currentdropdown) return;
        drop.classList.remove('active');
    })
})