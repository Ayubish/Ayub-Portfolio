
const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle");
function dark() {
    body.classList.toggle("darkBody");
    toggleBtn.classList.toggle("fa-toggle-off");
    toggleBtn.classList.toggle("fa-toggle-on");
}

const boxes = document.querySelectorAll(".animate");
const checkBoxes = ()=> {
    const triggerBottom = (window.innerHeight/5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show");
    });
};
window.addEventListener("scroll", checkBoxes);
checkBoxes()
const empty = document.querySelector(".empty");
const mobileMenu = document.querySelector(".menu-container");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
toggleMobile = () => {
    mobileMenu.classList.toggle("d-none-mobile");
    empty.classList.toggle("d-none");
};
bars.addEventListener('click', toggleMobile);
xmark.addEventListener('click', toggleMobile);
empty.addEventListener('click', toggleMobile);



