/*=========================================
            TYPED JS
=========================================*/

new Typed(".auto-type", {

    strings: [
        "SEO Expert",
        "WordPress Developer",
        "Digital Marketing Specialist",
        "Google Ads Expert"
    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1800,

    loop: true

});


/* Mobile Menu */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

/* Sticky Header */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* Active Menu */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

        navbar.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/* ESC Close */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        navbar.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


/* Outside Click Close */

document.addEventListener("click", (e) => {

    if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {

        navbar.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


AOS.init({
duration:700,
once:true,
offset:80,
disable:"mobile"
});


/*=========================================
PORTFOLIO FILTER
=========================================*/

const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;
        portfolioCards.forEach(card => {
            const show = filter === "all" || card.classList.contains(filter);
            card.classList.toggle("hidden-card", !show);
        });
    });
});



/*=========================================
CONTACT FORM
=========================================*/

const contactForm=document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{
e.preventDefault();

const button=contactForm.querySelector("button");
const originalText=button.innerHTML;

button.innerHTML='Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
button.disabled=true;

setTimeout(()=>{
button.innerHTML='Message Sent <i class="fa-solid fa-check"></i>';
contactForm.reset();

setTimeout(()=>{
button.innerHTML=originalText;
button.disabled=false;
},2000);

},1200);
});




document.querySelectorAll("img").forEach(img=>{
if(!img.closest(".hero-section")){
img.loading="lazy";
img.decoding="async";
}
});