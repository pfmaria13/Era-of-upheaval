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

let preface = document.querySelector(".preface");
let btnPreface = document.querySelector(".button-page1");
let page2 = document.querySelector(".page2");
let btnPage2Choice1 = document.querySelector(".button-page2-choice1");
let btnPage2Choice2 = document.querySelector(".button-page2-choice2");
let btnPage2Choice3 = document.querySelector(".button-page2-choice3");
let page3Choice1 = document.querySelector(".page3-choice1");
let page3Choice2 = document.querySelector(".page3-choice2");
let page3Choice3 = document.querySelector(".page3-choice3");
let btnPage3Choice1 = document.querySelector(".button-page3-choice1");
let btnPage3Choice2 = document.querySelector(".button-page3-choice2");
let btnPage3Choice3 = document.querySelector(".button-page3-choice3");

function Change_bar(li, lastClass, newClass) {
    li.className += newClass;
    li.classList.remove(lastClass);
}

function NextPage (btn, nextPage, previousPage) {
    btn.addEventListener("click", () => {
        nextPage.style.display = "flex";
        nextPage.scrollIntoView({ block: "center", behavior: "smooth" });
        setTimeout(() => {previousPage.style.display = "none"},700);
    });
}

function NextPageWithBar (btn, nextPage, previousPage, li1, li2, li3) {
    btn.addEventListener("click", () => {
        nextPage.style.display = "flex";
        nextPage.scrollIntoView({ block: "center", behavior: "smooth" });
        setTimeout(() => {previousPage.style.display = "none"},700);
        Change_bar(li1, 'is-active', ' is-complete')
        Change_bar(li2, 'in-progress', ' is-active');
        li3.className += ' in-progress'
    });
}

NextPageWithBar(btnPreface, page2, preface, li1, li2, li3);

NextPage(btnPage2Choice1, page3Choice1, page2);
NextPage(btnPage2Choice2, page3Choice2, page2);
NextPage(btnPage2Choice3, page3Choice3, page2);

btnPage3Choice3.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page3Choice3.style.display = "none"},700);
    li3.classList.remove('in-progress');
    Change_bar(li2, 'is-active', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});