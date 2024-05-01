let loader = document.getElementsByClassName('loader')[0];
let loaderBg = document.getElementsByClassName('loader__bg')[0];
let contentBox = document.getElementsByClassName('content')[0];
let navbar = document.getElementsByClassName('navbar')[0].clientHeight;
let footer = document.getElementsByClassName('footer')[0].clientHeight;

contentBox.style.height = `calc(100dvh - ${navbar}px - ${footer}px)`

let hideLoader = () => {
    setTimeout(() => {
        loader.classList.add('loader__hidden');
        loaderBg.classList.add('loader__hidden');
    }, 1500);
}

let changeScreen = (e) => {
    loader.classList.add('change__screen__show');
    loaderBg.classList.add('change__screen__show');
    setTimeout(() => {
       window.location.pathname = `./components/${e.id}`;
    }, 1500);
}
