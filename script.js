function displayNavBar() {
    var actual = document.getElementById("navItems");

    if (actual.style.display == "none") {
        actual.style.display = "block";
        window.addEventListener("resize", function () {
            if (window.matchMedia("(max-width: 767px)").matches) {
                actual.style.display = "block";
            } else {
                actual.style.display = "flex";
            }
        });
    } else {
        actual.style.display = "none";
        window.addEventListener("resize", function () {
            if (window.matchMedia("(max-width: 767px)").matches) {
                actual.style.display = "none";
            } else {
                actual.style.display = "flex";
            }
        });
    }
}