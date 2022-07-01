const toTop = () => { window.scrollTo(0, 0) };

const toAbout = () => { document.getElementById("about").scrollIntoView() };
const aboutSection = document.getElementById("abouttrail");
const skillsSection = document.getElementById("skillstrail");
const projectsSection = document.getElementById("projectstrail");
const contactSection = document.getElementById("contacttrail");
const mobileMenu = document.getElementById("actions");
const menuIcon = document.getElementById("hamburger");
const loadingBar = document.getElementById("progressbar");

const getScrollPercentage = () => {
    return window.scrollY / (document.body.offsetHeight - window.innerHeight);   
} // adapted from https://stackoverflow.com/questions/51364669/get-scroll-percentage-between-0-and-1-when-scrolling

const isInView = (element) => {
    return element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom >= 0;
}

const growTrail = (element) => {
    if (isInView(element)) element.classList.add("inview");
}

const toggleMenu = () => {
    mobileMenu.classList.toggle("menuopen");
    menuIcon.classList.toggle("menuopen");
}

const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
}

document.addEventListener('scroll', () => {
    growTrail(aboutSection);
    growTrail(skillsSection)
    growTrail(projectsSection);
    growTrail(contactSection);
    loadingBar.style.width = 100 * getScrollPercentage() + "%";
})

