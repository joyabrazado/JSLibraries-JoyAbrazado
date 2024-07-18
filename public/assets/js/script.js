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
    duration: 800
})
.add({
    targets: '#content p', 
    opacity: [0, 1],
    translateY: [50, 0], 
    duration: 800,
    offset: '-=400' 
});