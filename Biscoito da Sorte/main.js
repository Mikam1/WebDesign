const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const openedCookie = document.querySelector('.fortune-cookie');
const btnAgain = document.querySelector('.btnAgain');

openedCookie.addEventListener('click', openCookie);
btnAgain.addEventListener('click', openAnother);

function openCookie(){
    toggleScreen();
    setTimeout(() => {
        const openedCookiePosition = document.querySelector('.opened-cookie').getBoundingClientRect();
        const pElement = document.querySelector('.screen2 p');
        const pPosition = pElement.getBoundingClientRect();
        const xOffset = openedCookiePosition.left - pPosition.left;
        const yOffset = openedCookiePosition.top - pPosition.top;
        pElement.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        pElement.classList.add('scaleFromCookie');
    }, 0);
}

function openAnother(){
    toggleScreen();
    const pElement = document.querySelector('.screen2 p');
    pElement.classList.remove('scaleFromCookie');
}

function toggleScreen(){
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}