$(document).ready(function () {
    let containerEl = document.querySelector('#portfolio-img');
    let mixer = mixitup(containerEl, {
        classNames: {
        block: ""
        }
    });
    const filterToggles = document.querySelectorAll('.portfolio-benefits button');
    const portfolioBigCards = document.querySelectorAll('.portfolio-img_link '); // вс карточки  работ
    for (let i = 0; i < filterToggles.length; i++) {
        filterToggles[i].addEventListener('click', function () {
            if (i == 0) {
                for (let j = 0; j < 2; j++) {
                    portfolioBigCards[j].classList.add('img_link--big')
                }
            } else {
                for (let j = 0; j < 2; j++) {
                    portfolioBigCards[j].classList.remove('img_link--big')
                }
            }
        });
    }
    $('#nav-circle').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
});
})
