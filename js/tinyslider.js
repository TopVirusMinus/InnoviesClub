// Configuration
const visibleItems = 5;
const speed = 200; // pixels per second

// Initialize the slider
const slider = initializeSlider(visibleItems);

// Set up continuous scrolling
const sliderInfo = slider.getInfo();
const slideItems = sliderInfo.slideItems;
const container = sliderInfo.container;
const clones = createClones(container);
container.parentNode.appendChild(clones);
const totalWidth = getTotalWidth(slideItems);

// Initialize position and time
let position = 0;
let lastTime = performance.now();

// Update the slider position using requestAnimationFrame
requestAnimationFrame(updateSlider);

function initializeSlider(visibleItems) {
    return tns({
        container: '.my-slider',
        items: visibleItems,
        autoplay: false,
        loop: true,
        controls: false,
        autoplayButtonOutput: false,
        nav: false,
        mouseDrag: false,
        touch: false,
        responsive: {
        1000: { 
            items: 5,
        },
        480: { 
            items: 3,
        },
        480: {
            items: 3,
        },
        320: { // Screen width: 320px
            items: 3,
        },
    },
    });
}

function createClones(container) {
    const clones = container.cloneNode(true);
    clones.classList.remove('my-slider');
    return clones;
}

function getTotalWidth(slideItems) {
    return slideItems.length * slideItems[0].offsetWidth;
}

function updateSlider(time) {
    const elapsed = time - lastTime;
    position = updatePosition(position, elapsed, speed, totalWidth);

    container.style.transform = `translateX(${position}px)`;
    clones.style.transform = `translateX(${position + totalWidth}px)`;

    lastTime = time;
    requestAnimationFrame(updateSlider);
}

function updatePosition(position, elapsed, speed, totalWidth) {
    position -= (speed * elapsed) / 1000;
    position %= totalWidth;
    return position;
}
