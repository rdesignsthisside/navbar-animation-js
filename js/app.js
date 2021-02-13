const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradient = [
    'linear-gradient(to right top, #F1F2B5,#135058)',

    'linear-gradient(to right top, #D1913C,#FFD194)',

    'linear-gradient(to right top, #7b4397,#dc2430)',

    'linear-gradient(to right top, #136a8a,#267871)'

];

const options = {
    threshold: 0.65
};



let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = gradient[gradientIndex];
        }
    });
};

sections.forEach(section => {
    observer.observe(section);
});
