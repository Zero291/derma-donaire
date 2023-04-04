
const menuIcono = document.querySelector('.menu-icon-container');
const menu = document.querySelector('.menu');


menuIcono.addEventListener('click', toggleMenu);


function toggleMenu(){
    const isMenuClosed = menu.classList.contains('inactive');

    if(isMenuClosed === true){
        menu.classList.remove('inactive');
    }else{
        menu.classList.add('inactive')
    }
}


