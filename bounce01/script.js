var profilePhoto = document.getElementById("profile-photo");
var switchButton = document.getElementById("switch-photo");

switchButton.addEventListener("click", function() {
    profilePhoto.classList.add("fade");

    setTimeout(function() {
        if (profilePhoto.src.includes("casual.png")) {
            profilePhoto.src = "assets/professional.png";
            profilePhoto.alt = "Professional profile photo";
        } else {
            profilePhoto.src = "assets/casual.png";
            profilePhoto.alt = "Casual profile photo";
        }

        profilePhoto.classList.remove("fade");
    }, 100);
});