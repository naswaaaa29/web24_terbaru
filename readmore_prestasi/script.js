// Efek Parallax 
document.addEventListener("scroll", function () {
    const scrollPos = window.pageYOffset;
    const parallaxContent = document.querySelector(".parallax-container");

    parallaxContent.style.backgroundPositionY = `${scrollPos * 0.5}px`;
});