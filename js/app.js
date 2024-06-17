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
let pageTeam = document.querySelector(".page-team");
let btnPage1Team = document.querySelector(".page1-team");
let btnPageToMain = document.querySelector(".main-btn-team");

function NextPage (btn, nextPage, previousPage) {
    btn.addEventListener("click", () => {
        nextPage.style.display = "flex";
        nextPage.scrollIntoView({ block: "center", behavior: "smooth" });
        setTimeout(() => {previousPage.style.display = "none"},600);
    });
}
NextPage(btnMainPlay, mainChoice, mainPage);
NextPage(btnRulesPlay, mainChoice, rules);

btnRulesMain.addEventListener("click", () => {
    mainPage.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {rules.style.display = "none"},600);
})

btnPageToMain.addEventListener("click", () => {
    mainPage.scrollIntoView({ block: "center", behavior: "smooth" });
    setTimeout(() => {pageTeam.style.display = "none"},600);
})

btnMainRules.addEventListener("click", () => {
    rules.style.display = "flex";
    rules.scrollIntoView({ block: "center", behavior: "smooth" });
})

btnPage1Team.addEventListener("click", () => {
    pageTeam.style.display = "flex";
    pageTeam.scrollIntoView({ block: "center", behavior: "smooth" });
})


btnPeasant.addEventListener("click", () => {
    $.ajax({
        type: 'POST',
        url: '../db/peasant_stats.php',
        data: { action: 'update' },
        success: function(response) {
            console.log('Данные обновлены: ' + response);
        },
        error: function() {
            console.log('Ошибка при обновлении данных');
        }
    })
    document.location='peasant.html';
});

btnNoble.addEventListener("click", () => {
    $.ajax({
        type: 'POST',
        url: '../db/noble_stats.php',
        data: { action: 'update' },
        success: function(response) {
            console.log('Данные обновлены: ' + response);
        },
        error: function() {
            console.log('Ошибка при обновлении данных');
        }
    })
    document.location='noble.html';
});

btnMerchant.addEventListener("click", () => {
    $.ajax({
        type: 'POST',
        url: '../db/merchant_stats.php',
        data: { action: 'update' },
        success: function(response) {
            console.log('Данные обновлены: ' + response);
        },
        error: function() {
            console.log('Ошибка при обновлении данных');
        }
    })
    document.location='merchant.html';
});

btnWorker.addEventListener("click", () => {
    $.ajax({
        type: 'POST',
        url: '../db/worker_stats.php',
        data: { action: 'update' },
        success: function(response) {
            console.log('Данные обновлены: ' + response);
        },
        error: function() {
            console.log('Ошибка при обновлении данных');
        }
    })
    document.location='worker.html';
});