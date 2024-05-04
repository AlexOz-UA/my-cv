let loader = document.getElementsByClassName('components__loader')[0];
let loaderBg = document.getElementsByClassName('components__loader__bg')[0];

let hideLoader = () => {
    setTimeout(() => {
        loader.classList.add('loader__hidden');
        loaderBg.classList.add('loader__hidden');
    }, 1000);
}

let changeScreen = (e) => {
    loader.classList.add('change__screen__show');
    loaderBg.classList.add('change__screen__show');
    setTimeout(() => {
       window.location.pathname = `my-cv/${e.id}`;
    }, 1500);
}

