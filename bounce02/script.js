var translations = {
    en: {
        languageButton: "العربية",
        themeLight: "Light Mode",
        themeDark: "Dark Mode",
        photoButton: "Switch Photo",
        casualAlt: "Casual profile photo",
        professionalAlt: "Professional profile photo",

        navHome: "Safa",
        navAbout: "About Me",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",

        homeTitle: "Welcome to My Portfolio",
        homeDescription:
            "I am a software engineering student who loves web development.",

        aboutTitle: "About Me",
        aboutText:
            "I am a software engineering student who enjoys programming, exploring new technologies, and improving my skills.",

        skillsTitle: "Skills",

        projectsTitle: "Projects",
        projectsDescription: "Here are some of the projects I have worked on:",
        project00: "Project 00 — Linux, Git & GitHub",
        project01: "Project 01 — HTML",
        project02: "Project 02 — CSS & Visual Presentation",
        project03: "Project 03 — JavaScript & Interactivity",

        hobbiesTitle: "Hobbies",
        hobbiesDescription: "In my free time, I enjoy:",
        hobbyReading: "Reading",
        hobbyTraveling: "Traveling",
        hobbyPhotography: "Photography",
        hobbyCooking: "Cooking",

        contactTitle: "Contact",
        contactDescription: "You can reach me at:",
        emailLabel: "Email:",
        linkedinLabel: "LinkedIn:",
        linkedinName: "Safa Osama",

        nameLabel: "Your Name:",
        namePlaceholder: "Your Name",
        emailInputLabel: "Your Email:",
        emailPlaceholder: "Your Email",
        messageLabel: "Your Message:",
        messagePlaceholder: "Your Message",
        sendButton: "Send",

        footerText: "© 2026 Safa Osama. All rights reserved."
    },

    ar: {
        languageButton: "English",
        themeLight: "الوضع الفاتح",
        themeDark: "الوضع الداكن",
        photoButton: "تغيير الصورة",
        casualAlt: "صورة شخصية عفوية",
        professionalAlt: "صورة شخصية رسمية",

        navHome: "صفا",
        navAbout: "من أنا",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "التواصل",

        homeTitle: "مرحبًا بكم في معرض أعمالي",
        homeDescription:
            "أنا طالبة هندسة برمجيات أحب تطوير الويب.",

        aboutTitle: "من أنا",
        aboutText:
            "أنا طالبة هندسة برمجيات أستمتع بالبرمجة واستكشاف التقنيات الجديدة وتطوير مهاراتي.",

        skillsTitle: "المهارات",

        projectsTitle: "المشاريع",
        projectsDescription: "إليكم بعض المشاريع التي عملت عليها:",
        project00: "المشروع 00 — لينكس وجيت وجيت هب",
        project01: "المشروع 01 — HTML",
        project02: "المشروع 02 — CSS والتصميم المرئي",
        project03: "المشروع 03 — JavaScript والتفاعلية",

        hobbiesTitle: "الهوايات",
        hobbiesDescription: "في وقت فراغي، أستمتع بـ:",
        hobbyReading: "القراءة",
        hobbyTraveling: "السفر",
        hobbyPhotography: "التصوير",
        hobbyCooking: "الطهي",

        contactTitle: "التواصل",
        contactDescription: "يمكنكم التواصل معي عبر:",
        emailLabel: "البريد الإلكتروني:",
        linkedinLabel: "لينكد إن:",
        linkedinName: "صفا أسامة",

        nameLabel: "اسمك:",
        namePlaceholder: "أدخلي اسمك",
        emailInputLabel: "بريدك الإلكتروني:",
        emailPlaceholder: "أدخلي بريدك الإلكتروني",
        messageLabel: "رسالتك:",
        messagePlaceholder: "اكتبي رسالتك هنا",
        sendButton: "إرسال",

        footerText: "© 2026 صفا أسامة. جميع الحقوق محفوظة."
    }
};


var currentLanguage = "en";

var themeButton = document.getElementById("theme");

function updateThemeButton() {
    var isLight = document.body.classList.contains("light-theme");
    var text = translations[currentLanguage];

    themeButton.textContent = isLight
        ? text.themeDark
        : text.themeLight;
}

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    updateThemeButton();
});


var profilePhoto = document.getElementById("profile-photo");
var switchButton = document.getElementById("photo-switch");

switchButton.addEventListener("click", function() {
    profilePhoto.classList.add("fade");

    setTimeout(function() {
        var isCasual = profilePhoto.src.includes("casual.png");

        if (isCasual) {
            profilePhoto.src = "assets/professional.png";
            profilePhoto.alt = translations[currentLanguage].professionalAlt;
        } else {
            profilePhoto.src = "assets/casual.png";
            profilePhoto.alt = translations[currentLanguage].casualAlt;
        }

        profilePhoto.classList.remove("fade");
    }, 150);
});


var languageButton = document.getElementById("language-switch");

function updateLanguage() {
    var text = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    var elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function(element) {
        var key = element.getAttribute("data-i18n");

        if (text[key] !== undefined) {
            element.textContent = text[key];
        }
    });

    var placeholders = document.querySelectorAll(
        "[data-i18n-placeholder]"
    );

    placeholders.forEach(function(element) {
        var key = element.getAttribute("data-i18n-placeholder");

        if (text[key] !== undefined) {
            element.placeholder = text[key];
        }
    });

    var photoKey = profilePhoto.src.includes("casual.png")
        ? "casualAlt"
        : "professionalAlt";

    profilePhoto.alt = text[photoKey];

    updateThemeButton();
}

languageButton.addEventListener("click", function() {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    updateLanguage();
});


updateThemeButton();

var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert(
        currentLanguage === "ar"
            ? "شكرًا لك! هذا النموذج تجريبي."
            : "Thank you! This form is a demo."
    );
});
