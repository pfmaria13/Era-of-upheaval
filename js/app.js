let mainPage = document.querySelector(".main-page1");
let btnMainPlay = document.querySelector(".main-page1-play");
let btnMainRules = document.querySelector(".main-page1-rules");
let rules = document.querySelector(".rules");
let mainChoice = document.querySelector(".main-choice");
let btnRulesPlay = document.querySelector(".rules-play");
let btnRulesMain = document.querySelector(".rules-main");
let btnPeasant = document.querySelector(".peasant");
let btnNoble = document.querySelector(".noble");
let btnMerchant = document.querySelector(".merchant");
let btnWorker = document.querySelector(".worker");

btnMainPlay.addEventListener("click", () => {
    mainChoice.style.display = "flex";
    mainChoice.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {mainPage.style.display = "none"},700);
});

btnMainRules.addEventListener("click", () => {
    rules.style.display = "flex";
    rules.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {mainPage.style.display = "none"},700);
});

btnRulesPlay.addEventListener("click", () => {
    mainChoice.style.display = "flex";
    mainChoice.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {rules.style.display = "none"},700);
});

btnRulesMain.addEventListener("click", () => {
    mainPage.style.display = "flex";
    mainPage.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {rules.style.display = "none"},700);
});

btnPeasant.addEventListener("click", () => {
    setTimeout(() => {mainChoice.style.display = "none"},700);
});

btnNoble.addEventListener("click", () => {
    setTimeout(() => {mainChoice.style.display = "none"},700);
});

btnMerchant.addEventListener("click", () => {
    setTimeout(() => {mainChoice.style.display = "none"},700);
});

btnWorker.addEventListener("click", () => {
    setTimeout(() => {mainChoice.style.display = "none"},700);
});