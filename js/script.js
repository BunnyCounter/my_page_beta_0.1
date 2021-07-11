document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('navigation__active');
});

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__burger').classList.toggle('burger__active');
});