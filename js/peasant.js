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
let page7Choice1 = document.querySelector(".page7-choice1");
let page7Choice2 = document.querySelector(".page7-choice2");
let btnPage7Choice1 = document.querySelector(".button-page7-choice1");
let btnPage7Choice2 = document.querySelector(".button-page7-choice2");
let page8 = document.querySelector(".page8");
let btnPage8Choice1 = document.querySelector(".button-page8-choice1");
let btnPage8Choice2 = document.querySelector(".button-page8-choice2");
let page9Choice1 = document.querySelector(".page9-choice1");
let page9Choice2 = document.querySelector(".page9-choice2");
let btnPage9Choice1 = document.querySelector(".button-page9-choice1");
let btnPage9Choice2 = document.querySelector(".button-page9-choice2");
let page10 = document.querySelector(".page10");
let btnPage10Choice1 = document.querySelector(".button-page10-choice1");
let btnPage10Choice2 = document.querySelector(".button-page10-choice2");
let page11Choice1 = document.querySelector(".page11-choice1");
let page11Choice2 = document.querySelector(".page11-choice2");
let btnPage11Choice1 = document.querySelector(".button-page11-choice1");
let btnPage11Choice2 = document.querySelector(".button-page11-choice2");
let page12 = document.querySelector(".page12");
let btnPage12Choice1 = document.querySelector(".button-page12-choice1");
let btnPage12Choice2 = document.querySelector(".button-page12-choice2");
let page13Choice1 = document.querySelector(".page13-choice1");
let page13Choice2 = document.querySelector(".page13-choice2");
let btnPage13Choice1 = document.querySelector(".button-page13-choice1");
let btnPage13Choice2 = document.querySelector(".button-page13-choice2");
let page14 = document.querySelector(".page14");
let btnPage14Choice1 = document.querySelector(".button-page14-choice1");
let btnPage14Choice2 = document.querySelector(".button-page14-choice2");
let btnPage14Choice3 = document.querySelector(".button-page14-choice3");
let page15Choice1 = document.querySelector(".page15-choice1");
let page15Choice2 = document.querySelector(".page15-choice2");
let page15Choice3 = document.querySelector(".page15-choice3");
let btnPage15Choice1 = document.querySelector(".button-page15-choice1");
let btnPage15Choice2 = document.querySelector(".button-page15-choice2");
let btnPage15Choice3 = document.querySelector(".button-page15-choice3");
let page16 = document.querySelector(".page16");
let btnPage16Choice1 = document.querySelector(".button-page16-choice1");
let btnPage16Choice2 = document.querySelector(".button-page16-choice2");
let page17Choice1 = document.querySelector(".page17-choice1");
let page17Choice2 = document.querySelector(".page17-choice2");
let btnPage17Choice1 = document.querySelector(".button-page17-choice1");
let btnPage17Choice2 = document.querySelector(".button-page17-choice2");
let page18 = document.querySelector(".page18");
let btnPage18Choice1 = document.querySelector(".more-lit");
let moreLit = document.querySelector(".more-lit-page");
let btnMoreLit = document.querySelector(".more-let-btn");



function Change_bar(li, lastClass, newClass) {
    li.className += newClass;
    li.classList.remove(lastClass);
}

function NextPage (btn, nextPage, previousPage) {
    btn.addEventListener("click", () => {
        nextPage.style.display = "flex";
        nextPage.scrollIntoView({ block: "center", behavior: "smooth" });
        setTimeout(() => {previousPage.style.display = "none"},600);
    });
}

function NextPageWithBar (btn, nextPage, previousPage, li1, li2, li3) {
    btn.addEventListener("click", () => {
        nextPage.style.display = "flex";
        nextPage.scrollIntoView({ block: "center", behavior: "smooth" });
        setTimeout(() => {previousPage.style.display = "none"},600);
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

NextPageWithBar(btnPage3Choice1, page4, page3Choice1, li2, li3, li4);
NextPageWithBar(btnPage3Choice2, page4, page3Choice2, li2, li3, li4);

NextPage(btnPage4Choice1, page5Choice1, page4);
NextPage(btnPage4Choice2, page5Choice2, page4)

NextPageWithBar(btnPage5Choice1, page6, page5Choice1, li3, li4, li5);
NextPageWithBar(btnPage5Choice2, page6, page5Choice2, li3, li4, li5);

NextPage(btnPage6Choice1, page7Choice1, page6);
NextPage(btnPage6Choice2, page7Choice2, page6);

NextPageWithBar(btnPage7Choice1, page8, page7Choice1, li4, li5, li6);
NextPageWithBar(btnPage7Choice2, page8, page7Choice2, li4, li5, li6);

NextPage(btnPage8Choice1, page9Choice1, page8);
NextPage(btnPage8Choice2, page9Choice2, page8);

NextPageWithBar(btnPage9Choice1, page10, page9Choice1, li5, li6, li7);

btnPage9Choice2.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page9Choice2.style.display = "none"},700);
    li6.classList.remove('in-progress');
    li5.classList.remove('is-active');
    li4.classList.remove('is-complete');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});
NextPage(btnPage10Choice1, page11Choice1, page10);
NextPage(btnPage10Choice2, page11Choice2, page10);

NextPageWithBar(btnPage11Choice1, page12, page11Choice1, li6, li7, li8);

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

NextPage(btnPage12Choice1, page13Choice1, page12);
NextPage(btnPage12Choice2, page13Choice2, page12);

NextPageWithBar(btnPage13Choice1, page14, page13Choice1, li7, li8, li9);

btnPage13Choice2.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page13Choice2.style.display = "none"},700);
    li8.classList.remove('in-progress');
    li7.classList.remove('is-active');
    li6.classList.remove('is-complete');
    li5.classList.remove('is-complete');
    li4.classList.remove('is-complete');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});

NextPage(btnPage14Choice1, page15Choice1, page14);
NextPage(btnPage14Choice2, page15Choice2, page14);
NextPage(btnPage14Choice3, page15Choice3, page14);

NextPageWithBar(btnPage15Choice1, page16, page15Choice1, li8, li9, li10);
NextPageWithBar(btnPage15Choice2, page16, page15Choice2, li8, li9, li10);
NextPageWithBar(btnPage15Choice3, page16, page15Choice3, li8, li9, li10);


NextPage(btnPage16Choice1, page17Choice1, page16);
NextPage(btnPage16Choice2, page17Choice2, page16);

btnPage17Choice1.addEventListener("click", () => {
    preface.style.display = "flex";
    preface.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page17Choice1.style.display = "none"},700);
    li10.classList.remove('in-progress');
    li9.classList.remove('is-active');
    li8.classList.remove('is-complete');
    li7.classList.remove('is-complete');
    li6.classList.remove('is-complete');
    li5.classList.remove('is-complete');
    li4.classList.remove('is-complete');
    li3.classList.remove('is-complete');
    Change_bar(li2, 'is-complete', ' in-progress');
    Change_bar(li1, 'is-complete', ' is-active');
});

btnPage17Choice2.addEventListener("click", () => {
    page18.style.display = "flex";
    page18.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {page17Choice2.style.display = "none"},700);
    Change_bar(li9, 'is-active', ' is-complete')
    Change_bar(li10, 'in-progress', ' is-active');
});

btnPage18Choice1.addEventListener("click", () => {
    moreLit.style.display = "flex";
});

btnMoreLit.addEventListener("click", () => {
    moreLit.style.display = "none";
});