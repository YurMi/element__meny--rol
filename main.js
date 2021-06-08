let arrow = document.querySelector('.arr');
let navigation = document.querySelector('.navigation');


if (arrow) {
    arrow.addEventListener('click', function () {
        arrow.classList.toggle('active');
        navigation.classList.toggle('active');
    })
}