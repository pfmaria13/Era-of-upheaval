let btnPage1 = document.querySelector(".button-next");
let page2 = document.querySelector(".page2");
let btnPage2Choice1 = document.querySelector(".button-page2-choice1");
let page3Choice1 = document.querySelector(".page3-choice1");
let btnPage2Choice2 = document.querySelector(".button-page2-choice2");
let page3Choice2 = document.querySelector(".page3-choice2");


btnPage1.addEventListener("click", () => {
    page2.style.display = "flex";
    page2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {document.querySelector(".preface").style.display = "none"},700);
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