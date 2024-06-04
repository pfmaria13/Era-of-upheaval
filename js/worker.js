let preface = document.querySelector(".preface");
let btnPage1 = document.querySelector(".button-page1");
let page2 = document.querySelector(".page2");
let btnPage2Choice1 = document.querySelector(".page2-choice1");
let btnPage2Choice2 = document.querySelector(".page2-choice2");
let page3Choice1 = document.querySelector(".page3-choice1");
let page3Choice2 = document.querySelector(".page3-choice2");
let btnPage3Choice1 = document.querySelector(".button-page3-choice1");
let btnPage3Choice2 = document.querySelector(".button-page3-choice2");
let page4 = document.querySelector(".page4");

let btnPage4Choice1 = document.querySelector(".button-page4-choice1");
let btnPage4Choice2 = document.querySelector(".button-page4-choice1");
let page5Choice1 = document.querySelector(".page5-choice1");
let page5Choice2 = document.querySelector(".page5-choice2");

let btnPage5Choice1 = document.querySelector(".button-page5-choice1");
let btnPage5Choice2 = document.querySelector(".button-page5-choice2");
let page6 = document.querySelector(".page6");
let btnPage6Choice1 = document.querySelector(".page6-choice1");
let btnPage6Choice2 = document.querySelector(".page6-choice2");
let page7Choice1 = document.querySelector(".page7-choice1");
let page7Choice2 = document.querySelector(".page7-choice2");
let btnPage7Choice1 = document.querySelector(".button-page7-choice1");
let btnPage7Choice2 = document.querySelector(".button-page7-choice2");
let page8 = document.querySelector(".page8");
let btnPage8Choice1 = document.querySelector(".page8-choice1");
let btnPage8Choice2 = document.querySelector(".page8-choice2");
let page9Choice1 = document.querySelector(".page9-choice1");
let page9Choice2 = document.querySelector(".page9-choice2");
let btnPage9Choice1 = document.querySelector(".button-page9-choice1");
let btnPage9Choice2 = document.querySelector(".button-page9-choice2");
let page10 = document.querySelector(".page10");
let btnPage10Choice1 = document.querySelector(".page10-choice1");
let btnPage10Choice2 = document.querySelector(".page10-choice2");
let page11Choice1 = document.querySelector(".page11-choice1");
let page11Choice2 = document.querySelector(".page11-choice2");
let btnPage11Choice1 = document.querySelector(".button-page11-choice1");
let btnPage11Choice2 = document.querySelector(".button-page11-choice2");
let page12 = document.querySelector(".page12");
let btnPage12Choice1 = document.querySelector(".page12-choice1");
let btnPage12Choice2 = document.querySelector(".page12-choice2");
let page13Choice1 = document.querySelector(".page13-choice1");
let page13Choice2 = document.querySelector(".page13-choice2");
let btnPage13Choice1 = document.querySelector(".button-page13-choice1");
let btnPage13Choice2 = document.querySelector(".button-page13-choice2");
let page14 = document.querySelector(".page14");
let btnPage14Choice1 = document.querySelector(".page14-choice1");
let btnPage14Choice2 = document.querySelector(".page14-choice2");
let page15Choice1 = document.querySelector(".page15-choice1");
let page15Choice2 = document.querySelector(".page15-choice2");
let btnPage15Choice1 = document.querySelector(".button-page15-choice1");
let btnPage15Choice2 = document.querySelector(".button-page15-choice2");
let page16 = document.querySelector(".page16");
let btnPage16Choice1 = document.querySelector(".page16-choice1");
let btnPage16Choice2 = document.querySelector(".page16-choice2");
let page17Choice1 = document.querySelector(".page17-choice1");
let page17Choice2 = document.querySelector(".page17-choice2");
let btnPage17Choice1 = document.querySelector(".button-page17-choice1");
let btnPage17Choice2 = document.querySelector(".button-page17-choice2");
let page18 = document.querySelector(".page18");


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

btnPage1.addEventListener("click", () => {
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

btnPage4Choice1.addEventListener("click", () => {
    page5Choice1.style.display = "flex";
    page5Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page4.style.display = "none"},700);
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
    Change_bar(li2, 'is-active', ' is-complete')
    Change_bar(li3, 'in-progress', ' is-active');
    li4.className += ' in-progress'
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
    Change_bar(li3, 'is-active', ' is-complete')
    Change_bar(li4, 'in-progress', ' is-active');
    li5.className += ' in-progress'
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

btnPage7Choice1.addEventListener("click", () => {
    page8.style.display = "flex";
    page8.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page7Choice1.style.display = "none"},700);
    Change_bar(li4, 'is-active', ' is-complete')
    Change_bar(li5, 'in-progress', ' is-active');
    li6.className += ' in-progress'
});
btnPage7Choice2.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page7Choice2.style.display = "none"},700);
    li5.classList.remove('in-progress')
    li4.classList.remove('is-active');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active')
});

btnPage8Choice1.addEventListener("click", () => {
    page9Choice1.style.display = "flex";
    page9Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page8.style.display = "none"},700);
});

btnPage8Choice2.addEventListener("click", () => {
    page9Choice2.style.display = "flex";
    page9Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page8.style.display = "none"},700);
});

btnPage9Choice1.addEventListener("click", () => {
    page10.style.display = "flex";
    page10.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page9Choice1.style.display = "none"},700);
    Change_bar(li5, 'is-active', ' is-complete')
    Change_bar(li6, 'in-progress', ' is-active');
    li7.className += ' in-progress'
});

btnPage9Choice2.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page9Choice2.style.display = "none"},700);
    li6.classList.remove('in-progress')
    li5.classList.remove('is-active');
    li4.classList.remove('is-complete');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});

btnPage10Choice1.addEventListener("click", () => {
    page11Choice1.style.display = "flex";
    page11Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page10.style.display = "none"},700);
});

btnPage10Choice2.addEventListener("click", () => {
    page11Choice2.style.display = "flex";
    page11Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page10.style.display = "none"},700);
});

btnPage11Choice1.addEventListener("click", () => {
    page12.style.display = "flex";
    page12.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page11Choice1.style.display = "none"},700);
    Change_bar(li6, 'is-active', ' is-complete')
    Change_bar(li7, 'in-progress', ' is-active');
    li8.className += ' in-progress'
});

btnPage11Choice2.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page11Choice2.style.display = "none"},700);
    li7.classList.remove('in-progress');
    li6.classList.remove('is-active');
    li5.classList.remove('is-complete');
    li4.classList.remove('is-complete');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});

btnPage12Choice1.addEventListener("click", () => {
    page13Choice1.style.display = "flex";
    page13Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page12.style.display = "none"},700);
});

btnPage12Choice2.addEventListener("click", () => {
    page13Choice2.style.display = "flex";
    page13Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page12.style.display = "none"},700);
});

btnPage13Choice1.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page13Choice1.style.display = "none"},700);
    li8.classList.remove('in-progress');
    li7.classList.remove('is-active');
    li6.classList.remove('is-complete');
    li5.classList.remove('is-complete');
    li4.classList.remove('is-complete');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});

btnPage13Choice2.addEventListener("click", () => {
    page14.style.display = "flex";
    page14.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page13Choice1.style.display = "none"},700);
    Change_bar(li7, 'is-active', ' is-complete')
    Change_bar(li8, 'in-progress', ' is-active');
    li9.className += ' in-progress'
});

btnPage14Choice1.addEventListener("click", () => {
    page15Choice1.style.display = "flex";
    page15Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page14.style.display = "none"},700);
});

btnPage14Choice2.addEventListener("click", () => {
    page15Choice2.style.display = "flex";
    page15Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page14.style.display = "none"},700);
});

btnPage15Choice1.addEventListener("click", () => {
    page16.style.display = "flex";
    page16.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page15Choice1.style.display = "none"},700);
    Change_bar(li8, 'is-active', ' is-complete')
    Change_bar(li9, 'in-progress', ' is-active');
    li10.className += ' in-progress'
});

btnPage15Choice2.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page15Choice2.style.display = "none"},700);
    li9.classList.remove('in-progress');
    li8.classList.remove('is-active');
    li7.classList.remove('is-complete');
    li6.classList.remove('is-complete');
    li5.classList.remove('is-complete');
    li4.classList.remove('is-complete');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});

btnPage16Choice1.addEventListener("click", () => {
    page17Choice1.style.display = "flex";
    page17Choice1.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page16.style.display = "none"},700);
});

btnPage16Choice2.addEventListener("click", () => {
    page17Choice2.style.display = "flex";
    page17Choice2.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page16.style.display = "none"},700);
});

btnPage17Choice1.addEventListener("click", () => {
    page18.style.display = "flex";
    page18.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page15Choice1.style.display = "none"},700);
    Change_bar(li9, 'is-active', ' is-complete')
    Change_bar(li10, 'in-progress', ' is-active');
});

btnPage17Choice2.addEventListener("click", () => {
    page18.style.display = "flex";
    page18.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page17Choice2.style.display = "none"},700);
    Change_bar(li9, 'is-active', ' is-complete')
    Change_bar(li10, 'in-progress', ' is-active');
});

