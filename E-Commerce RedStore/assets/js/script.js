const list = document.querySelector('#list');
const menu = document.querySelector('.menu').addEventListener('click', () => {
    menuMobile();
});


list.style.height = '0px';

function menuMobile() {
    if (list.style.height === '0px') {
        list.style.height = '200px';
    } else {
        list.style.height = '0px';
    }

}





