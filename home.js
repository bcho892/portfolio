const toTop = () => { window.scrollTo(0, 0) };

const toAbout = () => { document.getElementById("about").scrollIntoView() };
const aboutSection = document.getElementById("abouttrail");
const skillsSection = document.getElementById("skillstrail");
const projectsSection = document.getElementById("projectstrail");
const contactSection = document.getElementById("contacttrail");
const mobileMenu = document.getElementById("actions");
const menuIcon = document.getElementById("hamburger");

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

document.addEventListener('scroll', () => {
    growTrail(aboutSection);
    growTrail(skillsSection)
    growTrail(projectsSection);
    growTrail(contactSection);
})