// Til ma'lumotlari (Translations)
const translations = {
    uz: {
        title: "Language Website",
        greeting: "Salom, Dunyo!",
        actionBtn: "Boshlash",
        alertMsg: "Siz Boshlash tugmasini bosdingiz!"
    },
    en: {
        title: "Language Website",
        greeting: "Hello, World!",
        actionBtn: "Start",
        alertMsg: "You clicked the Start button!"
    },
    ru: {
        title: "Language Website",
        greeting: "Привет, мир!",
        actionBtn: "Начать",
        alertMsg: "Вы нажали кнопку Начать!"
    }
};

// Elementlarni olish
const siteTitle = document.getElementById("site-title");
const greeting = document.getElementById("greeting");
const actionBtn = document.getElementById("action-btn");
const langButtons = document.querySelectorAll(".lang-btn");

let currentLang = "uz";

// Tilni o'zgartirish funksiyasi
function changeLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    // Matnlarni o'zgartirish
    siteTitle.textContent = translations[lang].title;
    greeting.textContent = translations[lang].greeting;
    actionBtn.textContent = translations[lang].actionBtn;

    // HTML lang atributini yangilash
    document.documentElement.lang = lang;

    // Faol tugma ko'rinishini yangilash
    langButtons.forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// Har bir til tugmasiga hodisa (click) biriktirish
langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang");
        changeLanguage(selectedLang);
    });
});

// Boshlash tugmasi bosilganda xabar chiqarish
actionBtn.addEventListener("click", () => {
    alert(translations[currentLang].alertMsg);
});
