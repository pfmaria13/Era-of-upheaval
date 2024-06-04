let preface = document.querySelector(".preface");
let btnPreface = document.querySelector(".button-page1");
let page2 = document.querySelector(".page2");
let btnPage2Choice1 = document.querySelector(".page2-choice1");
let btnPage2Choice2 = document.querySelector(".page2-choice2");
let btnPage2Choice3 = document.querySelector(".page2-choice3");
let page3Choice1 = document.querySelector(".page3-choice1");
let page3Choice2 = document.querySelector(".page3-choice2");
let page3Choice3 = document.querySelector(".page3-choice3");
let btnPage3Choice1 = document.querySelector(".button-page3-choice1");
let btnPage3Choice2 = document.querySelector(".button-page3-choice2");
let btnPage3Choice3 = document.querySelector(".button-page3-choice3");
let page4 = document.querySelector(".page4");
let btnPage4Choice1 = document.querySelector(".button-page4-choice1");
let btnPage4Choice2 = document.querySelector(".button-page4-choice2");
let page5Choice1 = document.querySelector(".page5-choice1");
let page5Choice2 = document.querySelector(".page5-choice2");
let btnPage5Choice1 = document.querySelector(".button-page5-choice1");
let btnPage5Choice2 = document.querySelector(".button-page5-choice2");
let page6 = document.querySelector(".page6");
let btnPage6Choice1 = document.querySelector(".button-page6-choice1");
let btnPage6Choice2 = document.querySelector(".button-page6-choice2");
let btnPage6Choice3 = document.querySelector(".button-page6-choice3");
let page7Choice1 = document.querySelector(".page7-choice1");
let page7Choice2 = document.querySelector(".page7-choice2");
let page7Choice3 = document.querySelector(".page7-choice3");
let btnPage7Choice1 = document.querySelector(".button-page7-choice1");
let btnPage7Choice2 = document.querySelector(".button-page7-choice2");
let btnPage7Choice3 = document.querySelector(".button-page7-choice3");
let page8 = document.querySelector(".page8");

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

btnPage3Choice1.addEventListener("click", () => {
    page4.style.display = "flex";
    page4.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page3Choice1.style.display = "none"},700);
    Change_bar(li2, 'is-active', ' is-complete')
    Change_bar(li3, 'in-progress', ' is-active');
    li4.className += ' in-progress'
});

btnPage3Choice2.addEventListener("click", () => {
    page4.style.display = "flex";
    page4.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page3Choice2.style.display = "none"},700);
    Change_bar(li2, 'is-active', ' is-complete');
    Change_bar(li3, 'in-progress', ' is-active');
    li4.className += ' in-progress';
});

btnPage3Choice3.addEventListener("click", () => {
    page4.style.display = "flex";
    page4.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page3Choice3.style.display = "none"},700);
    Change_bar(li2, 'is-active', ' is-complete');
    Change_bar(li3, 'in-progress', ' is-active');
    li4.className += ' in-progress';
});

btnPage4Choice1.addEventListener("click", () => {
    page5Choice1.style.display = "flex";
    page5Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page4.style.display = "none"},700);
});

btnPage4Choice2.addEventListener("click", () => {
    page5Choice2.style.display = "flex";
    page5Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page4.style.display = "none"},700);
});

btnPage5Choice1.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page5Choice1.style.display = "none"},700);
    li4.classList.remove('in-progress');
    li3.classList.remove('is-active');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});

btnPage5Choice2.addEventListener("click", () => {
    page6.style.display = "flex";
    page6.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page5Choice2.style.display = "none"},700);
    Change_bar(li3, 'is-active', ' is-complete');
    Change_bar(li4, 'in-progress', ' is-active');
    li5.className += ' in-progress';
});

btnPage6Choice1.addEventListener("click", () => {
    page7Choice1.style.display = "flex";
    page7Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page6.style.display = "none"},700);
});

btnPage6Choice2.addEventListener("click", () => {
    page7Choice2.style.display = "flex";
    page7Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page6.style.display = "none"},700);
});

btnPage6Choice3.addEventListener("click", () => {
    page7Choice3.style.display = "flex";
    page7Choice3.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page6.style.display = "none"},700);
});

btnPage7Choice1.addEventListener("click", () => {
    page8.style.display = "flex";
    page8.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page7Choice1.style.display = "none"},700);
    Change_bar(li4, 'is-active', ' is-complete');
    Change_bar(li5, 'in-progress', ' is-active');
    li6.className += ' in-progress';
});

btnPage7Choice2.addEventListener("click", () => {
    page8.style.display = "flex";
    page8.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page7Choice2.style.display = "none"},700);
    Change_bar(li4, 'is-active', ' is-complete');
    Change_bar(li5, 'in-progress', ' is-active');
    li6.className += ' in-progress';
});

btnPage7Choice3.addEventListener("click", () => {
    page8.style.display = "flex";
    page8.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page7Choice3.style.display = "none"},700);
    Change_bar(li4, 'is-active', ' is-complete');
    Change_bar(li5, 'in-progress', ' is-active');
    li6.className += ' in-progress';
});