let preface = document.querySelector(".preface");
let btnPreface = document.querySelector(".button-page1");
let page2 = document.querySelector(".page2");
let btnPage2Choice1 = document.querySelector(".page2-choice1");
let btnPage2Choice2 = document.querySelector(".page2-choice2");
let btnPage2Choice3 = document.querySelector(".page2-choice3");
let page3Choice1 = document.querySelector(".page3-choice1");
let page3Choice2 = document.querySelector(".page3-choice2");
let page3Choice3 = document.querySelector(".page3-choice3");

let li1 = document.querySelector('.li1');
let li2 = document.querySelector('.li2');
let li3 = document.querySelector('.li3');
let li4 = document.querySelector('.li4');
let li5 = document.querySelector('.li5');
let li6 = document.querySelector('.li6');
let li7 = document.querySelector('.li7');
let li8 = document.querySelector('.li8');
let li9 = document.querySelector('.li9');
let li10 = document.querySelector('.li10');

function Change_bar(li, lastClass, newClass) {
    li.className += newClass;
    li.classList.remove(lastClass);
}

btnPreface.addEventListener("click", () => {
    page2.style.display = "flex";
    page2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {preface.style.display = "none"},700);
    Change_bar(li1, 'is-active', ' is-complete')
    Change_bar(li2, 'in-progress', ' is-active');
    li3.className += ' in-progress'
});

btnPage2Choice1.addEventListener("click", () => {
    page3Choice1.style.display = "flex";
    page3Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page2.style.display = "none"},700);
});

btnPage2Choice2.addEventListener("click", () => {
    page3Choice2.style.display = "flex";
    page3Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page2.style.display = "none"},700);
});

btnPage2Choice3.addEventListener("click", () => {
    page3Choice3.style.display = "flex";
    page3Choice3.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page2.style.display = "none"},700);
});