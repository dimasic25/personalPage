let slider = new Swiper('.image-slider', {
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',

        clickable: true,
        dynamicBullets: true,
    },
});

let sliderBlock = document.querySelector('.image-slider');

sliderBlock.addEventListener("mouseenter", function (e) {
    slider.params.autoplay.disableOnInteraction = true;
    slider.params.autoplay.delay = 1000;
    slider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
    slider.autoplay.stop();
})