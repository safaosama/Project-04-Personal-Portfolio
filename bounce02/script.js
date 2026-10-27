var translations = {
    en: {
        button: "العربية",
        title: "Welcome to My Portfolio",
        description: "I am a software engineering student.",
        aboutTitle: "About Me",
        aboutText: "I love programming and learning new technologies.",
        skillsTitle: "My Skills",
        skillsText: "HTML, CSS, JavaScript and Python",
        contactTitle: "Contact Me",
        contactText: "Feel free to get in touch!",
        themeButton: "Dark Mode"
    },
    ar: {
        button: "English",
        title: "مرحبًا بكم في معرض أعمالي",
        description: "أنا طالبة هندسة برمجيات.",
        aboutTitle: "من أنا",
        aboutText: "أحب البرمجة وتعلّم التقنيات الحديثة.",
        skillsTitle: "مهاراتي",
        skillsText: "HTML وCSS وJavaScript وPython",
        contactTitle: "تواصلوا معي",
        contactText: "يسعدني تواصلكم معي!",
        themeButton: "الوضع الداكن"
    }
};

var languageButton = document.getElementById("language-button");
var currentLanguage = "en";

languageButton.addEventListener("click", function() {
    if (currentLanguage === "en") {
        currentLanguage = "ar";
    } else {
        currentLanguage = "en";
    }

    var text = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.getElementById("language-button").textContent = text.button;
    document.getElementById("title").textContent = text.title;
    document.getElementById("description").textContent = text.description;
    document.getElementById("about-title").textContent = text.aboutTitle;
    document.getElementById("about-text").textContent = text.aboutText;
    document.getElementById("skills-title").textContent = text.skillsTitle;
    document.getElementById("skills-text").textContent = text.skillsText;
    document.getElementById("contact-title").textContent = text.contactTitle;
    document.getElementById("contact-text").textContent = text.contactText;
});

var themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent =
            currentLanguage === "ar" ? "الوضع الفاتح" : "Light Mode";
    } else {
        themeButton.textContent =
            currentLanguage === "ar" ? "الوضع الداكن" : "Dark Mode";
    }
});