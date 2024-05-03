const parallax_el = document.querySelectorAll('.parallax');
let timeline = gsap.timeline();

Array.from(parallax_el)
.filter(el => !el.classList.contains("text"))
.forEach((el) => {
    timeline.from(
    el, 
    {
    top: `${el.offsetHeight + +el.dataset.distance}px`,
    duration: 3.5,
    ease: "power3.out",
    },
    "0"
    );
});
timeline.from(
    ".first-title", 
    {
    left: `${document.querySelector(".first-title").offsetWidth + +document.querySelector(".first-title").dataset.distance}px`,
    duration: 2,
    },
    "0.3"
);
timeline.from(
    ".second-title", 
    {
    left: `${document.querySelector(".second-title").offsetWidth + +document.querySelector(".second-title").dataset.distance}px`,
    duration: 2,
    },
    "0.3"
);



const hiddenelements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

hiddenelements.forEach((el) => observer.observe(el));