// CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000
    }).mount();
});

// ANIMEJS
anime.timeline({
    easing: 'easeOutExpo',
})
    .add({
        targets: '#content h2',
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1000
    })
    .add({
        targets: '#content p',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        offset: '-=400'
    });

// GRANIMJS
var headerGradient = new Granim({
    element: '#headerCanvas',
    direction: 'left-right', 
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#FFC0CB', '#FFB6C1'],
                ['#FFDAB9', '#F4C2C2'],
                ['#DCAE96', '#FFF5EE']
            ],
            transitionSpeed: 12000
        }
    }
});

var footerGradient = new Granim({
    element: '#footerCanvas',
    direction: 'left-right', 
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#FFC0CB', '#FFB6C1'],
                ['#FFDAB9', '#F4C2C2'],
                ['#DCAE96', '#FFF5EE']
            ],
            transitionSpeed: 12000
        }
    }
});

// AOS
document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

document.querySelectorAll('#gallery .grid-item').forEach(function (item, index) {
    item.setAttribute('data-aos', 'fade-up');
    item.setAttribute('data-aos-duration', '800');
    item.setAttribute('data-aos-delay', 50 * index); 
});


AOS.init();