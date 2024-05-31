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